"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBox() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
    console.log("current query:", searchQuery);
  };
  return (
    <form
      className="hidden sm:flex flex-grow cursor-pointer items-center mx-2 h-9 rounded-md bg-yellow-400 hover:bg-yellow-500"
      onSubmit={onSearch}
    >
      <input
        className="p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none text-green-950"
        type="text"
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
        placeholder="Search for brand, color, etc."
      />
      <button onClick={() => onSearch}>
        <MagnifyingGlassIcon className="h-12 p-4" />
      </button>
    </form>
  );
}
