import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hendricken Hardware Ltd.",
  description: "Created by Hendricken Hardware Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[auto_1fr_auto] h-screen`}
      >

        <Navbar />
        <div className=" flex flex-col justify-center items-center">

          <div className=" container mx-32 px-8 py-8 flex-grow">
            
            {children}

          </div>
        </div>

        <Footer />
        
      </body>
    </html>
  );
}
