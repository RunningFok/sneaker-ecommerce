import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import PopularSneakers from "../helper/PopularSneakers";
import ProductBox from "./ProductBox";

export default async function RecommendedBar() {
  const popularSneakers = await PopularSneakers();
  return (
    <div className="px-5 pt-5">
      <div className="flex text-green-950">
        <h1 className="sm:text-xl font-semibold">Recommended For You</h1>
        <QuestionMarkCircleIcon className="h-10 sm:h-12 p-3 -ml-2 -mt-2 sm:-mt-3" />
      </div>
      <div className="flex flex-row gap-2 sm:gap-5 pb-4 place-content-start overflow-x-auto">
        {popularSneakers?.map((sneaker) => (
          <ProductBox
            styleID={sneaker.styleID}
            shoeName={sneaker.shoeName}
            thumbnail={sneaker.thumbnail}
            retailPrice={sneaker.retailPrice}
          />
        ))}
      </div>
    </div>
  );
}
