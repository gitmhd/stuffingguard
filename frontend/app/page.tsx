import Image from "next/image";
import MainFooter from "./components/MainFooter";
import SecurityTips from "./components/SecurityTips";
import TOPIMG from "../public/top-img.png";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main className="">
        <div className="search-section flex items-center">
          <div className="img-container">
            <Image
              src={TOPIMG}
              width={300}
              height={480}
              alt="Top Image"
              className="top-image rounded-2xl"
            />
          </div>
          <div className="search-container">
            <h1 className="main-title text-4xl font-extrabold">
              StuffingGuard
            </h1>
            <p className="main-description">
              Your Open-Source Tool to Check for Email or Password Leaks
            </p>
          </div>
        </div>
      </main>
      <SecurityTips />
      <MainFooter />
    </div>
  );
}
