"use client";

import { useState } from "react";
import Searchbar from "./components/searchbar";
import LeftCloud from "./components/left-cloud";
import RightCloud from "./components/right-cloud";
import { cloudData, CloudItem } from "./data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterItems = (items: CloudItem[], query: string): CloudItem[] => {
    if (!query) return items;
    return items.filter(
      (item) =>
        item.text.toLowerCase().includes(query.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  interface CloudComponentProps {
    title: string;
    items: CloudItem[];
  }

  type CloudComponentType = React.ComponentType<CloudComponentProps>;

  const renderCloud = (
    CloudComponent: CloudComponentType,
    title: string,
    items: CloudItem[]
  ) => {
    const filteredItems = filterItems(items, searchQuery);
    if (filteredItems.length === 0) return null;
    return (
      <CloudComponent
        key={title} // Assign a unique key based on the title
        title={title}
        items={filteredItems}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-2"></div>
      <Searchbar onSearch={handleSearch} />
      <div className="max-w-2xl mx-auto text-center border border-gray-300 p-6 rounded-lg my-4 bg-white/50 backdrop-blur-sm">
        <p className="text-gray-700">
          The hardware, network and parts of text tools are now ready for you to
          try. More islands are coming by end of February 2025.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          This project uses{" "}
          <a
            href="https://www.ibm.com/think/topics/chain-of-thoughts"
            className="text-blue-500 hover:text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chain of Thought
          </a>{" "}
          — which is computationally intensive for my laptop.
        </p>
      </div>
      <div className="flex flex-1">
        <div className="w-1/2 flex flex-col items-end p-4 space-y-4">
          {Object.entries(cloudData)
            .filter(([_, data]) => data.side === "left")
            .map(([title, data]) => renderCloud(LeftCloud, title, data.items))}
        </div>
        <div className="w-1/2 flex flex-col items-start p-4 space-y-4">
          {Object.entries(cloudData)
            .filter(([_, data]) => data.side === "right")
            .map(([title, data]) => renderCloud(RightCloud, title, data.items))}
        </div>
      </div>
    </div>
  );
}
