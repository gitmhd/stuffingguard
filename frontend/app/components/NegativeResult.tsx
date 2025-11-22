function NegativeResult() {
  return (
    <div className="negative-result mb-4 bg-emerald-950/40 border border-emerald-800/50 rounded-2xl p-6">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-emerald-700/50 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-emerald-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">All Clear!</h2>
        <p className="text-text">
          This credential was not found in any known breaches.
        </p>
      </div>
    </div>
  );
}

export default NegativeResult;
