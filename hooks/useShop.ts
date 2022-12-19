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
 
  const createProduct = async (ListedData:Item) => {
        //TODO abstract this response into next api folder for additional security

       const params:CreateProductBody = {  //DO NOT STRING; there is stringify in XML compilation. AWS dynamo DB needs strings
          Item: 
          {
             listing: ListedData.listing, // must be a string with partition key of listing //required
           
            productImage: 
               ListedData.productImage,
            
        
                contactHereToPurchase:
                  
                ListedData.contactHereToPurchase,
                shipping: ListedData.shipping ,
                
                Online: ListedData.Online,//state,
                productDescription: ListedData.productDescription,
                price: ListedData.price,    //"₥35" This is the format to display with the Mill symbol 
          },
          ReturnConsumedCapacity: "TOTAL", 
          TableName: "Listings"
         };


    const response = await axios.post(apiEndP, params,
    { 
      // method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        
        'x-api-key' : apiKey,
       
         'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials' : true ,
        //Depricated Headers
        //'Access-Control-Request-Methods': 'POST, ANY, OPTIONS'  ,
        //'Origin': 'http://localhost:3000/',
        // 'Access-Control-Request-Headers': 'Content-Type,X-Amz-Date,Access-Control-Allow-Origin,Authorization,X-Api-Key,X-Amz-Security-Token' , 

      },
      
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
type TableName =   string;

 type CreateProductBody = {
  Item: Item;
  ReturnConsumedCapacity: string;
  TableName: string;
}

type Item = {
  listing: string, // must be a string with partition key of listing //required
           
            productImage: 
               null | Blob,
          
                contactHereToPurchase: string,
                shipping: string | null,//state,
                Online: boolean,
                productDescription: String,
                price: number,    //"₥35" This is the format to display with the Mill symbol 
          };



          // var paras = {
          //   Item: {
          //    "AlbumTitle": "Somewhat Famous", 
          //    "Artist": "No One You Know", 
          //    "SongTitle":  "Call Me Today"
              
          //   }, 
          //   ReturnConsumedCapacity: "TOTAL", 
          //   TableName: "Music"
          //  };


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