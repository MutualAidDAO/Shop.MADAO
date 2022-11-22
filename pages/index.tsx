import type { NextPage } from "next";
import Navbar from "../components/navbar";
import ListingViewBackground from "../components/listing-view-background";
import BottomBar from "../components/bottom-bar";

const Index: NextPage = () => {
  return (
    <div className="relative bg-blue w-screen h-screen flex flex-col items-start justify-start gap-[0px] md:h-screen md:w-screen md:min-h-[950]">
      <Navbar />
      <ListingViewBackground />
      <BottomBar />
    </div>
  );
};

export default Index;
