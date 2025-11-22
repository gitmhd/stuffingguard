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
      <body className={`${inter.variable} antialiased bg-dark`}>
        <VisitCounter />
        {children}
      </body>
    </html>
  );
}
