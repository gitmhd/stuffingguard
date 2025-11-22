"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

function SecurityTips() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="security-tips px-8 mb-16">
      <h2 className="text-xl font-semibold mb-6 flex justify-center text-light">
        Security Tips
      </h2>

      <ul className="faqs">
        <li className="faq-item mb-4 border-text/30 border rounded-xl p-4">
          <h4
            onClick={() => handleToggle(0)}
            className="faq-title font-medium text-light flex justify-between leading-8 cursor-pointer"
          >
            Enable Two-Factor Authentication
            <ChevronDown
              size={30}
              className={`text-text hover:bg-light/20 rounded-full p-1 transition-transform duration-300 ${
                openItems.includes(0) ? "rotate-180" : ""
              }`}
            />
          </h4>
          {openItems.includes(0) && (
            <p className="faq-answer text-text mt-3">
              Adding a second layer of security like a code from your phone
              significantly increases the protection of your accounts, even if
              your password is stolen.
            </p>
          )}
        </li>

        <li className="faq-item mb-4 border-text/30 border rounded-xl p-4">
          <h4
            onClick={() => handleToggle(1)}
            className="faq-title cursor-pointer font-medium text-light flex justify-between leading-8"
          >
            Use a Password Manager
            <ChevronDown
              size={30}
              className={`text-text hover:bg-light/20 rounded-full p-1 transition-transform duration-300 ${
                openItems.includes(1) ? "rotate-180" : ""
              }`}
            />
          </h4>
          {openItems.includes(1) && (
            <p className="faq-answer text-text mt-3">
              Password managers generate and store strong, unique passwords for
              all your accounts, so you don&apos;t have to remember them.
            </p>
          )}
        </li>

        <li className="faq-item mb-4 border-text/30 border rounded-xl p-4">
          <h4
            onClick={() => handleToggle(2)}
            className="faq-title cursor-pointer font-medium text-light flex justify-between leading-8"
          >
            Create Strong, Unique Passwords
            <ChevronDown
              size={30}
              className={`text-text hover:bg-light/20 rounded-full p-1 transition-transform duration-300 ${
                openItems.includes(2) ? "rotate-180" : ""
              }`}
            />
          </h4>
          {openItems.includes(2) && (
            <p className="faq-answer text-text mt-3">
              Avoid using common words, personal information, or the same
              password across multiple sites. Aim for a mix of letters, numbers,
              and symbols.
            </p>
          )}
        </li>
      </ul>
    </section>
  );
}

export default SecurityTips;
