import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Code,
  Lock,
  Server,
  Zap,
  Eye,
  Lightbulb,
} from "lucide-react";
import MainFooter from "../components/MainFooter";

function About() {
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
            About StuffingGuard
          </h1>
          <p className="text-xl text-text leading-8">
            In a world of data breaches, checking your security shouldn&apos;t
            require giving up more of your data.
          </p>
        </div>

        {/* What is StuffingGuard */}
        <section className="mb-16">
          <h2 className="text-3xl text-light font-bold mb-6">
            What is StuffingGuard?
          </h2>
          <div className="space-y-4 text-text leading-7">
            <p>
              <strong className="text-light">StuffingGuard</strong> is a free,
              open-source web tool that helps you check if your email address or
              password has been exposed in known data breaches.
            </p>
            <p>
              When hackers compromise websites, databases, or services, they
              often leak or sell millions of stolen credentials online. These
              leaked credentials are then used in{" "}
              <strong className="text-light">
                credential stuffing attacks
              </strong>
              —automated attempts to log into your other accounts using the same
              email and password combination.
            </p>
            <p>
              StuffingGuard checks your credentials against databases of known
              breaches to tell you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 my-4">
              <li>
                <strong className="text-light">For emails:</strong> Which data
                breaches (if any) have exposed your email address
              </li>
              <li>
                <strong className="text-light">For passwords:</strong> Whether
                your password has appeared in any known breach databases
              </li>
            </ul>
            <p>
              If your credentials have been compromised, you&apos;ll know
              immediately—and can take action by changing your passwords,
              enabling two-factor authentication, or monitoring your accounts
              for suspicious activity.
            </p>
            <div className="bg-dark/50 border border-primary/20 rounded-lg p-6 mt-6">
              <p className="text-light font-semibold mb-2 flex gap-2">
                <Lightbulb /> Pro Tip: Creating a New Password?
              </p>
              <p className="text-text leading-7">
                You can also use StuffingGuard <em>before</em> setting a new
                password. Check if your desired password has already been
                exposed in previous breaches. If it has, choose a different
                one—even strong passwords aren&apos;t safe if they&apos;ve
                already been stolen and published online.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl text-light font-bold mb-4">
              Peace of Mind, Without the Corporate Bloat
            </h2>
            <p className="text-text leading-7">
              StuffingGuard is a tool built for <em>people</em>, not for profit
              or data collection. We believe security tools should protect you,
              not exploit your data. No ads, no subscriptions, no hidden
              agendas—just a simple, powerful tool that does one thing well:
              tells you if you&apos;re safe.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <div className="space-y-12 mb-16">
          {/* Feature 1: Zero Knowledge */}
          <section className="flex gap-6">
            <div className="shrink-0">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Eye className="text-primary" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-light font-bold mb-3">
                The &ldquo;Ghost&rdquo; Promise
              </h3>
              <p className="text-text/80 text-sm mb-2 uppercase tracking-wide">
                Privacy First
              </p>
              <p className="text-text leading-7 mb-3">
                Most tools ask you to trust them. StuffingGuard asks you{" "}
                <em>not</em> to.
              </p>
              <div className="bg-dark/50 border border-text/10 rounded-lg p-4 mb-3">
                <p className="text-light font-semibold">
                  &ldquo;We don&apos;t know who you are, and we don&apos;t want
                  to.&rdquo;
                </p>
              </div>
              <p className="text-text leading-7">
                Unlike other services that require an account or email signup
                just to run a check, StuffingGuard is stateless. We do not
                store, log, or even see your full data. You enter, you check,
                you leave.{" "}
                <strong className="text-light">
                  No footprints left behind.
                </strong>
              </p>
            </div>
          </section>

          {/* Feature 2: Open Source */}
          <section className="flex gap-6">
            <div className="shrink-0">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Code className="text-primary" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-light font-bold mb-3">
                The &ldquo;Glass Kitchen&rdquo;
              </h3>
              <p className="text-text/80 text-sm mb-2 uppercase tracking-wide">
                100% Open Source Transparency
              </p>
              <p className="text-text leading-7 mb-3">
                Trust is earned through visibility.
              </p>
              <div className="bg-dark/50 border border-text/10 rounded-lg p-4 mb-3">
                <p className="text-light font-semibold">
                  &ldquo;Don&apos;t trust our words, trust our code.&rdquo;
                </p>
              </div>
              <p className="text-text leading-7 mb-3">
                Security tools shouldn&apos;t be black boxes. StuffingGuard is
                fully open-source, meaning our entire codebase is public on{" "}
                <a
                  href="https://github.com/gitmhd/stuffingguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                . Security researchers and developers can inspect exactly how
                your data is handled, ensuring there are no hidden backdoors or
                trackers.
              </p>
              <p className="text-light font-semibold">
                Community Verified. Publicly Auditable. Zero Secrets.
              </p>
            </div>
          </section>

          {/* Feature 3: K-Anonymity */}
          <section className="flex gap-6">
            <div className="shrink-0">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Lock className="text-primary" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-light font-bold mb-3">
                Math, Not Magic
              </h3>
              <p className="text-text/80 text-sm mb-2 uppercase tracking-wide">
                K-Anonymity Hashing
              </p>
              <p className="text-text leading-7 mb-3">
                We use <strong className="text-light">k-anonymity</strong> to
                protect your privacy. When you check a password, your browser
                converts it into a cryptographic code (hash) and sends{" "}
                <strong className="text-light">
                  only the first 5 characters
                </strong>{" "}
                to the database.
              </p>
              <p className="text-text leading-7">
                We never send or see your actual password—
                <strong className="text-light">
                  it never leaves your device.
                </strong>{" "}
                This technique ensures that even if someone intercepted the
                request, they couldn&apos;t reverse-engineer your password.
              </p>
            </div>
          </section>

          {/* Feature 4: Self-Hostable */}
          <section className="flex gap-6">
            <div className="shrink-0">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Server className="text-primary" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-light font-bold mb-3">
                Your House, Your Rules
              </h3>
              <p className="text-text/80 text-sm mb-2 uppercase tracking-wide">
                Easy to Self-Host
              </p>
              <div className="bg-dark/50 border border-text/10 rounded-lg p-4 mb-3">
                <p className="text-light font-semibold">
                  &ldquo;Don&apos;t trust us? Run it yourself.&rdquo;
                </p>
              </div>
              <p className="text-text leading-7 mb-3">
                Paranoid about privacy? We get it. Because StuffingGuard is a
                lightweight Next.js app, you can clone our repository and run
                the tool entirely on your own local machine.
              </p>
              <p className="text-text leading-7">
                You don&apos;t even have to trust our website—you can run your
                own instance on{" "}
                <code className="bg-text/10 px-2 py-1 rounded text-light">
                  localhost
                </code>
                . Complete control, complete privacy.
              </p>
            </div>
          </section>

          {/* Feature 5: Simplicity */}
          <section className="flex gap-6">
            <div className="shrink-0">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Zap className="text-primary" size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-light font-bold mb-3">
                Just the Answer You Need
              </h3>
              <p className="text-text/80 text-sm mb-2 uppercase tracking-wide">
                No Bloat, No Ads, No Upsells
              </p>
              <p className="text-text leading-7 mb-3">
                We aren&apos;t trying to sell you a subscription or show you
                ads. We are a single-purpose tool designed to do one thing well:
                tell you if you&apos;re safe.
              </p>
              <p className="text-text leading-7">
                <strong className="text-light">
                  Clean. Fast. Free. Forever.
                </strong>
              </p>
            </div>
          </section>
        </div>

        {/* Why StuffingGuard Summary Box */}
        <section className="bg-dark border border-text/10 rounded-lg p-8 mb-12">
          <h2 className="text-2xl text-light font-bold mb-6 flex items-center gap-3">
            <Shield className="text-primary" size={32} />
            Why StuffingGuard?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-text">
            <div>
              <h3 className="text-light font-semibold mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span> Stateless & Private
              </h3>
              <p className="text-sm leading-6">
                No accounts, no logs, no tracking. Your searches are ephemeral.
              </p>
            </div>
            <div>
              <h3 className="text-light font-semibold mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span> Client-Side Hashing
              </h3>
              <p className="text-sm leading-6">
                Your password never leaves your browser in plain text.
              </p>
            </div>
            <div>
              <h3 className="text-light font-semibold mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span> Community Verified
              </h3>
              <p className="text-sm leading-6">
                100% Open Source code that anyone can audit on GitHub.
              </p>
            </div>
            <div>
              <h3 className="text-light font-semibold mb-2 flex items-center gap-2">
                <span className="text-primary">✓</span> Run It Yourself
              </h3>
              <p className="text-sm leading-6">
                Don&apos;t trust us? Download and run it locally on{" "}
                <code className="bg-text/10 px-1 rounded">localhost</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary/10 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl text-light font-bold mb-4">
            Security Without Surveillance
          </h2>
          <p className="text-text leading-7 mb-6 max-w-2xl mx-auto">
            StuffingGuard proves that you don&apos;t need to sacrifice privacy
            for security. We protect your data by never collecting it in the
            first place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary hover:bg-primary/90 text-light font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Check Your Security
            </Link>
            <a
              href="https://github.com/gitmhd/stuffingguard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-text/20 hover:border-light text-light font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}

export default About;
