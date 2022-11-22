import type { NextPage } from "next";
import Navbar from "../components/navbar";
import ViewBackground from "../components/view-background";
import BottomBar from "../components/bottom-bar";

const AdaDonors: NextPage = () => {
  return (
    <div className="relative bg-blue w-full h-screen flex flex-col items-start justify-start gap-[0px] lg:max-w-[1200] md:max-w-[750] sm:max-w-[410]">
      <Navbar />
      <ViewBackground />
      <BottomBar />
    </div>
  );
};

export default AdaDonors;
