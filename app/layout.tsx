import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Link from "next/link";
import EmailInput from "@/components/EmailInput";
import NavBar from "@/components/NavBar";

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
        <div id="root" className="bg-amber-50">
          <NavBar />
          <main className="min-h-screen">{children}</main>
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
                <Link href="/contact">Contact</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            </div>
            <div className="socials">
              <p>
                Coppy right{" "}
                <a href="https://animated-portfolio-two-chi.vercel.app/">
                  Jenny Nguyen
                </a>{" "}
                2026
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
