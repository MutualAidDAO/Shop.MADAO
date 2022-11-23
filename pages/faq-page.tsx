import type { NextPage } from "next";
import Navbar from "../components/navbar";
import FAQBackground from "../components/f-a-q-background";
import BottomBar from "../components/bottom-bar";

const FAQPage: NextPage = () => {
  return (
    <div className="relative bg-blue w-full h-screen flex flex-col items-start justify-start gap-[0px] lg:max-w-[100vw] md:max-w-[100vw] sm:max-w-[100vw]">
      
      <FAQBackground />
      
    </div>
  );
};

export default FAQPage;
