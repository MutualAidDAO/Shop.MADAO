import type { NextPage } from "next";
import {useState, useEffect} from "react"
import ListingViewBackground from "../components/listing-view-background";



//----------------------------------------------------------------------

const productKey =    'something'               //"productID" + (Math.random() * 10000).toFixed(0) + Math.random().toString()
const testingArray = [
  {
    productID: productKey,
   key:  productKey
    ,
    productName:"Kai's Kitchen",
        contactHereToPurchase:`Contact Kai to purchase`,
        shippingOnline:"Shipping/Online(boolean)",//state,
        productDescription:"Tasty",
        price:"₥35",
  }, {
    productID: productKey,
    key: productKey
    ,
    productName:"FlowerBouqets",
        contactHereToPurchase:`Contact Sheridan to purchase`,
        shippingOnline:"Shipping/Online(boolean)",//state,
        productDescription:"Smells Great",
        price:"₥70",
  },
  {productID: productKey,
    key:  productKey
    , 
    productName:"CopyMeme",
        contactHereToPurchase:`Contact shael to purchase`,
        shippingOnline:"Shipping/Online(boolean)",//stateful,
        productDescription:"Copywriting/MemeMaking",
        price:"₥25",
  }
]


//-------------------------------------------------------------------------------
// props: {
//   productID: string;
//   key: string;
//   productName: string;
//   contactHereToPurchase: string;
//   shipping: string;
//   Online: boolean;
//   productDescription: string;
//   price: string;
// }[]


const Index: NextPage = (props) => {
    // const [loadedListings,setLoadedListings] = useState(String[]);
    // useEffect(() =>{
    //   //send GET request with this
    //     setLoadedListings(testingArray);
    // },[]);

  return (
    <div className="relative bg-blue w-screen h-screen flex flex-col items-start justify-start gap-[0px] md:h-screen md:w-screen md:min-h-[950]">
      
      {/* <ListingViewBackground ListingsContent={props.ListingsContent} /> */}
      <ListingViewBackground />
      
    </div>
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
