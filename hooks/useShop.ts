import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
import { useSelector } from "react-redux";


//--------------------------------------------------------------------------------



type DataAWS = {
  Items: ListingData[],
  Count: number,
  ScannedCount: number,
  LastEvaluatedKey?:string
}

type ListingData = {
  shipping: string,
  Online: boolean,
  listing: string,
  price: string,
  proDesc: string,
  productImage: ProductImage,
  Contact: string,
}

type ProductImage = {}


type ReturnType = {
   getProducts: () => DataAWS;
  createProduct: (ListedData:ListingData) => void;
  getOneListing: (listing:any) => any;
}
// type productsArray = [
//   {
//     Item:Item
//   },
// ]

export default function useShop(): ReturnType {
  
 
   const apiKey = 'yHFcBOA0TL94BmUYPCdZ49zbOS0LVFBC2qxQT33V' ;
    const apiEndP = `https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery`
  




    //-----------------------------------------Helpers above--------------




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

  const getProducts = async () => {

    // setup the api call to get products
    // exicute call to get products
    // await 
    // await fetch()
    // get the data from the responce


let lastEvaluatedKey

// Set up the parameters for the DynamoDB Query operation
const param = {
  method: 'GET',

  params: {TableName: 'Listings',
   ExclusiveStartKey: lastEvaluatedKey, // use the last evaluated key for pagination
   Limit: 20 },
  headers: {
    'Content-Type': 'application/json',
    
    'x-api-key' : apiKey,
   
     'Access-Control-Allow-Origin': '*',},
    
  
};


    let response = await axios.get<DataAWS>(apiEndP, param);
    
      

  //console.log('response', response);
 
lastEvaluatedKey = response.data.LastEvaluatedKey


    console.log('Data is Here!', response.data.Items)


    // return that data(records)
    return {...response.data as DataAWS};
  }
 
  const createProduct = async (listingData:ListingData) => {
        //TODO abstract this response into next api folder for additional security

       const params:CreateProductBody = {  //DO NOT STRING; there is stringify in XML compilation. AWS dynamo DB needs strings
          Item: 
          {
             listing: listingData.listing, // must be a string with partition key of listing //required
           
            productImage: 
               listingData.productImage,
            
        
                Contact:
                  
                listingData.Contact,
                shipping: listingData.shipping ,
                
                Online: listingData.Online,//state,
                proDesc: listingData.proDesc,
                price: listingData.price,    //"₥35" This is the format to display with the Mill symbol 
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
     getProducts,
    createProduct,
    getOneListing
  }
};


// this is for another part, you know ;p
type TableName =   string;

 type CreateProductBody = {
  Item: ListingData;
  ReturnConsumedCapacity: string;
  TableName: string;
}

type Item = {
  listing: string, // must be a string with partition key of listing //required
           
            productImage: 
               null | Blob,
          
                Contact: string,
                shipping: string | null,//state,
                Online: boolean,
                proDesc: String,
                price: number,    //"₥35" This is the format to display with the Mill symbol 
          };




// productID: {
//   S:' productKey'},
// key: {
// S: 'productKey'}
// ,
// productName:{ "CopyMeme"},
// Contact:{S: `Contact shael to purchase`},
// shippingOnline: {S: "Shipping/Online(boolean)"},//stateful,
// proDesc:{S: "Copywriting/MemeMaking"},
// price:{N: 25} ,  //"₥25"
// },
// ReturnConsumedCapacity: "TOTAL", 
// TableName: "Listings"}