import type { NextPage } from "next";
import ListingBackground from "../components/listing-background";

const ListingsView: NextPage = () => {
  return (
    <div className="self-stretch flex-1 bg-gray-300 flex flex-row p-[10px] box-border items-start justify-start min-h-[700] text-left text-xl text-black font-eb-garamond">
      <ListingBackground />
    </div>
  );
};

export default ListingsView;
