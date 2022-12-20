import type { NextPage } from "next";
import {useState, useEffect} from "react"
import ListingViewBackground from "../components/listing-view-background";

import useShop from '../hooks/useShop'

//----------------------------------------------------------------------

// const productKey =    'something'               //"productID" + (Math.random() * 10000).toFixed(0) + Math.random().toString()
// const testingArray = [
//   {
//     productID: productKey,
//    key:  productKey
//     ,
//     productName:"Kai's Kitchen",
//         contactHereToPurchase:`Contact Kai to purchase`,
//         shippingOnline:"Shipping/Online(boolean)",//state,
//         productDescription:"Tasty",
//         price:"₥35",
//   }, {
//     productID: productKey,
//     key: productKey
//     ,
//     productName:"FlowerBouqets",
//         contactHereToPurchase:`Contact Sheridan to purchase`,
//         shippingOnline:"Shipping/Online(boolean)",//state,
//         productDescription:"Smells Great",
//         price:"₥70",
//   },
//   {productID: productKey,
//     key:  productKey
//     , 
//     productName:"CopyMeme",
//         contactHereToPurchase:`Contact shael to purchase`,
//         shippingOnline:"Shipping/Online(boolean)",//stateful,
//         productDescription:"Copywriting/MemeMaking",
//         price:"₥25",
//   }
// ]


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


let loading = false; // flag to prevent multiple load requests
let lastEvaluatedKey; // variable to store the last evaluated key for pagination
const {getProducts} = useShop();




const Index: NextPage = () => {
   
  const[products,setProducts] = useState(getProducts);

//---------------------------------AI Gen Code below------------------------------
  
async function loadMoreItems() {
 
  if (loading) {
    return;
  }

  loading = true;

 

     const data = await getProducts()

    // Append the new items to the page
    // data.Items.forEach(item => {
    //   // const element = document.createElement('div');
    //   // element.innerHTML = `<p>${item.name}</p><p>${item.description}</p>`;
    //   // document.getElementById('items').appendChild(element);
    // });
    
    // Update the last evaluated key and loading flag
    lastEvaluatedKey = data.LastEvaluatedKey;
    loading = false;
  setProducts([...products,...data]);
    return products
  };


// Attach the loadMoreItems function to the scroll event of the window
if (process.browser) {
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMoreItems();
    }
  });
}


// Load the first set of items
loadMoreItems();
//-------------------------AI Gen Code above------------------------

  return (
    <div className="relative bg-blue w-screen h-screen flex flex-col items-start justify-start gap-[0px] md:h-screen md:w-screen md:min-h-[950]">
      

      <ListingViewBackground  />
    
      
      
      
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
