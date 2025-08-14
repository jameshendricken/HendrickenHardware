import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "./components/Footer";
import CustomNavbar from "./components/customNavbar"; 
import { ThemeProvider } from "next-themes";


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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[auto_1fr_auto] mt-14 h-screen`}
      >

        <CustomNavbar />

        <main>

          <div className=" flex flex-col justify-center items-center">

          <div className=" container lg:mx-32 px-8 py-8 flex-grow">
            
            <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
              {children}
            </ThemeProvider>
            

          </div>
        </div>

        </main>
        

        <Footer />
        
      </body>
    </html>
  );
}
