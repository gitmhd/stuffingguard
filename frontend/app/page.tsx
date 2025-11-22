import Image from "next/image";
import MainFooter from "./components/MainFooter";
import SecurityTips from "./components/SecurityTips";
import TOPIMG from "../public/top-img.png";
import SearchPart from "./components/SearchPart";
import ResultWrapper from "./components/ResultWrapper";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl">
      <main className="px-8 py-10 md:py-20">
        <div className="search-section  flex flex-col md:flex-row items-center mb-12">
          <div className="img-container">
            <Image
              src={TOPIMG}
              width={384}
              height={384}
              alt="Top Image"
              className="top-image rounded-2xl"
            />
          </div>
          <div className="search-container text-center md:text-left p-8">
            <h1 className="main-title text-5xl mb-2 md:text-6xl text-light font-extrabold tracking-[-0.043em]">
              StuffingGuard
            </h1>
            <p className="main-description text-text text-md max-w-sm mb-6 leading-5 md:text-lg md:leading-7 ">
              Your Open-Source Tool to Check for Email or Password Leaks
            </p>
            <SearchPart />
            <p className="text-text">We do not store or log your entries.</p>
          </div>
        </div>

        <ResultWrapper />
      </main>
      <SecurityTips />
      <MainFooter />
    </div>
  );
}
