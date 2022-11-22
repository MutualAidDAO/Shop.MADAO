import type { NextPage } from "next";
import Navbar from "../components/navbar";
import ListingForm from "../components/listing-form";
import BottomBar from "../components/bottom-bar";

const SellPage: NextPage = () => {
  return (
    <div className="relative bg-blue w-full h-screen flex flex-col items-center justify-between">
      <Navbar />
      <ListingForm />
      <BottomBar />
    </div>
  );
};

export default SellPage;
