import Link from "next/link";
import Image from "next/image";
import FetchSneakerID from "@/app/helper/FetchSneakerID";
import { addToBasket } from "@/redux/features/basketSlice";
import ProductDetails from "../components/ProductDetails";

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
      <div className="max-w-fit 2xl:max-w-screen-2xl 2xl:px-16 mx-auto place-self-center p-10 2xl:py-36">
        <ProductDetails
          key={sneakerData.styleID}
          styleID={sneakerData.styleID}
          shoeName={sneakerData.shoeName}
          thumbnail={sneakerData.thumbnail}
          retailPrice={sneakerData.retailPrice}
          brand={sneakerData.brand}
          description={sneakerData.description}
          releaseDate={sneakerData.releaseDate}
          colorway={sneakerData.colorway}
        />
      </div>
    </div>
  );
}
