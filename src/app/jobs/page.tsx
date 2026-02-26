"use client";

import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Bookmark, Filter, MapPin, Search, Star, ArrowLeft, ArrowRight, Check, FilterX } from "lucide-react";

const radiusOptions = [
  { label: "Select radius", value: "" },
  { label: "Within 1 mile", value: "1" },
  { label: "Within 5 miles", value: "5" },
  { label: "Within 10 miles", value: "10" },
  { label: "Within 25 miles", value: "25" },
  { label: "Within 50 miles", value: "50" },
  { label: "Within 100 miles", value: "100" },
];

const salaryOptions = [
  { label: "All Salaries", value: "" },
  { label: "Highest First", value: "highest" },
  { label: "Lowest First", value: "lowest" },
  { label: "$0–30K", value: "0-30" },
  { label: "$31–60K", value: "31-60" },
  { label: "$61–100K", value: "61-100" },
  { label: "$101–150K", value: "101-150" },
  { label: "$151–200K", value: "151-200" },
  { label: "$201–250K", value: "201-250" },
  { label: "$251–300K", value: "251-300" },
  { label: "$301–350K", value: "301-350" },
  { label: "$350+", value: "350plus" },
];

const workSiteOptions = [
  { label: "All Work Sites", value: "" },
  { label: "Flexible/Hybrid", value: "Hybrid" },
  { label: "On-site", value: "On-site" },
  { label: "Remote", value: "Remote" },
];

const jobTypeOptions = [
  { label: "All Types", value: "" },
  { label: "Full Time", value: "FULL_TIME" },
  { label: "Part Time", value: "PART_TIME" },
  { label: "Temporary", value: "TEMPORARY" },
  { label: "Volunteer", value: "VOLUNTEER" },
  { label: "Contract", value: "CONTRACT" },
  { label: "Internship", value: "INTERNSHIP" },
  { label: "Seasonal", value: "SEASONAL" },
  { label: "At Will", value: "AT_WILL" },
];

const jobLevelOptions = [
  { label: "All Levels", value: "" },
  { label: "Entry", value: "Entry" },
  { label: "Executive", value: "Executive" },
  { label: "Lead", value: "Lead" },
  { label: "Manager", value: "Manager" },
  { label: "Professional", value: "Professional" },
  { label: "Public Safety Rank", value: "Public Safety Rank" },
  { label: "Senior Manager", value: "Senior Manager" },
  { label: "Senior", value: "Senior" },
  { label: "Senior Professional", value: "Senior" },
  { label: "Skilled", value: "Skilled" },
  { label: "Supervisor", value: "Supervisor" },
  { label: "Support", value: "Support" },
  { label: "Temporary / Seasonal", value: "Temporary / Seasonal" },
];

const dateOptions = [
  { label: "All Dates", value: "" },
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Within 24 Hours", value: "24h" },
  { label: "Within Week", value: "week" },
  { label: "Within Month", value: "month" },
  { label: "Within 3 Months", value: "3months" },
];

const categoryPlaceholder = [{ label: "All Categories", value: "" }];
const functionPlaceholder = [{ label: "All Functions", value: "" }];

type Option = { label: string; value: string };

type Filters = {
  radius: string[];
  category: string[];
  jobFunction: string[];
  jobType: string[];
  jobLevel: string[];
  salary: string[];
  workSite: string[];
  dateRange: string[];
};

type JobItem = {
  id: string;
  title: string | null;
  company: string | null;
  organization: string | null;
  location: string | null;
  zipCode: string | null;
  salaryRange: string | null;
  workspace: string | null;
  type: string | null;
  level: string | null;
  featured: boolean;
  slug: string | null;
  applyUrl?: string | null;
  description: string | null;
  openingDate: string | null;
  closingDate: string | null;
  reviewingDate: string | null;
  createdAt: string;
  jobCategory?: { name: string; slug: string } | null;
  jobFunction?: { name: string; slug: string } | null;
};

interface SuggestionItem {
  value: string;
  type: 'keyword' | 'location';
  score: number;
  typeRating?: number; // 1-10 priority (1=Highest)
  sortValue?: number; // For Zip codes
}

function formatDate(value?: string | null) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

