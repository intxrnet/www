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
    return <CloudComponent title={title} items={filteredItems} />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-2"></div>
      <Searchbar onSearch={handleSearch} />
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
