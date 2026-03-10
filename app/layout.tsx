import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pear Store",
  description: "A super cool fruit store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="portal" />
        <div id="root">
          <header>
            <div className="header-content">
              <Link href="/">
                <h1>Pearstore</h1>
              </Link>
              <h5 className="mid-text">--Freshfruits for everyone--</h5>

              <Cart />
            </div>
          </header>
          <main>{children}</main>
          <div className="hr" />
          <footer>
            <div className="email">
              <h5>Get new information of fresh fruits arrivals</h5>
              <EmailInput />
            </div>
            <div className="links">
              <div className="">
                <h3>Store</h3>
                <Link href="/">Home</Link>
                <Link href="/">Cart</Link>
              </div>

              <div className="">
                <h3>Support</h3>
                <Link href="/">Contact</Link>
                <Link href="/">FAQ</Link>
              </div>
            </div>
            <div className="socials"></div>
          </footer>
        </div>
      </body>
    </html>
  );
}
