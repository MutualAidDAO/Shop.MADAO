import type { NextPage } from "next";
import  {useRouter}  from "next/router"
import useShop from "../../hooks/useShop";
import BlowUpViewBackground from "../../components/blow-up-view-background";
import { Provider } from "react-redux";
import { store } from "../../store";


//-----------------------------------------------------------------------------------------------


const {getOneListing} = useShop();



const ProductBlowUp: NextPage = () => {
  const router = useRouter();
  const oneListing = getOneListing(router.query.listing);


  return (<Provider store={store}>
    <div className="relative bg-blue w-full h-screen flex flex-col items-start justify-start gap-[0px]">
      
      <BlowUpViewBackground listingContent={oneListing} />
      
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
