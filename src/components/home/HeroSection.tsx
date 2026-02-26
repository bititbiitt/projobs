"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, Search } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';

interface Category {
  name: string;
  slug: string;
  count: number;
}

interface HeroSectionProps {
  categories: Category[];
}

interface SuggestionItem {
  value: string;
  type: 'keyword' | 'location';
  score: number;
}

export default function HeroSection({ categories }: HeroSectionProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  // Animated placeholder state for cycling search hints
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("Search by job title, function, category, or organization...|");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animated Placeholder for Search Box - Typewriter effect cycles through helpful search examples
  useEffect(() => {
    const placeholders = [
      "Search by job title, function, category, or organization",
      "Try 'Web Developer' or 'Remote'",
      "Enter by city, state, or ZIP code",
      "Or just ZIP code like '90210'",
    ];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let pauseEnd = Date.now() + 2000; // Initial pause at the end of text
    let step = 0;
    const typingSteps = 2; // 100ms (50ms * 2)
    const erasingSteps = 1; // 25ms (50ms * 1)

    const interval = setInterval(() => {
      step++;
      const currentText = placeholders[currentTextIndex];

      if (isDeleting) {
        if (step % erasingSteps === 0) {
          if (currentCharIndex > 0) {
            currentCharIndex--;
            setAnimatedPlaceholder(currentText.substring(0, currentCharIndex) + "|");
          } else {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % placeholders.length;
            pauseEnd = Date.now() + 700; // Short pause before typing next
          }
        }
      } else {
        if (Date.now() > pauseEnd) {
          if (step % typingSteps === 0) {
            if (currentCharIndex < currentText.length) {
              currentCharIndex++;
              setAnimatedPlaceholder(currentText.substring(0, currentCharIndex) + "|");
            } else {
              isDeleting = true;
              pauseEnd = Date.now() + 3000; // Pause before deleting
            }
          }
        }
      }
    }, 50); // Base interval

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const encQuery = encodeURIComponent(query);
    const qLower = query.toLowerCase();
    
    if (query.trim().length > 0) {
       // --- Dual-Fetch Strategy ---
       // 1. Fetch Keywords: Jobs, Functions, Categories, Organizations
       // 2. Fetch Locations: Cities, States, Zip Codes
       Promise.all([
          fetch(`/api/search?q=${encQuery}`, { signal: controller.signal }),
          fetch(`/api/search?taxonomy=locations&q=${encQuery}`, { signal: controller.signal })
       ])
       .then(async ([kRes, lRes]) => {
          const kData = kRes.ok ? await kRes.json() : [];
          const lData = lRes.ok ? await lRes.json() : [];

          // Determine input type (Numeric/Zip vs Alpha)
          const isNumericInput = /^\d/.test(qLower);

          // --- Process Locations ---
          const locationItems: SuggestionItem[] = (Array.isArray(lData) ? lData : [])
             .filter((item: any) => typeof item === 'string' && item.length > 0)
             .map((item: string) => {
                 const lowerItem = item.toLowerCase();
                 let score = 0;
                 let typeRating = 7; // Default to Zip (lowest priority in alpha text search)

                 // Case A: Numeric Input (Zip Code Search)
                 if (isNumericInput) {
                    // Extract zip code from string (e.g. "Austin, TX 78701" -> 78701)
                     const match = item.match(/\b\d{5}\b/);
                     // STRICT CHECK: The zip code must start with the user's query
                     if (match && match[0].startsWith(qLower)) {
                        const zip = parseInt(match[0], 10);
                        return { value: item, type: 'location' as const, score: 100, sortValue: zip }; // High score for numeric
                     }
                 }

                 // Case B: Alpha Input (City/State Search)
                 // Priority 1: City Match (Starts with query)
                 if (lowerItem.startsWith(qLower)) {
                     score = 3; 
                     typeRating = 5; // City priority implementation
                 } else {
                     // Priority 2: State Match (e.g. "Austin, TX" matches "TX")
                     const parts = lowerItem.split(',').map(s => s.trim());
                     if (parts.length > 1 && parts[1].toLowerCase().startsWith(qLower)) {
                        score = 2;
                        typeRating = 6; // State priority implementation
                     } else {
                        // Check zip part for non-numeric start (edge case)
                         const match = item.match(/\b\d{5}\b/);
                         if (match && match[0].startsWith(qLower)) {
                             score = 1;
                             typeRating = 7; // Zip priority implementation
                         }
                     }
                 }

                 return { value: item, type: 'location' as const, score, typeRating, sortValue: 0 };
             })
             .filter(i => i.score > 0);

          // --- Process Keywords ---
          // API returns objects: { text: string, type: string }
          const keywordItems: SuggestionItem[] = (Array.isArray(kData) ? kData : [])
             .filter((item: any) => {
                 const text = typeof item === 'string' ? item : item.text;
                 return text.toLowerCase().startsWith(qLower);
             })
             .map((item: any) => {
                 const text = typeof item === 'string' ? item : item.text;
                 const type = typeof item === 'string' ? 'keyword' : item.type;
                 
                 let typeRating = 99;
                 // --- Universal Search Priority Order (Alpha Mode) ---
                 // 1. Job Titles (type: job)
                 // 2. Job Functions (type: function)
                 // 3. Job Categories (type: category)
                 // 4. Organizations (type: Organizations)
                 // 5. City (Location heuristic)
                 // 6. State (Location heuristic)
                 // 7. Zip Code (Location heuristic)
                 // 8. No Match -> Handled by backend (Deep Search in Details)
                 if (type === 'job') typeRating = 1;
                 else if (type === 'function') typeRating = 2;
                 else if (type === 'category') typeRating = 3;
                 else if (type === 'company' || type === 'organization') typeRating = 4;
                 else typeRating = 10; // Unknown types

                 return { 
                     value: text, 
                     type: 'keyword', 
                     score: isNumericInput ? 0.5 : 5, // Keywords have lower score if user types text
                     typeRating 
                 }; 
             });

          // --- Merge & Sort Strategy (Ghost Text Logic) ---
          // The sort order here DIRECTLY DETERMINES the top suggestion, which becomes the "Ghost Text".
          //
          // ALPHA MODE (e.g. "C", "Ca", "Tx"):
          // - Priority is determined by typeRating (1-7).
          // - Example "C": Matches "Civil Engineer" (Job Title, Rank 1). 
          //     Sorted by Job Title A-Z.
          //     Ghost Text: "Civil Engineer"
          // - Example "Ca": No Job Title match. Matches "Beverly Hills, CA" (State Match, Rank 6).
          //     Sorted by City/State A-Z.
          //     Ghost Text: "Beverly Hills, CA 90210"
          // - Example "Tx": Matches "Austin, TX" (State Match, Rank 6).
          //     Sorted by City/State A-Z.
          //     Ghost Text: "Austin, TX 73301"
          //
          // NUMERIC MODE (e.g. "8", "900"):
          // - Priority is determined by score (Zip matches get 100).
          // - Example "8": Matches "80202" (Zip Match). sorted by Zip Code numeric order.
          //     Ghost Text: "Denver, CO 80202"
          
          const merged = [...locationItems, ...keywordItems].sort((a: any, b: any) => {
              // Rule 1: Numeric Input Algorithm
              // 1. Zip Code (Highest Priority - Score 100)
              // 2. City name starts with number (Rare)
              // 3. State code starts with number (Impossible)
              // 4. No Match -> Handled by backend (Deep Search in Details)
              if (isNumericInput) {
                   // Prefer high scores (Zip matches)
                   if (a.score !== b.score) return b.score - a.score;
                   // Tie-break by numeric value for zips
                   if (a.sortValue !== b.sortValue) return a.sortValue - b.sortValue;
              }

              // Rule 2: Alpha Input Algorithm
              // strict separation by Type Rating (1-7)
              // 1. Job Title
              // 2. Job Function
              // 3. Job Category
              // 4. Organization/Company
              // 5. City Match
              // 6. State Match
              // 7. Zip Match
              if (a.typeRating !== b.typeRating) {
                  return a.typeRating - b.typeRating;
              }

              // Rule 3: Alphabetical Tie-Breaker
              return a.value.localeCompare(b.value);
          }).slice(0, 8);

          setSuggestions(merged);
       })
       .catch(err => { if (err.name !== 'AbortError') console.error(err); });

    } else {
      setSuggestions([]);
      setActiveIndex(-1);
    }
    return () => controller.abort();
  }, [query]);

  const inlineSuggestion = useMemo(() => {
    if (isMobile || !query || suggestions.length === 0) return "";
    
    let match: SuggestionItem | undefined;

    // 1. If user navigated to a specific item, prioritize it
    if (activeIndex >= 0 && activeIndex < suggestions.length) {
      match = suggestions[activeIndex];
    }

    // 2. Fallback: Find the first valid suggestion
    if (!match) {
      match = suggestions[0];
    }
    
    // Safety check prefix (Standard "Austin" -> "Austin, TX")
    if (match && match.value.toLowerCase().startsWith(query.toLowerCase())) {
       return match.value.slice(query.length);
    }
    
    // Special Case: Zip Code Context Match (90026 -> 90026 - Los Angeles, CA)
    // Show " - Los Angeles, CA" as ghost text
    if (match && /^\d{5}$/.test(query) && match.value.includes(query)) {
        // Remove the zip (90026) from the full string context (Los Angeles, CA 90026) to get the city/state info.
        // "Los Angeles, CA 90026" -> "Los Angeles, CA "
        const remainder = match.value.replace(query, '').trim();
        // Return formatted suffix: "  - Los Angeles, CA" (Double space prefix to visually separate from input for readability)
        // This provides the user immediate confirmation of the location associated with the zip code.
        return `  - ${remainder.replace(/,/g, '').trim()}`; // simplified view
    }

    return "";
  }, [query, suggestions, isMobile, activeIndex]);

  // --- SEARCH SELECTION LOGIC ---
  const handleSelect = (item: SuggestionItem | string) => {
    // If string passed (e.g. from Enter key on raw input), we must guess type
    let value = '';
    let type = 'keyword';

    if (typeof item === 'string') {
        value = item.trim();

        // Simple heuristic for raw input
        // - If it looks like a structured location (comma), treat as location.
        // - If it's exactly 5 digits, prefer location only when we have location candidates.
        //   This enables a "no-zip-match" fallback path where numeric text can be treated as a keyword
        //   and resolved by deep-search (JobDetail.description contains) on /api/jobs.
        const isZipOnly = /^\d{5}$/.test(value);
        const hasComma = value.includes(',');
        const hasLocationCandidateForZip = isZipOnly
          ? suggestions.some((s) => s.type === 'location' && s.value.includes(value))
          : false;

        if (hasComma) {
          type = 'location';
        } else if (isZipOnly) {
          type = hasLocationCandidateForZip ? 'location' : 'keyword';
        } else {
          // Smart fallback: use suggestions to infer intent if user hit Enter without selecting.
          // Scenario: user typed "Austin" and hit Enter. Top suggestion is "Austin, TX" (Location).
          // Upgrade this from keyword to location to enable radius filtering.
          const bestMatch = suggestions.length > 0 ? suggestions[0] : null;
          if (bestMatch && bestMatch.type === 'location' && bestMatch.value.toLowerCase().startsWith(value.toLowerCase())) {
            type = 'location';
            value = bestMatch.value; // Auto-complete to ensure backend gets the full context string
          }
        }
    } else {
        // User clicked/selected a specific suggestion item
        value = item.value;
        type = item.type;
    }

    setQuery(value);
    setIsFocused(false);
    setSuggestions([]);
    
    // Redirect based on inferred or selected type
    if (type === 'location') {
        // Location search from home page triggers the Radius Filter logic on the jobs page when user hits enter
        // Scenario: User typed "90026" and hits Enter. User gets is directed to jobs page.
        // Default to 50 miles radius for instant results (especially for Zip/City searches)
        //  Result: User would see all posted jobs within a 50-mile radius of 90026 on jobs page.       
        router.push(`/jobs?location=${encodeURIComponent(value)}&radius=50`);
    } else {
        // Generic keyword search (Job Title, Function, Company, etc.)
        router.push(`/jobs?q=${encodeURIComponent(value)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // --- ENTER KEY LOGIC ---
    if (e.key === "Enter") {
       e.preventDefault();
       // If an item is active via arrow keys, select it.
       if (activeIndex >= 0 && suggestions.length > 0) {
           handleSelect(suggestions[activeIndex]);
       } else {
           // Otherwise, submit the raw text (which will run through the smart logic in handleSelect)
           handleSelect(query);
       }
       return;
    }

    if (suggestions.length === 0) return;

    // --- NAVIGATION KEYS ---
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, -1));
    } 
    // --- TAB KEY LOGIC ---
    // Allows rapid acceptance of the top suggestion (Ghost Text)
    else if (e.key === "Tab") {
      if (suggestions.length === 0) return;
      e.preventDefault();
      // Select the active item if one is highlighted, otherwise default to the top suggestion (Best Match)
      const target = activeIndex >= 0 ? suggestions[activeIndex] : suggestions[0];
      handleSelect(target);
    } else if (e.key === "Escape") {
      setIsFocused(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#172554] to-[#1e7a8a] pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        {/* Background Overlay - keeping simple gradient for now as requested */}
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          
          {/* Search Box - Includes pulsating border animation when not focused to draw attention */}
          <div className={`max-w-3xl mx-auto bg-white rounded-lg p-1 shadow-xl mb-12 relative z-50 border ${isFocused ? "border-red-500" : "border-gray-200 pulse-border"}`}>
            <form 
              action="/jobs" 
              className="flex flex-col md:flex-row gap-2 relative"
              onSubmit={(e) => {
                e.preventDefault();
                handleSelect(query);
              }}
            >
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent-blue transition-colors z-20" size={20} />
                
                 {/* Ghost Text Overlay */}
                {!isMobile && isFocused && (
                  <div className="absolute inset-0 pl-12 pr-4 py-1.5 flex items-center pointer-events-none z-10">
                     {inlineSuggestion && (
                        <>
                           <span className="text-transparent whitespace-pre">{query}</span>{/* Keep query invisible to align suffix */}
                           <span className="text-gray-400 opacity-60 whitespace-pre">{inlineSuggestion}</span>
                           <span className="ml-2.5 text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 shadow-sm font-mono tracking-wider opacity-70">TAB</span>
                        </>
                     )}
                     {/* Fallback for non-prefix matches (e.g. Zip codes, State codes) where inline text doesn't align but Tab still works */}
                     {!inlineSuggestion && suggestions.length > 0 && (
                        <div className="flex-1 text-right">
                           <span className="text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 shadow-sm font-mono tracking-wider opacity-70">TAB</span>
                        </div>
                     )}
                  </div>
                )}
                
                <input 
                  type="text" 
                  name="q"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIndex(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  autoComplete="off"
                  placeholder={animatedPlaceholder} 
                   // --- Search Box Focus Styling ---
                   // The border changes to RED (border-red-500) when the user focuses the input.
                   // This provides a clear visual cue of the active interaction state.
                  className="w-full pl-12 pr-4 py-1.5 rounded-md outline-none text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-red-500/20 transition-all border border-transparent hover:border-accent-blue/50 focus:border-red-500 bg-transparent relative z-20"
                />
                
                {/* Suggestions Dropdown (Desktop Only) */}
                {!isMobile && isFocused && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-xl border border-gray-100 overflow-hidden text-left z-50">
                    <ul>
                      {suggestions.map((item, idx) => (
                        <li key={idx}>
                          <button 
                            type="button"
                            className={`w-full px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm flex items-center gap-2 ${
                              idx === activeIndex ? "bg-gray-100 ring-1 ring-inset ring-gray-200" : ""
                            }`}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setActiveIndex(idx)}
                          >
                           {item.type === 'location' ? <MapPin size={14} className="text-gray-400" /> : <Search size={14} className="text-gray-400" />}
                            {item.value}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button 
                type="submit"
                className="bg-navy hover:bg-navy-light hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-white font-medium px-8 py-1.5 rounded-md transition-all whitespace-nowrap"
              >
                Search Jobs
              </button>
            </form>

            {/* Mobile Suggestion Strip */}
            {isMobile && suggestions.length > 0 && (
              <div className="flex gap-2 p-2 overflow-x-auto border-t border-gray-100 mt-1">
                {suggestions.map((item, idx) => (
                  <button 
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 whitespace-nowrap active:bg-blue-50 active:border-blue-200 transition-colors flex items-center gap-2"
                  >
                    {item.type === 'location' ? <MapPin size={14} className="text-gray-400" /> : <Search size={14} className="text-gray-400" />}
                    {item.value}
                  </button>
                ))}
              </div>
            )}
          </div>


          {/* Popular Categories */}
          <div className="text-center">
           {/*  <span className="text-gray-300 text-sm mb-4 block">Popular:</span>*/}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              {categories.map((cat, idx) => (
                <Link 
                  key={idx} 
                  href={`/jobs?category=${cat.slug}`}
                  className="text-gray-200 hover:text-white transition-colors hover:underline"
                >
                  {cat.name} ({cat.count})
                </Link>
              ))}
            </div>
          </div>

        </div>
    </section>
  );
}
