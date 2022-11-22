import type { NextPage } from "next";

type BlowUpContentType = {
  productName?: string;
  contactHereToPurchase?: string;
  shippingOnline?: string;
  productDescription?: string;
  price?: string;
};

const BlowUpContent: NextPage<BlowUpContentType> = ({
  productName,
  contactHereToPurchase,
  shippingOnline,
  productDescription,
  price,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-left text-lg text-black font-eb-garamond">
      <div className="relative text-xl inline-block w-[196px] h-[41px] shrink-0">
        {productName}
      </div>
      <p className="m-[0] relative inline-block">{price}</p>
      <div className="relative inline-block">{contactHereToPurchase}</div>
      <div className="relative inline-block">{shippingOnline}</div>
      <div className="relative inline-block">{productDescription}</div>
    </div>
  );
};

export default BlowUpContent;
