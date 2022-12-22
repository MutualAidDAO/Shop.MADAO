import type { NextPage } from "next";
import Router from "next/router";
import ListingContent from "../components/listing-content";


//-----------------------------------------------------------------------------------------------------

//type handler = () => {}  This is cool becuase it's the first complicated application of type I've used

type Listing = {
  listing?:string,
  productImage?: 
             null | Blob ,
        
              Contact?: string,
              shipping?: string | null,
              Online?: boolean,
              proDesc?: string,
              price?: number,
}
type ListingBackgroundProps = {
  Listing:Listing
  // Other props for the component
}

const ListingBackground: NextPage<ListingBackgroundProps>= ( key, Listing:Listing) => {
 
console.log(Listing)
   //trigger into the product.[listing] page
   const ContentHandler = () =>{
    Router.push('/' + Listing.listing )
  }

  return (
    <div onClick={ContentHandler} className="bg-gray-100 w-[250px] m-4 shrink-0 flex flex-row p-[20px_20px_48px] box-border items-start justify-start text-left text-xl text-black font-eb-garamond md:w-full">
      <ListingContent
      
        
        listingImage={Listing.productImage ? (URL.createObjectURL(Listing.productImage)):("../rectangle-11@2x.png")}
        listing= {Listing.listing}
        price={`₥ ${Listing.price}`}
      />
    </div>
  );
};

export default ListingBackground;
