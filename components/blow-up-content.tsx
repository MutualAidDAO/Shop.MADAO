import type { NextPage } from "next";

type BlowUpContentType = {
  listing?: string;
  price?: string;
  contactHereToPurchase?: string;
  shipping?: string;
  Online?:boolean;
  productDescription?: string;
  
};

const BlowUpContent: NextPage<BlowUpContentType> = ({
  listing,
  contactHereToPurchase,
  shipping,
  Online,
  productDescription,
  price,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-left text-lg text-black font-eb-garamond">
      <div className="relative text-xl inline-block w-[196px] h-[41px] shrink-0">
        {listing}
      </div>
      <p className="m-[0] relative inline-block">{price}</p>
      <div className="relative inline-block">{contactHereToPurchase}</div>
      <div className="relative inline-block">{shipping || Online}</div>
      <div className="relative inline-block">{productDescription}</div>
    </div>
  );
};

export default BlowUpContent;
