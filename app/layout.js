"use client"; // Make sure this file is treated as a Client Component

import { useEffect, useState } from "react";
import { SessionProvider, useSession } from "next-auth/react"; // Import SessionProvider and useSession
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  // Set loading state to false once the page is hydrated
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null; // Or show a loading spinner
  }

  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}

