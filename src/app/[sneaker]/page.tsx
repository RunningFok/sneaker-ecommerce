import Link from "next/link";
import Image from "next/image";
import FetchSneakerID from "@/app/helper/FetchSneakerID";

interface SneakerPageProps {
  params: { sneaker: string };
}
export default async function SneakerPage({ params }: SneakerPageProps) {
  console.log(params);
  const { sneaker } = params;
  const sneakerData = await FetchSneakerID({ styleID: sneaker });
  console.log(sneakerData);
  return (
    <div className="bg-[#FEFEFE] text-green-950">
      <div className="sm:max-w-fit 2xl:max-w-screen-2xl 2xl:px-16 mx-auto place-self-center p-10 2xl:py-36">
        <div className="flex flex-row justify-center items-center justify-self-center content-center pt-5">
          <div className="flex">
            <Image
              src={sneakerData.thumbnail}
              alt={sneakerData.shoeName}
              width={500}
              height={500}
              className="pt-5"
            />
          </div>
          <div className="flex flex-col place-items-start content-start items-start self-start pl-10 w-96 2xl:w-auto">
            <h2 className="text-center font-semibold text-sm mt-10">
              Release Date: {sneakerData.releaseDate}
            </h2>
            <h1 className="flex text-3xl font-bold mt-10 items-start">
              {sneakerData.shoeName}
            </h1>
            <h2 className="text-center font-semibold text-base mt-5">
              {sneakerData.colorway}
            </h2>
            <h2 className="text-center font-semibold text-2xl mt-5">
              ${sneakerData.retailPrice}
            </h2>
            <button className="mt-10 p-2 text-base sm:text-lg bg-gradient-to-b from-emerald-500 to-emerald-300 border border-emerald-400 rounded-sm focus:outline-none focus:ring-emerald-700 active:from-emerald-600 font-bold">
              Add to basket
            </button>
          </div>
        </div>
        <div className="sm:max-w-fit 2xl:max-w-screen-2xl mx-auto place-self-center sm:px-40 sm:py-5 2xl:px-0 2xl:py-10">
          <p className="text-sm">{sneakerData.description}</p>
        </div>
      </div>
    </div>
  );
}
