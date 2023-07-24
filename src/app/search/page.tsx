"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ProductBox from "../components/ProductBox";
import Loading from "../components/Loading";

export default function SearchPage() {
  const [sneakerList, setSneakerList] = useState<ISneaker[]>([]);
  const [isLoading, setLoading] = useState(false);

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  async function getData() {
    const response = await fetch(`/api/search?q=${searchQuery}`, {
      next: { revalidate: 10 },
    });

    return response.json();
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await getData();
      setSneakerList(response);
      setLoading(false);
    };
    fetchData();
  }, [searchQuery]);

  console.log("sneakerList = await getData()");
  console.log(sneakerList);

  const loader = (
    <div className="text-green-950">
      <div className="p-5">
        <h5 className="text-lg">Browsing results for "{searchQuery}"</h5>
      </div>
      <div className="flex items-center justify-center justify-items-center place-content-center">
        <Loading />
      </div>
    </div>
  );

  const searchedSneaker = (
    <div className="text-green-950">
      <div className="p-5">
        <h5 className="text-lg">
          Browse <span className="font-bold">{sneakerList.length}</span> results
          for "{searchQuery}"
        </h5>
      </div>

      <div className="grid sm:grid-cols-4 2xl:grid-cols-6 p-5 pt-1 gap-5">
        {sneakerList.map((sneaker) => (
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

  return (
    <div className="bg-[#FEFEFE]">
      <div className="sm:max-w-fit 2xl:max-w-screen-2xl 2xl:px-16 mx-auto items-center justify-items-center place-self-center">
        <div className="flex flex-row">
          <nav className="flex flex-col sticky top-0 text-green-950 text-lg font-bold p-5 mr-10 gap-3 place-content-start">
            <div>Sneakers</div>
            <div>Shoes</div>
            <div>Apparael</div>
            <div>Handbags</div>
            <div>Watches</div>
            <div>Accessories</div>
          </nav>
          <div className="">
            {isLoading === true ? loader : searchedSneaker}
          </div>
        </div>
      </div>
    </div>
  );
}


