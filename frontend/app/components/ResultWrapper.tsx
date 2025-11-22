"use client";

import { useLeakStore } from "../store/useLeakStore";
import NegativeResult from "./NegativeResult";
import PositiveResult from "./PositiveResult";

function ResultWrapper() {
  const { leak } = useLeakStore();

  return (
    <>
      {/* When no leak data is present */}
      {!leak && (
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-700/30 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-gray-500"
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
            <h2 className="text-xl font-semibold text-gray-400 mb-2">
              Ready to Check
            </h2>
            <p className="text-text text-sm">
              Enter an email or password above to check for data breaches
            </p>
          </div>
        </div>
      )}

      {/* When leak data indicates no breaches */}
      {leak && leak.clear && <NegativeResult />}

      {/* When leak data indicates breaches found */}
      {leak && !leak.clear && <PositiveResult leak={leak} />}
    </>
  );
}

export default ResultWrapper;
