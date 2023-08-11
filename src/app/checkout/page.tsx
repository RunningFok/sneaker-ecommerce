"use client";
import { useAppSelector } from "@/redux/hooks";
import CheckoutProduct from "../components/CheckoutProduct";
import { loadStripe } from "@stripe/stripe-js";
import { signIn, useSession } from "next-auth/react";

const stripePromise = loadStripe(process.env.stripe_public_key as string);

export default function Checkout() {
  const { data: session } = useSession();
  const items = useAppSelector((state) => state.basket.items);
  const total = useAppSelector((state) =>
    state.basket.items.reduce((total, item) => total + item.retailPrice, 0)
  );

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;


    const response = await fetch("/api/checkout", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          items: items,
          email: session?.user?.email,
        } || {}
      ),
    });

    const body = await response.json();


    const result = await stripe!.redirectToCheckout({
      sessionId: body.id,
    });

    if (body.error) alert(body.error.message);
  };

  return (
    <div className="bg-[#FEFEFE] text-green-950">
      <div className="mx-auto items-center justify-items-center place-self-center">
        {items.length === 0 ? (
          <div className="flex w-screen py-64 items-center justify-center">
            <div className="text-xl sm:text-3xl font-bold font-serif p-5">
              Your basket is empty
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col w-full px-5 pb-10 sm:pb-44 space-y-1">
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
                  // description={item.description}
                  releaseDate={item.releaseDate}
                  colorway={item.colorway}
                />
              ))}
            </div>
            <div className="sm:w-8/12 bg-[#F4F3F1] ">
              <div className="flex flex-col justify-center items-center py-10 sm:pt-20 ">
                <h5 className="place-self-center text-emerald-600 text-lg font-semibold">
                  Subtotal ({items.length} items) ${total}
                </h5>
                {!session ? (
                  <button
                    className="mt-5 p-2 place-content-center text-sm sm:text-base bg-gradient-to-b from-emerald-500 to-emerald-300 border border-emerald-400 rounded-lg focus:outline-none focus:ring-emerald-700 active:from-emerald-600 font-bold"
                    onClick={() => signIn()}
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    className="mt-5 p-2 place-content-center text-sm sm:text-base bg-gradient-to-b from-emerald-500 to-emerald-300 border border-emerald-400 rounded-lg focus:outline-none focus:ring-emerald-700 active:from-emerald-600 font-bold"
                    onClick={() => createCheckoutSession()}
                  >
                    Proceed to Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
