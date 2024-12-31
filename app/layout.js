"use client"; // This ensures the layout is a Client Component

import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Root Layout Component
export default function RootLayout({ children }) {
  return (
    <SessionProvider> {/* Wrap children with SessionProvider */}
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
