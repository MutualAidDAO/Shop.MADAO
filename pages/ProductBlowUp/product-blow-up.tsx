import type { NextPage } from "next";
import Navbar from "../components/navbar";
import BlowUpViewBackground from "../components/blow-up-view-background";
import BottomBar from "../components/bottom-bar";

const ProductBlowUp: NextPage = () => {
  return (
    <div className="relative bg-blue w-full h-screen flex flex-col items-start justify-start gap-[0px]">
      <Navbar />
      <BlowUpViewBackground />
      <BottomBar />
    </div>
  );
};

export default ProductBlowUp;
