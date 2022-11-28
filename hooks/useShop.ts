import axios from "axios";


type ReturnType = {
  // getProducts: () => any[];
  createProduct: () => void;
}

export default function useShop(): ReturnType {

  const config = {
    apiKey: 'yHFcBOA0TL94BmUYPCdZ49zbOS0LVFBC2qxQT33V' ,
    apiEndP: 'https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery'
  }

  const getProducts = async () => {

    // setup the api call to get products
    // exicute call to get products
    // await 
    // await fetch()
    // get the data from the responce


    // return that data(records)
    return [];
  }

  const createProduct = async () => {
        //TODO abstract this response into next api folder for additional security
    const response = await axios.post('https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery', 
    { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000/',
        'Access-Control-Request-Methods': 'POST, ANY, OPTIONS'  ,
        'Access-Control-Request-Headers': 'Content-Type, Authorization, X-Requested-With' , 
        'Access-Control-Allow-Credentials' : true ,

      },
      body: JSON.stringify({
        Item: 
        {
          productID: {
            S:' productKey'},
         key: {
         S: 'productKey'}
          ,
          productName:{
            S: "Kai's Kitchen"},
              contactHereToPurchase:{
                S:
              `Contact Kai to purchase`},
              shippingOnline:{ S: "Shipping/Online(boolean)"},//state,
              productDescription:{ S: "Tasty"},
              price: {N: 35},    //"₥35"
        }
        // {
        //  "AlbumTitle": {
        //    S: "Somewhat Famous"
        //   }, 
        //  "Artist": {
        //    S: "No One You Know"
        //   }, 
        //  "SongTitle": {
        //    S: "Call Me Today"
        //   }
        // }, 
        ,
        ReturnConsumedCapacity: "TOTAL", 
        TableName: "Listings"
       })
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