function daysAgo(value?: string) {
  if (!value) return "";
  const now = new Date();
  const then = new Date(value);
  const diff = now.getTime() - then.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

function isFilterActive(filters: Filters, searchText: string, locationText: string) {
  return (
    searchText.trim() !== "" ||
    locationText.trim() !== "" ||
    Object.values(filters).some((v) => v.length > 0)
  );
}

function JobsPageContent() {
  const searchParams = useSearchParams();

  // Unified Search State
  // We initialize the input with q or location if present (prefer q if both, or combine? usually q)
  const [query, setQuery] = useState(searchParams.get("q") || searchParams.get("location") || "");
  
  // Actual Filter State (kept separate to drive the API)
  const [debouncedSearch, setDebouncedSearch] = useState(searchParams.get("q") || "");
  const [debouncedLocation, setDebouncedLocation] = useState(searchParams.get("location") || "");

  const [filters, setFilters] = useState<Filters>({
    radius: searchParams.getAll("radius"),
    category: searchParams.getAll("category"),
    jobFunction: searchParams.getAll("jobFunction"),
    jobType: searchParams.getAll("jobType"),
    jobLevel: searchParams.getAll("jobLevel"),
    salary: searchParams.getAll("salary"),
    workSite: searchParams.getAll("workSite"),
    dateRange: searchParams.getAll("dateRange"),
  });

  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [categories, setCategories] = useState<Option[]>(categoryPlaceholder);
  const [functions, setFunctions] = useState<Option[]>(functionPlaceholder);
  
  // Unified Suggestions State
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // Animated placeholder state for cycling search hints
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("Search by job title, function, category, or organization...|");
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const filterPanelRef = useRef<HTMLDivElement | null>(null);

  const pageSize = 20;

  const filterActive = useMemo(
    () => isFilterActive(filters, debouncedSearch, debouncedLocation),
    [filters, debouncedSearch, debouncedLocation]
  );

  useEffect(() => {
    // Search-As-You-Type (Debounced)
    const handler = setTimeout(() => {
      const qClean = query.trim();

      // Clear if empty
      if (qClean === "") {
        setDebouncedSearch("");
        setDebouncedLocation("");
        return;
      }

      // If matches explicit Location Patterns (Zip Code or City, State)
      // prioritize it as location
      if (/^\d{5}/.test(qClean) || qClean.includes(',')) {
          setDebouncedLocation(query);
          setDebouncedSearch("");
      } else {
          // Otherwise treat as keyword (default behavior for pasted text)
          // This ensures "Engineer" works as a keyword search immediately
          setDebouncedSearch(query);
          // Do NOT clear location here if it was previously set? 
          // Actually, if they type in the single box, we assume they are REPLACING the previous search.
          // So clearing the other field is correct for a unified box.
          setDebouncedLocation("");
      }

    }, 600); 

    return () => clearTimeout(handler);
  }, [query]); // Remove suggestions dependency to avoid race conditions

  // Remove separate location debounce effect

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

  // Combined Suggestion Fetching (Copied & Adapted from HeroSection)
  useEffect(() => {
    const controller = new AbortController();
    const qLower = query.toLowerCase();
    
    if (query.trim().length > 0) {
       const encQuery = encodeURIComponent(query);
       
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
                 let typeRating = 7; 

                 // Case A: Numeric Input (Zip Code Search)
                 if (isNumericInput) {
                     const match = item.match(/\b\d{5}\b/);
                     if (match && match[0].startsWith(qLower)) {
                        const zip = parseInt(match[0], 10);
                        return { value: item, type: 'location' as const, score: 100, sortValue: zip }; 
                     }
                 }

                 // Case B: Alpha Input (City/State Search)
                 if (lowerItem.startsWith(qLower)) {
                     score = 3; 
                     typeRating = 5; 
                 } else {
                     const parts = lowerItem.split(',').map(s => s.trim());
                     if (parts.length > 1 && parts[1].toLowerCase().startsWith(qLower)) {
                        score = 2;
                        typeRating = 6; 
                     } else {
                         const match = item.match(/\b\d{5}\b/);
                         if (match && match[0].startsWith(qLower)) {
                             score = 1;
                             typeRating = 7; 
                         }
                     }
                 }

                 return { value: item, type: 'location' as const, score, typeRating, sortValue: 0 };
             })
             .filter(i => i.score > 0);

          // --- Process Keywords ---
          const keywordItems: SuggestionItem[] = (Array.isArray(kData) ? kData : [])
             .filter((item: any) => {
                 const text = typeof item === 'string' ? item : item.text;
                 return text.toLowerCase().startsWith(qLower);
             })
             .map((item: any) => {
                 const text = typeof item === 'string' ? item : item.text;
                 const type = typeof item === 'string' ? 'keyword' : item.type;
                 
                 let typeRating = 10;
                 if (type === 'job') typeRating = 1;
                 else if (type === 'function') typeRating = 2;
                 else if (type === 'category') typeRating = 3;
                 else if (type === 'company' || type === 'organization') typeRating = 4;

                 return { 
                     value: text, 
                     type: 'keyword' as const, 
                     score: isNumericInput ? 0.5 : 5, 
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
                  return (a.typeRating || 99) - (b.typeRating || 99);
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

  // Unified Ghost Text
  const inlineSuggestion = useMemo(() => {
    if (isMobile || !query || suggestions.length === 0) return "";
    
    // Standard Prefix Match
    const bestMatch = suggestions[0];
    if (bestMatch && bestMatch.value.toLowerCase().startsWith(query.toLowerCase())) {
       return bestMatch.value.slice(query.length);
    }
    
    // Zip Code Context Match (90026 -> 90026 - Los Angeles, CA)
    if (bestMatch && /^\d{5}$/.test(query) && bestMatch.value.includes(query)) {
        const remainder = bestMatch.value.replace(query, '').trim();
        return `  - ${remainder.replace(/,/g, '').trim()}`; // extra space for separation
    }

    return "";
  }, [query, suggestions, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!filterPanelRef.current) return;
      if (openFilter && !filterPanelRef.current.contains(event.target as Node)) {
        setOpenFilter(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openFilter]);

  const optionSources: Record<keyof Filters, Option[]> = {
    radius: radiusOptions,
    category: categories,
    jobFunction: functions,
    jobType: jobTypeOptions,
    jobLevel: jobLevelOptions,
    salary: salaryOptions,
    workSite: workSiteOptions,
    dateRange: dateOptions,
  };

  const findLabel = (key: keyof Filters, value: string) => {
    const options = optionSources[key] || [];
    return options.find((o) => o.value === value)?.label || value;
  };

  // --- Filter Construction ---
  // Converts state filters (arrays) into URL search params
  const buildParams = (targetPage: number) => {
    const params = new URLSearchParams();
    params.set("page", String(targetPage));
    params.set("pageSize", String(pageSize));
    if (debouncedSearch) params.set("q", debouncedSearch);
    if (debouncedLocation) params.set("location", debouncedLocation);
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length) {
        value.forEach((v) => params.append(key, v));
      }
    });
    return params.toString();
  };

  const loadJobs = async (reset = false, targetPage?: number) => {
    const nextPage = targetPage ?? (reset ? 1 : page);
    setLoading(true);
    const params = buildParams(nextPage);
    const res = await fetch(`/api/jobs?${params}`);
    const data = await res.json();
    setTotal(data.total || 0);
    setHasMore(Boolean(data.hasMore));
    setPage(data.page || nextPage);
    setJobs((prev) => (reset ? data.items : [...prev, ...data.items]));
    setLoading(false);
  };

  // initial load - REMOVED (covered by filter change effect)
  // useEffect(() => {
  //   loadJobs(true, 1);
  // }, []);

  // reload on filter/search change
  useEffect(() => {
    loadJobs(true, 1);
  }, [debouncedSearch, debouncedLocation, filters]);

  // Fetch dropdown lists (categories/functions)
  useEffect(() => {
    const fetchTaxonomy = async () => {
      try {
        const [catRes, funcRes] = await Promise.all([
          fetch('/api/search?taxonomy=categories'),
          fetch('/api/search?taxonomy=functions'),
        ]);
        if (catRes.ok) {
          const cats = await catRes.json();
          if (Array.isArray(cats)) {
            setCategories([{ label: "All Categories", value: "" }, ...cats.map((c: any) => ({ label: c.name ?? c, value: c.slug ?? c }))]);
          }
        }
        if (funcRes.ok) {
          const funcs = await funcRes.json();
          if (Array.isArray(funcs)) {
            setFunctions([{ label: "All Functions", value: "" }, ...funcs.map((f: any) => ({ label: f.name ?? f, value: f.slug ?? f }))]);
          }
        }
      } catch (err) {
        // silent fail, placeholders remain
      }
    };
    fetchTaxonomy();
  }, []);

  // --- Infinite Scroll Observer ---
  // Triggers loadJobs() when user scrolls to the bottom sentinel
  useEffect(() => {
    if (!filterActive) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && hasMore && !loading) {
        loadJobs(false, page + 1);
      }
    }, { threshold: 1 });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filterActive, hasMore, loading, page]);

  const toggleFilterDropdown = (key: keyof Filters) => {
    setOpenFilter((prev) => (prev === key ? null : key));
  };

  const updateFilterSelection = (key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const next = new Set(prev[key]);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return { ...prev, [key]: Array.from(next) } as Filters;
    });
    setPage(1);
  };

  const onFilterChange = (key: keyof Filters, values: string[]) => {
    setFilters((prev) => ({ ...prev, [key]: values }));
    setPage(1);
  };

  // --- SEARCH BAR LOGIC ---
  const handleSelectSuggestion = (item: SuggestionItem | string) => {
    let value = typeof item === 'string' ? item : item.value;
    let type = typeof item === 'string' ? "keyword" : item.type; // default raw text to keyword

    if (typeof item === 'string') {
        const match = suggestions.find((s) => s.value.toLowerCase() === item.toLowerCase());
        if (match) {
            value = match.value;
            type = match.type;
        } else {
             // Smart Classification: Did user type a Location?
             // Check 1: Explicit patterns (5-digit Zip, or "City, State")
             if (/^\d{5}/.test(value) || value.includes(',')) {
                 type = 'location';
             } else {
                 // Check 2: Implicit Match from Top Suggestion
                 // e.g. User typed "Austin" and hit Enter. Top suggestion "Austin, TX".
                 // Auto-upgrade to Location search.
                 const bestMatch = suggestions.length > 0 ? suggestions[0] : null;
                 if (bestMatch && bestMatch.type === 'location' && bestMatch.value.toLowerCase().startsWith(value.toLowerCase())) {
                     type = 'location';
                     value = bestMatch.value; // Auto-complete to full location string
                 }
             }
        }
    }

    setQuery(value);
    setIsFocused(false);
    setSuggestions([]);
    setActiveIndex(-1);

    // Apply Filter State immediately
    if (type === 'location') {
        setDebouncedLocation(value);
        setDebouncedSearch(""); // clear generic search to enable radius logic
    } else {
        setDebouncedSearch(value);
        setDebouncedLocation(""); // clear location to enable keyword search
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    // --- NAVIGATION KEYS ---
    if (e.key === "ArrowDown") {
      if (suggestions.length === 0) return;
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      if (suggestions.length === 0) return;
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } 
    // --- ENTER KEY LOGIC ---
    else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && suggestions.length > 0) {
        handleSelectSuggestion(suggestions[activeIndex]);
      } else {
        handleSelectSuggestion(query); // Submit Raw Text (processed by handleSelectSuggestion)
      }
    } 
    // --- TAB KEY LOGIC ---
    // Selects the "Best Match" (Ghost Text)
    else if (e.key === "Tab") {
      if (suggestions.length === 0) return;
      e.preventDefault();
      // Select the active item if one is highlighted, otherwise default to the top suggestion
      const target = activeIndex >= 0 ? suggestions[activeIndex] : suggestions[0];
      handleSelectSuggestion(target);
    } else if (e.key === "Escape") {
      setIsFocused(false);
    }
  };

  const clearFilters = () => {
    setFilters({
      radius: [],
      category: [],
      jobFunction: [],
      jobType: [],
      jobLevel: [],
      salary: [],
      workSite: [],
      dateRange: [],
    });
    setQuery("");
    // Effect will clear debounced filters
  };

  const toggleSavedJob = (jobId: string) => {
    setSavedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const renderCheckboxDropdown = (key: keyof Filters, label: string, options: Option[]) => {
    const selected = filters[key];
    const isOpen = openFilter === key;
    const cleanOptions = options.filter((opt) => opt.value !== "");
    const summary = selected.length === 0 ? label : `${selected.length} Selected`;
    const hasSelection = selected.length > 0;

    // --- Active Filter Border Logic ---
    // Rule: If a user has selected any filters in this group (selected.length > 0),
    // the border turns RED ("border-red-500") to visually indicate active refinement.
    // If no filters are selected, it reverts to the standard teal/gray behavior.
    return (
      <div className="relative" key={key}>
        <button
          type="button"
          onClick={() => toggleFilterDropdown(key)}
          className={`w-full flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm bg-white shadow-sm transition-colors ${
            hasSelection ? "border-red-500 hover:border-red-600" : isOpen ? "border-primary-teal" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <span className={`font-medium ${hasSelection ? "text-navy" : "text-gray-700"}`}>{summary}</span>
          <span className={`text-xs text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
        </button>
        {isOpen && (
          <div className="absolute z-50 mt-2 w-full min-w-[200px] rounded-lg border border-gray-200 bg-white shadow-lg max-h-[60vh] overflow-y-auto transform origin-top-left">
            <div className="py-2 text-sm">
              {cleanOptions.map((opt) => {
                const checked = selected.includes(opt.value);
                return (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer ${checked ? "bg-gray-50" : ""}`}
                  >
                    <span className="h-4 w-4 rounded border border-gray-300 flex items-center justify-center bg-white">
                      {checked && <Check size={14} className="text-primary-teal" />}
                    </span>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => updateFilterSelection(key, opt.value)}
                    />
                    <span className="text-gray-700">{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderFilterRows = () => (
    <div className="space-y-3" ref={filterPanelRef}>
      {/* Mobile Header: Show Filters + Clear All */}
      <div className="flex flex-row lg:hidden items-center justify-between w-full mb-2">
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Filter size={16} />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {filterActive && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 px-4 py-2 text-sm text-primary-teal font-medium bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <FilterX size={16} />
            Clear all filters
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-start">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 flex-1">
        {/* --- Jobs Page Search Box Styling --- 
            Similar to Home Page, this box turns RED ("border-red-500") on focus. 
            Also includes pulsating border animation when not focused to draw attention.
        */}
        <div className={`col-span-1 lg:col-span-2 flex items-center gap-2 rounded-lg border px-3 py-2 bg-white shadow-sm relative transition-colors ${isFocused ? "border-red-500" : "border-gray-200 pulse-border"}`}>
          <Search size={16} className="text-gray-400" />
          {!isMobile && isFocused && (
            <div className="absolute inset-0 pl-7 pr-3 py-2 flex items-center pointer-events-none z-10">
              {inlineSuggestion && (
                 <>
                   <span className="text-transparent whitespace-pre">{query}</span>
                   <span className="text-gray-400 opacity-60 whitespace-pre">{inlineSuggestion}</span>
                   <span className="ml-2 text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 shadow-sm font-mono tracking-wider opacity-70">TAB</span>
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
            className="w-full focus:outline-none text-sm bg-transparent relative z-20"
            placeholder={animatedPlaceholder}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(-1); }}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
          {!isMobile && isFocused && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-xl border border-gray-100 overflow-hidden text-left z-50">
              <ul>
                {suggestions.map((item, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      className={`w-full px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm flex items-center gap-2 ${idx === activeIndex ? "bg-gray-100 ring-1 ring-inset ring-gray-200" : ""}`}
                      onClick={() => handleSelectSuggestion(item)}
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
        


        {/* Collapsible Mobile Filters */}
        <div className={`contents lg:contents ${!showMobileFilters ? "hidden lg:contents" : ""}`}>
          {renderCheckboxDropdown('radius', 'Radius', radiusOptions)}
          {renderCheckboxDropdown('category', 'Category', categories)}
        </div>
      </div>
        {filterActive && (
          <div className="hidden lg:flex lg:flex-col items-end lg:items-start">
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-primary-teal/40 hover:text-primary-teal w-full lg:w-auto whitespace-nowrap"
            >
              <Filter size={16} /> Reset all filters
            </button>
          </div>
        )}
      </div>

      {isMobile && isFocused && suggestions.length > 0 && (
        <div className="flex gap-2 p-2 overflow-x-auto border border-gray-100 bg-white rounded-lg shadow-sm">
          {suggestions.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectSuggestion(item)}
              className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 whitespace-nowrap active:bg-blue-50 active:border-blue-200 transition-colors flex items-center gap-2"
            >
              {item.type === 'location' ? <MapPin size={14} className="text-gray-400" /> : <Search size={14} className="text-gray-400" />}
              {item.value}
            </button>
          ))}
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 ${!showMobileFilters ? "hidden lg:grid" : ""}`}>
        {renderCheckboxDropdown('jobFunction', 'Function', functions)}

        {renderCheckboxDropdown('jobType', 'Job Type', jobTypeOptions)}
        {renderCheckboxDropdown('workSite', 'Work Site', workSiteOptions)}
        {renderCheckboxDropdown('jobLevel', 'Job Level', jobLevelOptions)}
        {renderCheckboxDropdown('salary', 'Salary', salaryOptions)}
        {renderCheckboxDropdown('dateRange', 'Date Range', dateOptions)}
      </div>

      {(() => {
        const selectedEntries = (Object.entries(filters) as [keyof Filters, string[]][]) 
          .flatMap(([key, values]) => values.map((value) => ({ key, value, label: findLabel(key, value) })));
        if (selectedEntries.length === 0) return null;
        return (
          <div className="flex flex-wrap gap-2">
            {selectedEntries.map((item, idx) => (
              <button
                key={`${item.key}-${item.value}-${idx}`}
                type="button"
                onClick={() => updateFilterSelection(item.key, item.value)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs text-gray-700 hover:border-primary-teal hover:text-primary-teal shadow-sm"
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-gray-400">✕</span>
              </button>
            ))}
          </div>
        );
      })()}
    </div>
  );

  const renderJobCard = (job: JobItem) => {
    const applyHref = (typeof job.applyUrl === 'string' && job.applyUrl) || (typeof job.slug === 'string' && job.slug ? `/jobs/${job.slug}` : "#");
    const postedText = daysAgo(job.createdAt);

    return (
      <div key={job.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-navy flex items-center gap-2">
              {job.title || 'Untitled role'}
              {job.featured && (
                <span className="text-xs font-semibold text-yellow-700 bg-accent-yellow/30 px-2 py-1 rounded-full">Featured</span>
              )}
            </h3>
            <p className="text-gray-600 font-medium">{job.organization || job.company || 'Organization unknown'}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={16} className="text-primary-teal" />
              <span>{job.location || 'Location unavailable'}</span>
              {postedText && <span className="ml-2 text-xs text-gray-400">{postedText}</span>}
            </div>
          </div>
          <button 
            onClick={() => toggleSavedJob(job.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-colors ${
              savedJobs.has(job.id) 
                ? "border-green-500 text-green-700 bg-green-50" 
                : "border-gray-200 text-gray-500 hover:text-primary-teal hover:border-primary-teal/40"
            }`}
          >
            <Bookmark size={16} className={savedJobs.has(job.id) ? "text-green-600" : ""} />
            <span className={`text-sm font-medium ${savedJobs.has(job.id) ? "font-bold text-green-700" : ""}`}>
              {savedJobs.has(job.id) ? "Saved ✓" : "Save job"}
            </span>
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-700">
          {job.salaryRange && <span className="font-semibold">Annual Salary: {job.salaryRange}</span>}
          {job.openingDate && <span className="flex items-center gap-1 text-gray-500 text-xs">Opening: {formatDate(job.openingDate)}</span>}
          {job.closingDate && <span className="flex items-center gap-1 text-gray-500 text-xs">Closing: {formatDate(job.closingDate)}</span>}
          {job.reviewingDate && <span className="flex items-center gap-1 text-gray-500 text-xs">Reviewing: {formatDate(job.reviewingDate)}</span>}
        </div>

        {/* --- Job Tags & Quick Filters (Dual Functionality) --- 
            These tags serve two purposes:
            1. Display Metadata: Show details like Category, Function, Level, etc.
            2. Quick Filtering: Clicking a tag immediately filters the job list by that value.
               - Active State: If the filter is active, the tag gets a RED border ("border-red-500").
               - Inactive State: Default pastel colors based on type.
        */}
        <div className="mt-4 flex justify-between items-center text-xs font-semibold">
          <div className="flex flex-wrap gap-2">
            {job.jobCategory?.name && (
              <button
                onClick={() => updateFilterSelection('category', job.jobCategory!.slug)}
                className={`px-3 py-1 rounded-md bg-gray-50 text-gray-600 border transition-colors cursor-pointer ${
                  filters.category.includes(job.jobCategory!.slug) 
                    ? "border-red-500 ring-1 ring-red-500" 
                    : "border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                }`}
              >
                {job.jobCategory.name}
              </button>
            )}
            {job.jobFunction?.name && (
              <button
                onClick={() => updateFilterSelection('jobFunction', job.jobFunction!.slug)}
                className={`px-3 py-1 rounded-md bg-orange-50 text-orange-700 border transition-colors cursor-pointer ${
                  filters.jobFunction.includes(job.jobFunction!.slug)
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-orange-100 hover:bg-orange-100 hover:border-orange-200"
                }`}
              >
                {job.jobFunction.name}
              </button>
            )}
            {job.type && (
              <button
                onClick={() => updateFilterSelection('jobType', job.type!)}
                className={`px-3 py-1 rounded-md bg-blue-50 text-blue-700 border transition-colors cursor-pointer ${
                  filters.jobType.includes(job.type!)
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-blue-100 hover:bg-blue-100 hover:border-blue-200"
                }`}
              >
                {job.type.replace(/_/g, ' ')}
              </button>
            )}
            {job.workspace && (
              <button
                onClick={() => updateFilterSelection('workSite', job.workspace!)}
                className={`px-3 py-1 rounded-md bg-green-50 text-green-700 border transition-colors cursor-pointer ${
                  filters.workSite.includes(job.workspace!)
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-green-100 hover:bg-green-100 hover:border-green-200"
                }`}
              >
                {job.workspace}
              </button>
            )}
            {job.level && (
              <button
                onClick={() => updateFilterSelection('jobLevel', job.level!)}
                className={`px-3 py-1 rounded-md bg-purple-50 text-purple-700 border transition-colors cursor-pointer ${
                  filters.jobLevel.includes(job.level!)
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-purple-100 hover:bg-purple-100 hover:border-purple-200"
                }`}
              >
                {job.level}
              </button>
            )}
          </div>
          <Link href={applyHref} className="inline-flex items-center gap-2 bg-primary-teal text-white px-4 py-2 rounded-lg hover:bg-primary-teal/90 transition-colors text-sm font-semibold">
            Apply Now
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur shadow-sm">
        <div className="container mx-auto px-4 py-4 space-y-3">
          <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
            <h1 className="text-lg font-semibold text-navy">Browse Jobs</h1>
            <div className="flex-1" />
            <button
              onClick={clearFilters}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-primary-teal/40 hover:text-primary-teal"
            >
              <Filter size={16} /> Clear all filters
            </button>
          </div>
          {renderFilterRows()}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-navy">{total} Jobs Found</h2>
          <p className="text-gray-600">Explore career opportunities with leading employers</p>
        </div>

        <div className="space-y-4">
          {jobs.map(renderJobCard)}
          {loading && <div className="text-center text-gray-500 text-sm">Loading...</div>}
          {!loading && jobs.length === 0 && (
            <div className="text-center text-gray-500 text-sm py-8">No jobs match your criteria.</div>
          )}
        </div>

        {!filterActive && totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              className="flex items-center gap-1 px-3 py-2 rounded border border-gray-200 text-sm disabled:opacity-50"
              disabled={page === 1 || loading}
              onClick={() => loadJobs(false, page - 1)}
            >
              <ArrowLeft size={14} /> Prev
            </button>
            <span className="text-sm text-gray-600">Page {page} of {totalPages}</span>
            <button
              className="flex items-center gap-1 px-3 py-2 rounded border border-gray-200 text-sm disabled:opacity-50"
              disabled={page >= totalPages || loading}
              onClick={() => loadJobs(false, page + 1)}
            >
              Next <ArrowRight size={14} />
            </button>
          </div>
        )}

        {filterActive && <div ref={sentinelRef} className="h-4" />}
      </div>
    </div>
  );
}

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 text-gray-500">Loading jobs...</div>}>
      <JobsPageContent />
    </Suspense>
  );
}
