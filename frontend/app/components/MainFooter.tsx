import { Github } from "lucide-react";
import Link from "next/link";

function MainFooter() {
  return (
    <footer className="main-footer">
      <hr className="text-text/10" />

      <nav className="flex justify-center items-center gap-8 pt-12 text-text">
        <Link href="#" className="hover:text-light">
          Privacy Policy
        </Link>
        <Link
          href="https://github.com/gitmhd/stuffingguard/blob/main/README.md"
          className="hover:text-light"
        >
          Project Information
        </Link>
      </nav>

      <div className="flex flex-col justify-center items-center gap-4 py-8">
        <a href="https://github.com/gitmhd/stuffingguard" target="_blank">
          <Github className="bg-text rounded-full p-0.5 hover:bg-light" />
        </a>
        <p className="text-text">Proudly Open Source</p>
      </div>
    </footer>
  );
}

export default MainFooter;
