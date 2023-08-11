"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const items = useAppSelector((state) => state.basket.items);

  return (
    <nav className="sticky top-0 z-20 flex items-center flex-grow sm:py-5 px-5 bg-gradient-to-b from-emerald-800 to-emerald-700">
      <div className="mt-1 sm:mx-2 sm:ml-4 flex items-center flex-grow sm:flex-grow-0">
        <Link
          className="sm:items-center font-bold sm:text-3xl text-stone-50 font-serif tracking-wider"
          href={"/"}
        >
          GoodKick
        </Link>
      </div>
      <SearchBox />
      <div className="hidden sm:flex sm:text-lg sm:mx-2">Browse</div>
      <div className="hidden sm:flex sm:text-lg sm:mx-2">Sell</div>
      <div className="sm:text-lg sm:mx-2">News</div>
      <Link href={"/orders"} className="text-lg mx-2">
        Orders
      </Link>

      <div
        onClick={() => router.push("/checkout")}
        className="relative text-lg mx-2 cursor-pointer"
      >
        <span className="absolute top-0 left-6 md:right-10 h-5 w-5 bg-yellow-400 text-center rounded-full text-black font-bold text-sm">
          {items.length}
        </span>
        <ShoppingCartIcon className="h-12 p-2 -mx-1 cursor-pointer" />
      </div>

      <div
        onClick={() => (!session ? signIn() : signOut())}
        className="cursor-pointer text-lg mx-2"
      >
        <p>
          {session ? `Hello ${session?.user?.name?.split(" ")[0]}` : "Sign In"}
        </p>
      </div>
    </nav>
  );
}
