import type { NextPage } from "next";
import  Router  from "next/router"

import BlowUpViewBackground from "../../components/blow-up-view-background";




const ProductBlowUp: NextPage = (props) => {
  const router = Router();
  const oneListing = props.listingOne;


  return (
    <div className="relative bg-blue w-full h-screen flex flex-col items-start justify-start gap-[0px]">
      
      <BlowUpViewBackground listingContent={oneListing} />
      
    </div>
  );
};

export async function getStaticPaths(context) {
  const prodID = context.params.productID;

  return {
    fallback:false,
    paths: [
      {params:{
        productID: prodID,
      }}
    ]
  }
}

export async function getStaticProps(context) {

  const prodID = context.params.productID;

  console.log(prodID);

  const listingOne = await AWS().findOne(prodID)

return {
props: {
    ListingsContent: listingOne
}, // will be passed to the page component as props
revalidate: 300
}
}

export default ProductBlowUp;
