import Link from "next/link";
import { Home, Lightbulb, Search, ShieldAlert } from "lucide-react";
import MainFooter from "./components/MainFooter";

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-4xl min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center px-8 py-10">
        <div className="text-center max-w-2xl">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-primary/10 p-6 rounded-full">
              <ShieldAlert className="text-primary" size={80} />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl text-light font-extrabold mb-4 tracking-[-0.043em]">
            404
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-light font-bold mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-text text-lg leading-7 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have been
            compromised... or maybe it never existed. Either way, we
            couldn&apos;t find it.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Home size={20} />
              <span>Go Home</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-dark border border-text/20 hover:border-text/40 text-light font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Search size={20} />
              <span>Check for Breaches</span>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-text/10">
            <p className="text-text text-sm">
              Lost? Check out our{" "}
              <Link href="/about" className="text-primary hover:underline">
                About page
              </Link>{" "}
              or{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Fun Security Tip */}
          <div className="mt-8 bg-dark/50 border border-text/10 rounded-lg p-6">
            <p className="text-light flex gap-2 justify-center font-semibold mb-2">
              <Lightbulb /> Security Tip
            </p>
            <p className="text-text text-sm leading-6">
              While you&apos;re here, remember: Just like this page, your
              passwords should be hard to find. Use unique, strong passwords for
              each account!
            </p>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
