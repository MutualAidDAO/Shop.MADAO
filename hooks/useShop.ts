import axios from "axios";
import { config } from "process";


type ReturnType = {
  // getProducts: () => any[];
  createProduct: () => void;
}

export default function useShop(): ReturnType {
  
 
   const apiKey = 'yHFcBOA0TL94BmUYPCdZ49zbOS0LVFBC2qxQT33V' ;
    const apiEndP = `https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery`
  

  const getProducts = async () => {

    // setup the api call to get products
    // exicute call to get products
    // await 
    // await fetch()
    // get the data from the responce


    // return that data(records)
    return [];
  }
 params = {
 Item: 
 {
    listing: `productKey`, // must be a string with partition key of listing //required
  
   productImage: 
      null
   ,
   productName:
      "Kai's Kitchen",
       contactHereToPurchase:
         
       `Contact Kai to purchase`,
       shippingOnline: "Shipping/Online(boolean)",//state,
       productDescription: "Tasty",
       price: 35,    //"₥35" //all AWS dynamo DB needs strings
 },
 ReturnConsumedCapacity: "TOTAL", 
 TableName: "Listings"
};
  const createProduct = async () => {
        //TODO abstract this response into next api folder for additional security
    const response = await axios.post(apiEndP, 
    { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-api-key' : apiKey,
        //'Access-Control-Request-Methods': 'POST, ANY, OPTIONS'  ,
        //'Origin': 'http://localhost:3000/',
        
        //'Access-Control-Request-Headers': 'Content-Type, Authorization, X-Requested-With' , 
        
        //'Access-Control-Allow-Credentials' : true ,
       

      },
      body: JSON.stringify(params)
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log('response', response);
  }

  return {
    // getProducts,
    createProduct
  }
};


// this is for another part, you know ;p

var params = {
  Item: {
   "AlbumTitle": {
     S: "Somewhat Famous"
    }, 
   "Artist": {
     S: "No One You Know"
    }, 
   "SongTitle": {
     S: "Call Me Today"
    }
  }, 
  ReturnConsumedCapacity: "TOTAL", 
  TableName: "Music"
 };

 type CreateProductBody = {
  Item: Item;
  ReturnConsumedCapacity: string;
  TableName: string;
}

type Item = {
  AlbumTitle: AlbumTitle;
  Artist: AlbumTitle;
  SongTitle: AlbumTitle;
}

type AlbumTitle = {
  S: string;
}

// productID: {
//   S:' productKey'},
// key: {
// S: 'productKey'}
// ,
// productName:{ "CopyMeme"},
// contactHereToPurchase:{S: `Contact shael to purchase`},
// shippingOnline: {S: "Shipping/Online(boolean)"},//stateful,
// productDescription:{S: "Copywriting/MemeMaking"},
// price:{N: 25} ,  //"₥25"
// },
// ReturnConsumedCapacity: "TOTAL", 
// TableName: "Listings"}