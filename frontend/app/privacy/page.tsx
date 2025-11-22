import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MainFooter from "../components/MainFooter";

function Privacy() {
  return (
    <div className="container mx-auto max-w-4xl">
      <main className="px-8 py-10 md:py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text hover:text-light mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-light font-extrabold mb-4 tracking-[-0.043em]">
            Privacy Policy
          </h1>
          <p className="text-text text-lg">Last updated: November 22, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-text leading-7">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">Introduction</h2>
            <p>
              StuffingGuard is an open-source tool designed to help you check if
              your email or password has been compromised in data breaches. We
              are committed to protecting your privacy and being transparent
              about how we handle your data.
            </p>
          </section>

          {/* Data We Don't Collect */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">
              Data We Don&apos;t Collect
            </h2>
            <p className="mb-3">
              Your privacy is our top priority. When you use StuffingGuard:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                We <strong className="text-light">do not store</strong> any
                emails or passwords you search for
              </li>
              <li>
                We <strong className="text-light">do not log</strong> your
                search queries
              </li>
              <li>
                We <strong className="text-light">do not track</strong> your IP
                address or browsing activity
              </li>
              <li>
                We <strong className="text-light">do not use</strong> cookies
                for tracking purposes
              </li>
              <li>
                We <strong className="text-light">do not share</strong> any data
                with third parties
              </li>
            </ul>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">How It Works</h2>
            <p className="mb-3">
              StuffingGuard checks your email or password against databases of
              known data breaches. Here&apos;s what happens when you perform a
              search:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Your query is processed locally in your browser when possible
              </li>
              <li>
                For password checks, we use a hashing algorithm (SHA-1) to
                secure your password before sending it
              </li>
              <li>
                Only a partial hash (k-anonymity model) is sent to check against
                breach databases
              </li>
              <li>The results are displayed directly to you</li>
              <li>No record of your search is kept after you close the page</li>
            </ol>
          </section>

          {/* Open Source Transparency */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">
              Open Source Transparency
            </h2>
            <p>
              StuffingGuard is fully open source. You can review our entire
              codebase on{" "}
              <a
                href="https://github.com/gitmhd/stuffingguard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
              . This means anyone can verify our privacy claims and see exactly
              how we handle your data.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">
              Third-Party Services
            </h2>
            <p className="mb-3">
              StuffingGuard queries the following external breach databases to
              provide accurate results:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>
                <a
                  href="https://haveibeenpwned.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Have I Been Pwned (HIBP)
                </a>{" "}
                - For password breach checking using k-anonymity
              </li>
              <li>
                <a
                  href="https://xposedornot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  XposedOrNot
                </a>{" "}
                - For email breach checking
              </li>
            </ul>
            <p>
              These services have their own privacy policies that we recommend
              you review. We implement privacy-preserving techniques like
              k-anonymity to minimize data exposure even to these services.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              searches:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>All connections use HTTPS encryption</li>
              <li>Password queries are hashed before transmission</li>
              <li>No server-side logging or storage of search queries</li>
              <li>Regular security audits of our open-source code</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">Your Rights</h2>
            <p>
              Since we don&apos;t collect or store your personal data, there is
              no information to access, modify, or delete. Every search you
              perform is ephemeral and leaves no trace on our systems.
            </p>
          </section>

          {/* Self-Hosting */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">Self-Hosting</h2>
            <p>
              For maximum privacy, you can host StuffingGuard on your own
              infrastructure. Visit our{" "}
              <a
                href="https://github.com/gitmhd/stuffingguard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub repository
              </a>{" "}
              for instructions on how to set up your own instance.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated revision date. Since
              we don&apos;t collect your contact information, we can&apos;t
              notify you directly of changes.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl text-light font-bold mb-4">Contact</h2>
            <p>
              If you have questions about this privacy policy or StuffingGuard,
              please open an issue on our{" "}
              <a
                href="https://github.com/gitmhd/stuffingguard/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub repository
              </a>
              .
            </p>
          </section>

          {/* Bottom Note */}
          <section className="bg-dark border border-text/10 rounded-lg p-6 mt-12">
            <p className="text-center text-light font-semibold mb-2">
              Your Privacy Matters
            </p>
            <p className="text-center">
              StuffingGuard is built with privacy as a core principle. We
              believe security tools should protect you, not exploit your data.
            </p>
          </section>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}

export default Privacy;
