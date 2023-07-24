"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/hooks";
import CheckoutProduct from "../components/CheckoutProduct";

export default function Checkout() {
  const { data: session } = useSession();
  const items = useAppSelector((state) => state.basket.items);
  const total = useAppSelector((state) =>
    state.basket.items.reduce((total, item) => total + item.retailPrice, 0)
  );
  console.log(total);
  return (
    <div className="bg-[#FEFEFE] text-green-950">
      <div className="mx-auto items-center justify-items-center place-self-center">
        {items.length === 0 ? (
          <div className="flex w-screen py-64 items-center justify-center">
            <div className="text-3xl font-bold font-serif p-5">
              Your basket is empty
            </div>
          </div>
        ) : (
          <div className="flex flex-row">
            <div className="flex flex-col px-5 pb-44 space-y-1">
              <h1 className="flex items-center justify-center text-3xl font-bold font-serif border-b p-8">
                Shopping Basket
              </h1>
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  styleID={item.styleID}
                  shoeName={item.shoeName}
                  thumbnail={item.thumbnail}
                  retailPrice={item.retailPrice}
                  brand={item.brand}
                  description={item.description}
                  releaseDate={item.releaseDate}
                  colorway={item.colorway}
                />
              ))}
            </div>
            <div className="w-9/12 bg-[#F4F3F1] ">
              <div className="flex flex-col justify-center items-center">
                <h5 className="pt-20 place-self-center text-emerald-600 text-lg font-semibold">
                  Subtotal ({items.length} items) ${total}
                </h5>
                <button className="mt-5 p-2 place-content-center text-sm sm:text-base bg-gradient-to-b from-emerald-500 to-emerald-300 border border-emerald-400 rounded-lg focus:outline-none focus:ring-emerald-700 active:from-emerald-600 font-bold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
