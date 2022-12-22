import type { NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store";
import ListingViewBackground from "../components/listing-view-background";
//----------------------------------------------------------------------




//-------------------------------------------------------------------------------
// listing: {
//   listing: string;
//   key: string;
//   contactHereToPurchase: string;
//   shipping: string;
//   Online: boolean;
//   productDescription: string;
//   price: string;
// }[]






const Index: NextPage = () => {
   
 

  return ( <Provider store={store} >
    <div className="relative bg-blue w-screen h-screen flex flex-col items-start justify-start gap-[0px] md:h-screen md:w-screen md:min-h-[950]">
      

      <ListingViewBackground  />
    
      
      
      
    </div></Provider>
  );
};

// export async function getStaticProps() {

  // const GEThandle = async () => {
  //   let listingsGET:
  //   await fetch('/api/GEThandle', {
  //     method:'GET',
  //     body: JSON.stringify(listingsGET),
  //     headers: {
  //       'Content-Type':"application/json"
  //     }
  //   })

  //   return 
  // }


 
//   const listingsArray = await listingsGET.find().toArray();

//   console.log(result);

//   return {
//     props: {
//       ListingsContent: listingsArray.map( (Listings) =>({
//         price: Listings.price,
//         productID: Listings.productID,
      
//         productName: Listings.productName,
//         // contactHereToPurchase: Listings.contactHereToPurchase,
//         // shipping: Listings.shipping,
//         // Online: Listings.Online,
//         // productDescription: Listings.productDescription,
//         image: Listings.image
//     } ))
// }, // will be passed to the page component as props
// revalidate: 300
// }};


export default Index;
