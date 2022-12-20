import type { NextPage } from "next";
import ListingBackground from "../components/listing-background";
import Router from "next/router"
import {useState, useEffect} from "react"


import useShop from '../hooks/useShop'


//----------------------------------------------------------------------------

let loading = false; // flag to prevent multiple load requests
let lastEvaluatedKey; // variable to store the last evaluated key for pagination
const {getProducts} = useShop();


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


//-------------------------------------------------------Component below--------------
const ListingsView: NextPage = () => {


   
  return (
    <div className="self-stretch flex-1 bg-gray-300 flex flex-row p-[10px] box-border items-start justify-start min-h-[700] text-left text-xl text-black font-eb-garamond">
      
      {products.map((product) => {
        
       <ListingBackground key= {product.listing} ListingsContent={product} />
      })}
    </div>
  );
};

export default ListingsView;
