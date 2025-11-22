import Image from "next/image";
import MainFooter from "./components/MainFooter";
import SecurityTips from "./components/SecurityTips";
import LOGO from "../public/logo.svg";
import SearchPart from "./components/SearchPart";
import ResultWrapper from "./components/ResultWrapper";
import { Lock, Database, Mail } from "lucide-react";

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

        {/* Statistics Section */}
        <div className="stats-section mt-12">
          <div className="bg-dark/50 border border-text/10 rounded-lg p-8">
            <h2 className="text-2xl text-light font-bold text-center mb-6">
              Powered by Comprehensive Breach Data
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Records */}
              <div className="flex items-start gap-4 bg-primary/5 border border-primary/10 rounded-lg p-6">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-light font-extrabold mb-2">
                    4.7B+
                  </div>
                  <p className="text-text leading-6">
                    Email records searched across known data breaches
                  </p>
                </div>
              </div>

              {/* Password Records */}
              <div className="flex items-start gap-4 bg-primary/5 border border-primary/10 rounded-lg p-6">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Database className="text-primary" size={28} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl text-light font-extrabold mb-2">
                    1.5B+
                  </div>
                  <p className="text-text leading-6">
                    Password hashes checked for compromises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SecurityTips />
      <MainFooter />
    </div>
  );
}
