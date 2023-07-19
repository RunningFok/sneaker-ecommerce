import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex items-center flex-grow py-5 px-5 bg-gradient-to-b from-emerald-800 to-emerald-700">
      <div className="mt-1 mx-2 ml-4 flex items-center flex-grow sm:flex-grow-0">
        <Link
          className="items-center font-bold text-3xl text-stone-50 font-serif tracking-wider"
          href={"/"}
        >
          GoodKick
        </Link>
      </div>
      {/* <div className="hidden sm:flex flex-grow cursor-pointer items-center mx-2 h-9 rounded-md bg-yellow-400 hover:bg-yellow-500">
        <input
          className="p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none text-green-950"
          type="text"
        />
        <MagnifyingGlassIcon className="h-12 p-4" />
      </div> */}
      <SearchBox />
      <div className="text-lg mx-2">Browse</div>
      <div className="text-lg mx-2">News</div>
      <div className="text-lg mx-2">About</div>
      <div className="text-lg mx-2">Sell</div>
      <BellIcon className="h-12 p-3 -mx-1" />
      <div className="border border-spacing-8 border-gray-800 bg-stone-50 text-green-950 font-bold text-lg rounded-md py-0.5 px-3 ml-2 mr-1">
        Login
      </div>
      <div className="border border-spacing-8 border-gray-800 bg-emerald-950 text-stone-50 font-bold text-lg rounded-md py-0.5 px-3 ml-1 mr-2">
        Sign Up
      </div>
    </nav>
  );
}
