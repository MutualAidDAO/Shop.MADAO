import type { NextPage } from "next";
import Router from "next/router";
import ListingContent from "../components/listing-content";


//-----------------------------------------------------------------------------------------------------


type ListingContentType = {
  listingImage?: string|null|Blob;
  listing?: string;
  price?: string;
};


const ListingBackground: NextPage<ListingContentType> = (ListingsContent:{
  listingImage,
  listing,
  price,
}) => {
 

  

  return (
    <div className="bg-gray-100 w-[250px] shrink-0 flex flex-row p-[20px_20px_48px] box-border items-start justify-start text-left text-xl text-black font-eb-garamond md:w-full">
      <ListingContent
      
        key= {ListingsContent.listing}
        listingImage="../rectangle-11@2x.png"
        listing= {ListingsContent.listing}
        price={`₥ ${ListingsContent.price}`}
      />
    </div>
  );
};

export default ListingBackground;
