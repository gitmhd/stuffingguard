import { AlertCircle, Lightbulb } from "lucide-react";

interface LeakData {
  type?: string;
  breaches?: string[];
  pw_count?: number;
}

function PositiveResult({ leak }: { leak: LeakData }) {
  const isEmail = leak.type === "email";
  const isPassword = leak.type === "password";

  return (
    <div className="positive-result bg-red-950/20 border border-red-800/50 rounded-2xl p-6">
      <div className="flex flex-col items-center text-center">
        {/* Alert Icon */}
        <div className="w-16 h-16 bg-red-200/10 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          {isEmail ? "Email Compromised!" : "Password Exposed!"}
        </h2>

        {/* Password Count */}
        {isPassword && leak.pw_count && (
          <div className="mb-4">
            <p className="text-text mb-2">
              This password has been seen in data breaches
            </p>
            <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-2">
              <span className="text-3xl font-bold text-red-400">
                {leak.pw_count.toLocaleString()}
              </span>
              <span className="text-sm text-text">times</span>
            </div>
            <p className="text-xs text-text mt-3 max-w-md flex items-startline">
              <AlertCircle /> This password should never be used. Change it
              immediately on all accounts where you&apos;ve used it.
            </p>
          </div>
        )}

        {/* Email Breaches List */}
        {isEmail && leak.breaches && leak.breaches.length > 0 && (
          <div className="w-full mt-2">
            <p className="text-text mb-4">
              Found in{" "}
              <span className="font-semibold text-red-400">
                {leak.breaches.length}
              </span>{" "}
              {leak.breaches.length === 1 ? "breach" : "breaches"}
            </p>

            {/* Breaches List */}
            <div className="w-full flex flex-wrap gap-2 max-h-64 overflow-y-auto pr-2">
              {leak.breaches.map((breach, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 bg-red-950/30 border border-red-800/40 rounded-lg px-4 py-2 hover:bg-red-950/40 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-red-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-white font-medium text-sm">
                    {breach}
                  </span>
                </div>
              ))}
            </div>

            <p className=" flex items-center gap-2 text-xs text-text mt-4 bg-red-950/20 border border-red-800/30 rounded-lg p-3">
              <Lightbulb size={20} /> Change your password immediately and
              enable two-factor authentication (2FA) on all affected accounts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PositiveResult;
