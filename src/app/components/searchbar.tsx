"use client";

import { useState, useCallback } from "react";
import { debounce } from "lodash";

interface SearchbarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div className="relative w-1/2 mx-auto mb-8">
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
