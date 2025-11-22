"use client";

import { useState } from "react";
import call from "../utils/call";
import SHA1 from "crypto-js/sha1";
import { useLeakStore } from "../store/useLeakStore";
import { Eye, EyeOff } from "lucide-react";

function SearchPart() {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(true);
  const { loading, setLeak, setLoading } = useLeakStore();

  // Handle the check button click
  const handleCheck = async () => {
    setLoading(true);
    setLeak(null);

    // Make sure input is not empty
    if (!inputValue) {
      setLoading(false);
      return;
    }

    // Is what entered an email or password?
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    if (email) {
      // Handle email check
      const res = await call({
        url: `https://api.xposedornot.com/v1/check-email/${inputValue}`,
        method: "GET",
      });
      if (res.breaches) {
        setLeak({ type: "email", breaches: res.breaches[0] });
        console.log(res.breaches[0]);
        setLoading(false);
        // scroll down by 200px
        window.scrollBy({ top: 200, behavior: "smooth" });

        return;
      }

      // scroll down by 200px
      window.scrollBy({ top: 200, behavior: "smooth" });
      setLeak({ clear: true });
      setLoading(false);
    } else {
      // Hash the password with SHA-1 using crypto-js
      const hashHex = SHA1(inputValue).toString().toUpperCase();

      // Get first 5 characters of hash
      const hashPrefix = hashHex.substring(0, 5);
      const hashSuffix = hashHex.substring(5);

      // Call Pwned Passwords API
      const res = await fetch(
        `https://api.pwnedpasswords.com/range/${hashPrefix}`
      );
      const text = await res.text();

      // Check if our hash suffix is in the response
      const lines = text.split("\n");
      const found = lines.find((line) => line.startsWith(hashSuffix));

      if (found) {
        const count = found.split(":")[1];
        setLeak({ type: "password", pw_count: parseInt(count.trim(), 10) });
        setLoading(false);
        // scroll down by 200px
        window.scrollBy({ top: 200, behavior: "smooth" });
        return;
      }

      // scroll down by 200px
      window.scrollBy({ top: 200, behavior: "smooth" });
      setLeak({ clear: true });
      setLoading(false);
    }
  };

  return (
    <div className="check-input flex items-center gap-2 mb-2 md:min-w-md">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!loading && (
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCheck();
              }
            }}
            type={showInput ? "text" : "password"}
            placeholder="Enter an email or password to check"
            className="w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        )}
        {!loading && (
          <button
            onClick={() => setShowInput(!showInput)}
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-light transition-colors"
            aria-label={showInput ? "Hide input" : "Show input"}
          >
            {showInput ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
        {loading && (
          <div className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-light flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
      <button
        onClick={handleCheck}
        className="md:px-6 md:py-3 px-3 py-3 bg-blue-600 hover:bg-blue-700 text-white md:font-semibold rounded-lg transition-colors"
      >
        Check
      </button>
    </div>
  );
}

export default SearchPart;
