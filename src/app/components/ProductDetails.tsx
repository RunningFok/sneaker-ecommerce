"use client";

import Image from "next/image";
import SizeDropdown from "./SizeDropdown";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { addToBasket } from "@/redux/features/basketSlice";
import SizeTable from "./SizeTable";
import { useState } from "react";

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
      description,
      releaseDate,
      colorway,
      isSize,
    };
    console.log("product", product);
    dispatch(addToBasket(product));
  };

  const [isActive, setIsActive] = useState<number | null>(null);
  const [isSize, setIsSize] = useState("");

  const notClickedButton =
    "border px-5 py-3 hover:font-semibold cursor-pointer";
  const clickedButton =
    "border border-1.5 border-emerald-500 px-5 py-3 font-bold cursor-pointer";
  const toggleSize = (chosenSize: string, index: number) => {
    if (chosenSize === isSize) {
      setIsSize("");
      setIsActive(null);
    } else if (chosenSize !== isSize) {
      setIsSize(chosenSize);
      setIsActive(index);
    }
  };

  const sizeList = [
    "US 4",
    "US 5",
    "US 6",
    "US 7",
    "US 8",
    "US 9",
    "US 10",
    "US 11",
    "US 12",
    "US 13",
  ];

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
          <h1 className="hidden sm:flex text-3xl font-bold mt-10 items-start">
            {shoeName}
          </h1>
          <h2 className="text-center font-semibold text-sm sm:text-base mt-5">
            {colorway}
          </h2>
          <h2 className="text-center font-semibold text-2xl mt-5">
            ${retailPrice}
          </h2>
          <div className="text-center text-green-950 text-xs sm:text-sm mt-5">
            <div className="grid grid-cols-4">
              {sizeList.map((size, index) => (
                <button
                  className={
                    isActive === index ? clickedButton : notClickedButton
                  }
                  onClick={() => toggleSize(size, index)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            className="mt-5 sm:mt-5 p-2 text-base sm:text-lg bg-gradient-to-b from-emerald-500 to-emerald-300 border border-emerald-400 rounded-sm focus:outline-none focus:ring-emerald-700 active:from-emerald-600 font-bold"
            onClick={() => addItemToBasket()}
          >
            Add to basket
          </button>
        </div>
      </div>
      <div className="sm:max-w-fit 2xl:max-w-screen-2xl mx-auto place-self-center sm:px-40 pt-10 sm:py-8 2xl:px-0 2xl:py-10">
        <p className="text-xs sm:text-sm">{description}</p>
      </div>
      <h2 className="sm:text-center font-semibold text-xs sm:text-sm mt-5 sm:mt-10">
        Release Date: {releaseDate}
      </h2>
    </div>
  );
}
