(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projobs/src/components/home/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/projobs/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/projobs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroSection({ categories }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animated placeholder state for cycling search hints
    const [animatedPlaceholder, setAnimatedPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Search by job title, function, category, or organization...|");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const checkMobile = {
                "HeroSection.useEffect.checkMobile": ()=>setIsMobile(window.matchMedia("(pointer: coarse)").matches)
            }["HeroSection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    // Animated Placeholder for Search Box - Typewriter effect cycles through helpful search examples
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const placeholders = [
                "Search by job title, function, category, or organization",
                "Try 'Web Developer' or 'Remote'",
                "Enter by city, state, or ZIP code",
                "Or just ZIP code like '90210'"
            ];
            let currentTextIndex = 0;
            let currentCharIndex = 0;
            let isDeleting = false;
            let pauseEnd = Date.now() + 2000; // Initial pause at the end of text
            let step = 0;
            const typingSteps = 2; // 100ms (50ms * 2)
            const erasingSteps = 1; // 25ms (50ms * 1)
            const interval = setInterval({
                "HeroSection.useEffect.interval": ()=>{
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
                }
            }["HeroSection.useEffect.interval"], 50); // Base interval
            return ({
                "HeroSection.useEffect": ()=>clearInterval(interval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const controller = new AbortController();
            const encQuery = encodeURIComponent(query);
            const qLower = query.toLowerCase();
            if (query.trim().length > 0) {
                // --- Dual-Fetch Strategy ---
                // 1. Fetch Keywords: Jobs, Functions, Categories, Organizations
                // 2. Fetch Locations: Cities, States, Zip Codes
                Promise.all([
                    fetch(`/api/search?q=${encQuery}`, {
                        signal: controller.signal
                    }),
                    fetch(`/api/search?taxonomy=locations&q=${encQuery}`, {
                        signal: controller.signal
                    })
                ]).then({
                    "HeroSection.useEffect": async ([kRes, lRes])=>{
                        const kData = kRes.ok ? await kRes.json() : [];
                        const lData = lRes.ok ? await lRes.json() : [];
                        // Determine input type (Numeric/Zip vs Alpha)
                        const isNumericInput = /^\d/.test(qLower);
                        // --- Process Locations ---
                        const locationItems = (Array.isArray(lData) ? lData : []).filter({
                            "HeroSection.useEffect.locationItems": (item)=>typeof item === 'string' && item.length > 0
                        }["HeroSection.useEffect.locationItems"]).map({
                            "HeroSection.useEffect.locationItems": (item)=>{
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
                                        return {
                                            value: item,
                                            type: 'location',
                                            score: 100,
                                            sortValue: zip
                                        }; // High score for numeric
                                    }
                                }
                                // Case B: Alpha Input (City/State Search)
                                // Priority 1: City Match (Starts with query)
                                if (lowerItem.startsWith(qLower)) {
                                    score = 3;
                                    typeRating = 5; // City priority implementation
                                } else {
                                    // Priority 2: State Match (e.g. "Austin, TX" matches "TX")
                                    const parts = lowerItem.split(',').map({
                                        "HeroSection.useEffect.locationItems.parts": (s)=>s.trim()
                                    }["HeroSection.useEffect.locationItems.parts"]);
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
                                return {
                                    value: item,
                                    type: 'location',
                                    score,
                                    typeRating,
                                    sortValue: 0
                                };
                            }
                        }["HeroSection.useEffect.locationItems"]).filter({
                            "HeroSection.useEffect.locationItems": (i)=>i.score > 0
                        }["HeroSection.useEffect.locationItems"]);
                        // --- Process Keywords ---
                        // API returns objects: { text: string, type: string }
                        const keywordItems = (Array.isArray(kData) ? kData : []).filter({
                            "HeroSection.useEffect.keywordItems": (item)=>{
                                const text = typeof item === 'string' ? item : item.text;
                                return text.toLowerCase().startsWith(qLower);
                            }
                        }["HeroSection.useEffect.keywordItems"]).map({
                            "HeroSection.useEffect.keywordItems": (item)=>{
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
                                    score: isNumericInput ? 0.5 : 5,
                                    typeRating
                                };
                            }
                        }["HeroSection.useEffect.keywordItems"]);
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
                        const merged = [
                            ...locationItems,
                            ...keywordItems
                        ].sort({
                            "HeroSection.useEffect.merged": (a, b)=>{
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
                            }
                        }["HeroSection.useEffect.merged"]).slice(0, 8);
                        setSuggestions(merged);
                    }
                }["HeroSection.useEffect"]).catch({
                    "HeroSection.useEffect": (err)=>{
                        if (err.name !== 'AbortError') console.error(err);
                    }
                }["HeroSection.useEffect"]);
            } else {
                setSuggestions([]);
                setActiveIndex(-1);
            }
            return ({
                "HeroSection.useEffect": ()=>controller.abort()
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        query
    ]);
    const inlineSuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSection.useMemo[inlineSuggestion]": ()=>{
            if (isMobile || !query || suggestions.length === 0) return "";
            let match;
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
        }
    }["HeroSection.useMemo[inlineSuggestion]"], [
        query,
        suggestions,
        isMobile,
        activeIndex
    ]);
    // --- SEARCH SELECTION LOGIC ---
    const handleSelect = (item)=>{
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
            const hasLocationCandidateForZip = isZipOnly ? suggestions.some((s)=>s.type === 'location' && s.value.includes(value)) : false;
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
    const handleKeyDown = (e)=>{
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
            setActiveIndex((prev)=>Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev)=>Math.max(prev - 1, -1));
        } else if (e.key === "Tab") {
            if (suggestions.length === 0) return;
            e.preventDefault();
            // Select the active item if one is highlighted, otherwise default to the top suggestion (Best Match)
            const target = activeIndex >= 0 ? suggestions[activeIndex] : suggestions[0];
            handleSelect(target);
        } else if (e.key === "Escape") {
            setIsFocused(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gradient-to-r from-[#172554] to-[#1e7a8a] pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8 text-center relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `max-w-3xl mx-auto bg-white rounded-lg p-1 shadow-xl mb-12 relative z-50 border ${isFocused ? "border-red-500" : "border-gray-200 pulse-border"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            action: "/jobs",
                            className: "flex flex-col md:flex-row gap-2 relative",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                handleSelect(query);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent-blue transition-colors z-20",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this),
                                        !isMobile && isFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 pl-12 pr-4 py-1.5 flex items-center pointer-events-none z-10",
                                            children: [
                                                inlineSuggestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-transparent whitespace-pre",
                                                            children: query
                                                        }, void 0, false, {
                                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 opacity-60 whitespace-pre",
                                                            children: inlineSuggestion
                                                        }, void 0, false, {
                                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2.5 text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 shadow-sm font-mono tracking-wider opacity-70",
                                                            children: "TAB"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                !inlineSuggestion && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded border border-gray-200 shadow-sm font-mono tracking-wider opacity-70",
                                                        children: "TAB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 28
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                            lineNumber: 399,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "q",
                                            value: query,
                                            onChange: (e)=>{
                                                setQuery(e.target.value);
                                                setActiveIndex(-1);
                                            },
                                            onKeyDown: handleKeyDown,
                                            onFocus: ()=>setIsFocused(true),
                                            onBlur: ()=>setTimeout(()=>setIsFocused(false), 200),
                                            autoComplete: "off",
                                            placeholder: animatedPlaceholder,
                                            // --- Search Box Focus Styling ---
                                            // The border changes to RED (border-red-500) when the user focuses the input.
                                            // This provides a clear visual cue of the active interaction state.
                                            className: "w-full pl-12 pr-4 py-1.5 rounded-md outline-none text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-red-500/20 transition-all border border-transparent hover:border-accent-blue/50 focus:border-red-500 bg-transparent relative z-20"
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        !isMobile && isFocused && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-xl border border-gray-100 overflow-hidden text-left z-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: suggestions.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `w-full px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm flex items-center gap-2 ${idx === activeIndex ? "bg-gray-100 ring-1 ring-inset ring-gray-200" : ""}`,
                                                            onClick: ()=>handleSelect(item),
                                                            onMouseEnter: ()=>setActiveIndex(idx),
                                                            children: [
                                                                item.type === 'location' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    size: 14,
                                                                    className: "text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 56
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                    size: 14,
                                                                    className: "text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 105
                                                                }, this),
                                                                item.value
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                                lineNumber: 438,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                            lineNumber: 437,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "bg-navy hover:bg-navy-light hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-white font-medium px-8 py-1.5 rounded-md transition-all whitespace-nowrap",
                                    children: "Search Jobs"
                                }, void 0, false, {
                                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, this),
                        isMobile && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 p-2 overflow-x-auto border-t border-gray-100 mt-1",
                            children: suggestions.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleSelect(item),
                                    className: "px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 whitespace-nowrap active:bg-blue-50 active:border-blue-200 transition-colors flex items-center gap-2",
                                    children: [
                                        item.type === 'location' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 14,
                                            className: "text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                            lineNumber: 476,
                                            columnNumber: 49
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 14,
                                            className: "text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                            lineNumber: 476,
                                            columnNumber: 98
                                        }, this),
                                        item.value
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                    lineNumber: 470,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                            lineNumber: 468,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                    lineNumber: 385,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm",
                        children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/jobs?category=${cat.slug}`,
                                className: "text-gray-200 hover:text-white transition-colors hover:underline",
                                children: [
                                    cat.name,
                                    " (",
                                    cat.count,
                                    ")"
                                ]
                            }, idx, true, {
                                fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                                lineNumber: 490,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                        lineNumber: 488,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
                    lineNumber: 486,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
            lineNumber: 382,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/projobs/src/components/home/HeroSection.tsx",
        lineNumber: 379,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "hFxwT3HRGpwOaQp9PD3CkOGSgVQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projobs/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projobs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/projobs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/projobs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projobs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/projobs/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/projobs/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/projobs/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/projobs/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/projobs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon,
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
;
;
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
            ref,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: [
                "lucide",
                `lucide-${toKebabCase(iconName)}`,
                className
            ].join(" "),
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
            ...Array.isArray(children) ? children : [
                children
            ]
        ]);
    });
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/projobs/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
            key: "2oe9fu"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/projobs/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/projobs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/projobs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projobs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projobs/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=projobs_7a12e5bf._.js.map