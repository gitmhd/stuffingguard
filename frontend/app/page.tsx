import Image from "next/image";
import MainFooter from "./components/MainFooter";
import SecurityTips from "./components/SecurityTips";
import LOGO from "../public/logo.svg";
import SearchPart from "./components/SearchPart";
import ResultWrapper from "./components/ResultWrapper";
import { Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl">
      <main className="px-8 py-10 md:py-20">
        <div className="search-section flex flex-col items-center mb-12">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-3 md:gap-4 mb-6">
            <Image
              src={LOGO}
              width={80}
              height={80}
              alt="StuffingGuard Logo"
              className="logo w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
            <h1 className="main-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-light font-extrabold tracking-[-0.043em]">
              StuffingGuard
            </h1>
          </div>

          {/* Description */}
          <p className="main-description text-text text-lg md:text-xl text-center max-w-2xl mb-8 leading-7">
            Your Open-Source Tool to Check for Email or Password Leaks
          </p>

          {/* Search Component */}
          <div className="w-full max-w-2xl">
            <SearchPart />
          </div>

          {/* Privacy Note */}
          <p className="text-text text-sm mt-4 flex items-center gap-2">
            <Lock className="text-primary" size={16} />
            We do not store or log your entries.
          </p>
        </div>

        <ResultWrapper />
      </main>
      <SecurityTips />
      <MainFooter />
    </div>
  );
}
