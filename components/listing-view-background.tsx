import type { NextPage } from "next";
import ListingsView from "../components/listings-view";

type ListingContentType = {
  listingImage?: Blob;
  listing?: string;
  price?: string;
};

const ListingViewBackground: NextPageNextPage<ListingContentType> = (ListingsContent:{
  listingImage,
  listing,
  price,
}) => {

  return (
    <div className="self-stretch flex-1 bg-blue overflow-y-auto flex flex-col items-start justify-start text-left text-xl text-black font-eb-garamond">
      <ListingsView ListingsContent={ListingsContent} />
    </div>
  );
};

export default ListingViewBackground;
