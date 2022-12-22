import type { NextPage } from "next";
import  {useRouter}  from "next/router"

import BlowUpViewBackground from "../../components/blow-up-view-background";
import { Provider, useSelector } from "react-redux";
import { store } from "../../store";


//-----------------------------------------------------------------------------------------------


const getOneListing = async (IDpunchout:string) => {  //-----------------Gets the information from a loaded item in the redux store based on listing key


  const productsArray = useSelector((state: any) => state.products); //----Get array of objects from client store
  console.log(productsArray)
   const ProductsObj = productsArray.reduce((prodArr,innerProdKey) => {
     prodArr[innerProdKey.listing] = innerProdKey;
     return prodArr;

   },{});
   console.log(ProductsObj);
   const KeyID = IDpunchout;
   console.log(KeyID)
   if(KeyID in ProductsObj) {
     const listing = ProductsObj[KeyID];
      return listing
   } else {console.log('error in the getOneListing')}
   
 };



const ProductBlowUp: NextPage = () => {
  const router = useRouter();
  let oneListing
  if(router.query.listing){
     oneListing = getOneListing(router.query.listing);
  }
  


  return (<Provider store={store}>
    <div className="relative bg-blue w-full h-screen flex flex-col items-start justify-start gap-[0px]">
      
      <BlowUpViewBackground ListingContent={oneListing} />
      
    </div></Provider>
  );
};

// export async function getStaticPaths(context) {
//   const prodID = context.params.productID;

//   return {
//     fallback:false,
//     paths: [
//       {params:{
//         productID: prodID,
//       }}
//     ]
//   }
// }

// export async function getStaticProps(context) {

//   const prodID = context.params.productID;

//   console.log(prodID);

//   const listingOne = await AWS().findOne(prodID)

// return {
// props: {
//     ListingsContent: listingOne
// }, // will be passed to the page component as props
// revalidate: 300
// }
// }

export default ProductBlowUp;
