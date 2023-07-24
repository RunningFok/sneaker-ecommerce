import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./provider";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GoodKick: Sneakers, Streetwear, Trading Cards, Handbags, Watches",
  description:
    "GoodKick: Sneakers, Streetwear, Trading Cards, Handbags, Watches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Providers>
          <Navbar />
          {children}
          <Footer />
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}
