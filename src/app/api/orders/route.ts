import moment from "moment";
import { loadStripe } from "@stripe/stripe-js";
import stripe from "stripe";
import db from "../../../../firebase-admin-config";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);

  const session = await getServerSession(authOptions);
  console.log("session from order.ts")
  console.log(session)

  const stripeOrders = await db
    .collection("users")
    .doc(session?.user?.email as string)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order: any) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
          apiKey: process.env.STRIPE_SECRET_KEY!,
        })
      ).data,
    }))
  );
  console.log(orders);
  return new NextResponse(JSON.stringify(orders), {
    headers: { "content-type": "application/json" },
  });
}
