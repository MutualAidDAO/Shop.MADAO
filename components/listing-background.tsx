import type { NextPage } from "next";
import Router from "next/router";
import ListingContent from "../components/listing-content";

const ListingBackground: NextPage = (ListingsContent) => {
 

  return (
    <div className="bg-gray-100 w-[250px] shrink-0 flex flex-row p-[20px_20px_48px] box-border items-start justify-start text-left text-xl text-black font-eb-garamond md:w-full">
      <ListingContent
      
        key= {ListingsContent.productID}
        listingImage="../rectangle-11@2x.png"
        productName="Product Name"
        price="₥~~~"
      />
    </div>
  );
};

export default ListingBackground;