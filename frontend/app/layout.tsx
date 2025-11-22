import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VisitCounter from "./components/VisitCounter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title:
    "StuffingGuard - Your Open-Source Tool to Check for Email or Password Leaks",
  description:
    "Protect your online accounts with StuffingGuard, an open-source tool that checks if your email or password has been compromised in data breaches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-dark relative`}>
        {/* Ambient gradient effect */}
        <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/20 blur-[120px] rounded-full opacity-50" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10">
          <VisitCounter />
          {children}
        </div>
      </body>
    </html>
  );
}
