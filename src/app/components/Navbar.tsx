"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { BellIcon } from "@heroicons/react/24/outline";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const items = useAppSelector((state) => state.basket.items);

  const [mobileSearch, setMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
    console.log("current query:", searchQuery);
  };

  const mobileSearchBar = (
    <nav className="sticky top-0 z-20 flex items-center flex-grow py-1 sm:py-5 bg-gradient-to-b from-emerald-800 to-emerald-700">
      <form
        className="flex flex-grow cursor-pointer items-center mx-2 h-10 rounded-md bg-yellow-400 hover:bg-yellow-500"
        onSubmit={onSearch}
      >
        <button onClick={() => onSearch} className="-mx-2">
          <MagnifyingGlassIcon className="h-12 p-4" />
        </button>
        <input
          className="p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md text-sm focus:outline-none text-green-950"
          type="text"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
          placeholder="Search for brand, color, etc."
        />
        <button onClick={() => setMobileSearch(false)} className="-mx-2">
          <XMarkIcon className="h-12 p-4" />
        </button>
      </form>
    </nav>
  );

  const standardNavBar = (
    <nav className="sticky top-0 z-20 flex items-center flex-grow py-1 sm:py-5 px-5 bg-gradient-to-b from-emerald-800 to-emerald-700">
      <div className="mt-1 sm:mx-2 sm:ml-4 flex items-center flex-grow sm:flex-grow-0">
        <Link
          className="sm:items-center font-bold text-2xl sm:text-3xl text-stone-50 font-serif tracking-wider"
          href={"/"}
        >
          GoodKick
        </Link>
      </div>
      <SearchBox />
      <div className="hidden sm:flex sm:text-lg text-stone-50 sm:mx-2">
        Browse
      </div>
      <div className="hidden sm:flex sm:text-lg text-stone-50 sm:mx-2">
        Sell
      </div>
      <div className="hidden sm:flex sm:text-lg text-stone-50 sm:mx-2">
        News
      </div>
      <Link
        href={"/orders"}
        className="hidden sm:flex text-base pt-1 sm:pt-0 text-stone-50 sm:text-lg mx-2"
      >
        Orders
      </Link>

      <div className="flex sm:hidden" onClick={() => setMobileSearch(true)}>
        <MagnifyingGlassCircleIcon className="h-11 sm:h-12 p-2 -mx-2 cursor-pointer" />
      </div>

      <div
        onClick={() => router.push("/checkout")}
        className="relative text-lg mx-2 cursor-pointer"
      >
        <span className="absolute top-0.5 left-5 sm:left-6 right-5 sm:right-10 h-4 sm:h-5 w-4 sm:w-5 bg-yellow-400 text-center rounded-full text-green-950 font-bold text-xs sm:text-sm">
          {items.length}
        </span>
        <ShoppingCartIcon className="h-11 sm:h-12 p-2 -mx-2 cursor-pointer" />
      </div>

      <div
        onClick={() => (!session ? signIn() : signOut())}
        className="cursor-pointer text-lg mx-2"
      >
        <div>
          {session ? (
            <div className="bg-yellow-400 text-green-950 text-center rounded-full sm:mx-2 sm:pb-1 h-6 sm:h-7 w-6 sm:w-7 text-base sm:text-lg font-semibold">
              {session?.user?.name?.split(" ")[0][0]}
            </div>
          ) : (
            <div className="text-stone-50 text:sm sm:text-lg">
              <UserCircleIcon className="h-11 sm:h-12 p-2 -mx-3 sm:mx-0" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );

  return mobileSearch ? mobileSearchBar : standardNavBar;
}
