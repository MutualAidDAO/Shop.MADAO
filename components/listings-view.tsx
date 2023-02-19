
// import ListingBackground from "../components/listing-background";
// //import Router from "next/router"

import type { NextPage } from "next";
import { useEffect } from "react";
//import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import ListingBackground from "../components/listing-background";
import Sorry from '../components/sorry'
import useShop from '../hooks/useShop'

import { store } from "../store";


// //----------------------------------------------------------------------------

 
 const {getProducts} = useShop();



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

type productsArray = [
 Listing ,
] | null

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const Key="KEY";
const Count = "COUNT";


type DataAWS = {
  Items: Item[],
  Count: number,
  ScannedCount: number,
}

type Item = {
  shipping: string,
  Online: boolean,
  listing: string,
  price: string,
  proDesc: string,
  productImage: ProductImage,
  Contact: string,
}

type ProductImage = {
}



// //-------------------------------------------------------Component below--------------



const ListingsView = () => {
  



  //----------------------loading and pagination Logic------------------------
  const dispatch = useDispatch();
let loading = false;
const loadMoreItems = async () => {
  
if (loading) {
return;
}

loading = true;

const data  = await getProducts() as DataAWS;
//console.log(data);
dispatch({
  type: Key,
  payload: data.LastEvaluatedKey
  });
  
dispatch({
    type: Count,
    payload: data.Count
    });

dispatch({
type: LOAD_PRODUCTS,
payload: data.Items
});

};
//---------infinite pagination--------Deprecated-------------------
// if (process.browser) {
// window.addEventListener("scroll", () => {
// if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
// loadMoreItems();
// }
// });
// }
//------------another deprecated pagination---------------
// const observer = new IntersectionObserver((entries) => {
//   if (entries[0].isIntersecting) {
//     loadMoreItems();
//   }
// });

// observer.observe(document.querySelector('#load-more-trigger'));

// Load the first set of items
useEffect(() =>{
  loadMoreItems();
},[])



if (process.browser) {    //--------------Limiter to the pagination, without this the page assaults the backend nonstop------------------------
  window.addEventListener("scroll", () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    //
    if (!(hasMore == null) && window.scrollY >= maxScroll) {
      loadMoreItems();
    }
  });
}

const products = useSelector((state: any) => state.products);
  const hasMore = useSelector((state: string|null) => state.Key);

return (
<Provider store={store} >
<div className="self-stretch flex-1 bg-gray-300 flex flex-row p-[10px] box-border items-start justify-start min-h-[700] text-left text-xl text-black font-eb-garamond flex-wrap">
{products ? (
products.map((product:Listing) => {
  console.log(product)
  return <ListingBackground key={product.listing} Listing={product} />;
  })
  ) : (
  <Sorry />
  )}
  
  </div> </Provider>
  
)
  };
  export default ListingsView;
// //---------------------------------AI Gen Code below------------------------------Deprecated below---------------------
  
// type productsArray = [
//   {
//     listing:string,
//     productImage: 
//                null | Blob,
          
//                 contactHereToPurchase: string,
//                 shipping: string | null,
//                 Online: boolean,
//                 productDescription: string,
//                 price: number,
//   },
// ] | null

// const [products,setProducts]=useState()
// //let products:productsArray[] = null
// async function loadMoreItems() {
  
//   if (loading) {
//     return;
//   }

//   loading = true;

 

//      const data = await getProducts()
//     console.log(data)
    
    
     
//     // Update the last evaluated key and loading flag
//     lastEvaluatedKey = data.LastEvaluatedKey;
//     loading = false;
//   // const setProducts= ((newProducts) => {
//   //   if (products === null){
//   //     return [...newProducts]
//   //   } else {
//   //   return  [...products, ...newProducts]
//   // }});
//   setProducts((prevState) => {
//     return [...prevState, ...data];
//   });
//   //products = setProducts(data)
//   console.log(products)
//     return products
//   };


// // Attach the loadMoreItems function to the scroll event of the window
// if (process.browser) {
//   window.addEventListener('scroll', () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       loadMoreItems();
//     }
//   });
// }


// // Load the first set of items
// loadMoreItems();
//-----------------------------------------------Deprecated above-------------------------------