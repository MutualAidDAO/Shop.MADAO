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

    const response = await axios('https://09zlx4b2rl.execute-api.us-west-2.amazonaws.com/Listings/ListingQuery', 
    { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
      },
      body: JSON.stringify({
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
       })
    })

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