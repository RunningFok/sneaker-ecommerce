"use client";
import { useRouter } from "next/navigation";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

export default function Success() {
  const router = useRouter();
  return (
    <div className="bg-[#FEFEFE] text-green-950">
      <div className="mx-auto items-center justify-items-center place-self-center pb-24">
        <div className="flex flex-col">
          <div className="flex flex-col p-5 pt-20 place-content-center items-center ">
            <CheckCircleIcon className="text-green h-24 sm:h-56" />
            <h1 className="text-xl sm:text-3xl font-bold">ORDER CONFIRMED</h1>
          </div>
          <div className="flex flex-col p-5 pb-16 text-xs sm:text-sm place-content-center text-center items-center">
            <p>Thank you for shopping with us.</p>
            <p >
              If you would like to check the status of order(s) please press the
              link below.
            </p>
            <button
              onClick={() => router.push("/orders")}
              className="mt-10 p-2 place-content-center text-sm sm:text-base bg-gradient-to-b from-emerald-500 to-emerald-300 border border-emerald-400 rounded-lg focus:outline-none focus:ring-emerald-700 active:from-emerald-600 font-bold"
            >
              Go to my orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
