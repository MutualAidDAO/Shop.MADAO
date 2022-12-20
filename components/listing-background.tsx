import type { NextPage } from "next";
import Router from "next/router";
import ListingContent from "../components/listing-content";


//-----------------------------------------------------------------------------------------------------

//type handler = () => {}  This is cool becuase it's the first complicated application of type I've used

type ListingContentType = {
  listingImage?: string|null|Blob;
  listing?: string;
  price?: string;
};


const ListingBackground: NextPage= ( ListingsContent:{
  listingImage,
  listing,
  price,
}) => {
 

   //trigger into the product.[listing] page
   const ContentHandler = () =>{
    Router.push('/' + ListingsContent.listing )
  }

  return (
    <div onClick={ContentHandler} className="bg-gray-100 w-[250px] shrink-0 flex flex-row p-[20px_20px_48px] box-border items-start justify-start text-left text-xl text-black font-eb-garamond md:w-full">
      <ListingContent
      
        
        listingImage={URL.createObjectURL(ListingsContent.listingImage)}
        listing= {ListingsContent.listing}
        price={`₥ ${ListingsContent.price}`}
      />
    </div>
  );
};

export default ListingBackground;
