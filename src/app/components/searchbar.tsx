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

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
