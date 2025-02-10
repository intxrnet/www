"use client";

import { useState, useMemo, useEffect } from "react";
import { debounce } from "lodash";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize the debounce function
  const debouncedSearch = useMemo(() => {
    const debouncedFn = debounce((query: string) => {
      onSearch(query);
    }, 300);
    return debouncedFn;
  }, [onSearch]);

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch(""); // Ensure clearing resets results
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div className="relative mx-auto mb-8 w-11/12 md:w-1/2">
      <span className="absolute -top-3 left-2 bg-white px-2 text-sm">
        search
      </span>
      {searchQuery && (
        <span
          className="absolute -bottom-2 right-2 bg-white px-2 text-sm hover:underline cursor-pointer"
          onClick={handleClear}
        >
          clear
        </span>
      )}
      <input
        type="text"
        placeholder=""
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleFocus}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
