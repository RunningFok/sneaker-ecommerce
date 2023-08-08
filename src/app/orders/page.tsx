"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSession, getSession } from "next-auth/react";
import OrderList from "../components/OrderList";
import Loading from "../components/Loading";

export default function Orders() {
  const { data: session } = useSession();
  const [orderList, setOrderList] = useState<Array<IOrder>>([]);
  const [isLoading, setLoading] = useState(false);

  async function getData() {
    const response = await fetch("/api/orders", {
      cache: "no-store",
    });
    return response.json();
  }
  const fetchOrderList = async () => {
    const response = await getData();
    setOrderList(response);
    setLoading(false);
  };
  
  useEffect(() => {
    setLoading(true);
    fetchOrderList();
  }, [session]);


  const loader = (
    <div className="sm:max-w-fit 2xl:max-w-screen-2xl 2xl:px-16 mx-auto place-self-center p-10">
      <div className="mx-auto items-center justify-items-center place-self-center">
        <div className="text-green-950">
          <div className="p-5">
            <h5 className="text-lg">Loading ordered list</h5>
          </div>
          <div className="flex items-center justify-center justify-items-center place-content-center">
            <Loading />
          </div>
        </div>
      </div>
    </div>
  );

  const sneakerListComponents = (
    <div className="sm::max-w-screen-2xl 2xl:px-16 mx-auto place-self-center p-10">
      <div className="mx-auto items-center justify-items-center place-self-center">
        {orderList.length === 0 ? (
          <div className="flex py-64 items-center justify-center">
            <div className="text-3xl font-bold font-serif p-5">
              Your list is empty
            </div>
          </div>
        ) : (
          <div className="flex flex-col pb-44 space-y-1">
            <h1 className="flex items-center justify-center text-3xl font-bold font-serif border-b p-8 mb-10">
              Order List
            </h1>
            {orderList?.map(({ id, amount, timestamp, images }) => (
              <div className="py-2">
                <OrderList
                  key={id}
                  id={id}
                  timestamp={timestamp}
                  images={images}
                  amount={amount}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#FEFEFE] text-green-950">
      {session ? (
        isLoading === true ? (
          loader
        ) : (
          sneakerListComponents
        )
      ) : (
        <div className="flex w-screen py-64 items-center justify-center">
          <div className="text-3xl font-bold font-serif p-5">
            Please sign in to see your order
          </div>
        </div>
      )}
    </div>
  );
}
