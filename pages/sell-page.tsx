import type { NextPage } from "next";
import Router from "next/router";

import ListingForm from "../components/listing-form";


const SellPage: NextPage = () => {

  const submitHandler = async (ListedData) =>{
      


      const response = await fetch('/api/submitListing', {
        method:'POST',
        body: JSON.stringify(ListedData),
        headers: {
          'Content-Type':"application/json"
        }
      });

      const data = await response.json();

      console.log(data);
      Router().push('/')
  };



  return (
    <div className="relative bg-blue w-full h-screen flex flex-col items-center justify-center">
      
      <ListingForm onListed={submitHandler} />
     
    </div>
  );
};

export default SellPage;
