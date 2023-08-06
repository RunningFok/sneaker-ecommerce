import { initializeApp, getApps, cert } from "firebase-admin/app";
import * as admin from "firebase-admin";


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

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

  const db = app.firestore();


export default db;
