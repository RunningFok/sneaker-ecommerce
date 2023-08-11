"use client";

import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { addToBasket } from "@/redux/features/basketSlice";

interface ProductDetailsProps {
  styleID: number | string;
  shoeName: string;
  thumbnail: string;
  retailPrice: number;
  brand: string;
  description: string;
  releaseDate: string;
  colorway: string;
}

export default function ProductDetails({
  styleID,
  shoeName,
  thumbnail,
  retailPrice,
  brand,
  description,
  releaseDate,
  colorway,
}: ProductDetailsProps) {
  const dispatch = useAppDispatch();

  const addItemToBasket = () => {
    const product = {
      styleID,
      shoeName,
      thumbnail,
      retailPrice,
      brand,
      // description,
      releaseDate,
      colorway,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center justify-self-center content-center pt-5">
        <div className="flex sm:hidden">
          <h1 className="flex text-xl sm:text-3xl font-bold items-start">
            {shoeName}
          </h1>
        </div>
        <div className="flex">
          <Image
            src={thumbnail}
            alt={shoeName}
            width={500}
            height={500}
            className="pt-5"
          />
        </div>
        <div className="flex flex-col place-items-start content-start items-start self-start sm:pl-10 w-96 2xl:w-auto">
          <h2 className="text-center font-semibold text-sm sm:text-sm mt-5 sm:mt-10">
            Release Date: {releaseDate}
          </h2>
          <h1 className="hidden sm:flex text-3xl font-bold mt-10 items-start">
            {shoeName}
          </h1>
          <h2 className="text-center font-semibold text-sm sm:text-base mt-5">
            {colorway}
          </h2>
          <h2 className="text-center font-semibold text-2xl mt-5">
            ${retailPrice}
          </h2>
          <button
            className="mt-5 sm:mt-10 p-2 text-base sm:text-lg bg-gradient-to-b from-emerald-500 to-emerald-300 border border-emerald-400 rounded-sm focus:outline-none focus:ring-emerald-700 active:from-emerald-600 font-bold"
            onClick={() => addItemToBasket()}
          >
            Add to basket
          </button>
        </div>
      </div>
      <div className="sm:max-w-fit 2xl:max-w-screen-2xl mx-auto place-self-center sm:px-40 pt-10 sm:py-5 2xl:px-0 2xl:py-10">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
