import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest, response: NextResponse) {
  console.log("POST");
  const { items, email } = await request.json();

  try {
    const paymentIntent = items.map((item: any) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: item.retailPrice * 100,
        product_data: {
          name: item.shoeName,
          images: [item.thumbnail],
        },
      },
    }));
    console.log("paymentIntent created");

    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      // shipping_rates: ["shr_1NLJAYBFhBZmUQ8tpZ8wawA4"],
      shipping_address_collection: {
        allowed_countries: ["GB", "US", "CA"],
      },
      line_items: paymentIntent,
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(
          items.map((item: { thumbnail: string }) => item.thumbnail)
        ),
      },
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    return NextResponse.json({ id: checkoutSession.id });
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
