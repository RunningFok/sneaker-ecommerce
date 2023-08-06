import * as admin from "firebase-admin";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { buffer } from "micro";
const permission = require("../../../../permission.json");

interface serviceAccount {
  type?: string;
  project_id?: string;
  private_key_id?: string;
  private_key?: string;
  client_email?: string;
  client_id?: string;
  auth_uri?: string;
  token_uri?: string;
  auth_provider_x509_cert_url?: string;
  client_x509_cert_url?: string;
  universe_domain?: string;
}

const { privateKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY as string);

const serviceAccount = {
  type: process.env.FIREBASE_TYPE as string,
  project_id: process.env.FIREBASE_PROJECT_ID as string,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID as string,
  private_key: privateKey,
  client_email: process.env.FIREBASE_CLIENT_EMAIL as string,
  client_id: process.env.FIREBASE_CLIENT_ID as string,
  auth_uri: process.env.FIREBASE_AUTH_URI as string,
  token_uri: process.env.FIREBASE_TOKEN_URI as string,
  auth_provider_x509_cert_url: process.env
    .FIREBASE_AUTH_PROVIDER_X509_CERT_URL as string,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL as string,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN as string,
} as admin.ServiceAccount;

export async function POST(req: NextRequest) {
  const fulfillOrder = async (session: any) => {
    console.log("Fulfilling order", session);
    return app
      .firestore()
      .collection("users")
      .doc(session.metadata.email)
      .collection("orders")
      .doc(session.id)
      .set({
        amount: session.amount_total / 100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log(`SUCCESS: Order ${session.id} had been added to the DB`);
      });
  };

  const app = !admin.apps.length
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      })
    : admin.app();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  const body = (await req.text()).toString();
  const sig = req.headers.get("stripe-signature") as string | string[];
  let event;
  const endpointSecret = process.env.STRIPE_SIGNING_SECRET as string;

  try {
    console.log("constructing event...");
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    const session = event.data.object;
    return fulfillOrder(session).then(() => {
      return NextResponse.json({
        msg: "Successfuly created new User: ",
        status: 200,
      });
    });
  } catch (error) {
    console.error(error);

    NextResponse.json({
      error: "Error on '/api/register': " + error,
      status: 400,
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
