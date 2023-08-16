import Image from "next/image";
import { removeFromBasket } from "@/redux/features/basketSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

interface CheckoutProductProps {
  styleID: number | string;
  shoeName: string;
  thumbnail: string;
  retailPrice: number;
  brand: string;
  description: string;
  releaseDate: string;
  colorway: string;
  isSize: string;
}

export default function CheckoutProduct({
  styleID,
  shoeName,
  thumbnail,
  retailPrice,
  brand,
  description,
  releaseDate,
  colorway,
  isSize,
}: CheckoutProductProps) {
  const dispatch = useAppDispatch();

  const removeItemFromBasket = () => {
    const id = styleID;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="pt-5 px-5 flex flex-row">
      <div className="px-5 mx-auto items-center self-center">
        <Image src={thumbnail} alt={shoeName} width={400} height={400} />
      </div>
      <div className="w-2/5 pt-6">
        <h1 className="text-sm sm:text-xl font-bold justify-items-start">
          {shoeName}
        </h1>
        <h5 className="pt-1 sm:pt-3 text-xs sm:text-sm">{colorway}</h5>
        <h5 className="pt-1 sm:pt-3 text-xs sm:text-sm">Size: {isSize}</h5>
        <h5 className="pt-3 sm:pt-3 text-xl font-semibold">${retailPrice}</h5>
        <button
          className="mt-5 p-2 text-sm sm:text-base bg-gradient-to-b from-rose-500 to-rose-400 border border-rose-400 rounded-lg focus:outline-none focus:ring-rose-700 active:from-rose-600 font-bold"
          onClick={() => removeItemFromBasket()}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
