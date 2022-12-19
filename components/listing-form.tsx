

import {useRef, useState } from "react"
import type { NextPage } from "next";
import {
  TextField,
  FormControlLabel,
  Radio,
  Icon,
  IconButton,
  Switch,
} from "@mui/material";
import {createProduct} from '../hooks/useShop'


//----------------------------------------------------------------------------------------------

const ListingForm: NextPage = () => {


  const [shippingToggle, setShippingToggle] = useState(true);
  const priceRef = useRef();
  const productIDRef = useRef();
  const OnlineRef = useRef();
  
  const contactRef = useRef();
  const shippingRef = useRef();
  const DescRef = useRef();
  const imageRef = useRef();

  //---------------Helper consts above------------

  const toggleElement = () => {
    setShippingToggle(prevState => (!prevState))};


  const submitHandler = (event) => {

   function imgBlobber () {
    const reader = new FileReader();

    reader.onload = function imgBlobber () {
      const imgBlob = new Blob([reader.result], {type: 'image/jpeg'});
      if (imgBlob.size <= 333333) {
        // The size of the blob is 333KB
        return imgBlob
      } else {
        // The size of the blob is not 333KB

        return console.log("error on imgblob")
      }
      

      
    };
    
    reader.readAsArrayBuffer(imageRef.current.value);
   }


    
    event.preventDefault();

    const price = priceRef.current.value;
    const listing = productIDRef.current.value + "ID" + (Math.random() * 10000).toFixed(0) + "Date" + (Date.now()/1000000).toFixed(0);
    
    
    const contactHereToPurchase = contactRef.current.value;
    const shipping = shippingRef.current.value;
    const Online = OnlineRef.current.value;
    const productDescription = DescRef.current.value;
    const productImage = imgBlobber() ;

    const ListedData = {
      
  listing,
  productImage,
  contactHereToPurchase,
  shipping,
  Online,
  productDescription,
  
  price,
    };
    createProduct(ListedData);
   
  }

  
    
  
  
  
  
  return (
    <form onSubmit={submitHandler} className="self-stretch bg-gray-100 h-[601px] shrink-0 flex flex-col p-[29px_13px_60px] box-border items-center justify-start gap-[18px] lg:w-full md:h-[60%] md:pb-[650px] md:box-border">
      <div className="self-stretch flex flex-row items-start justify-start gap-[705px] lg:w-full lg:gap-[25%] md:w-full md:flex-col md:pl-[0px] md:pt-[0px] md:box-border md:gap-[15px]">
        <div className="relative w-[251px] h-[155px] shrink-0">
          <TextField
            className="[border:none] bg-[transparent] absolute top-[101px] left-[0px]"
            sx={{ width: 251 }}
            color="primary"
            variant="outlined"
            type="number"
            label="₥Price"
            size="medium"
            margin="none"
            required
            ref={priceRef}
          />
          <TextField
            className="[border:none] bg-[transparent] absolute top-[0px] left-[0px]"
            sx={{ width: 251 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            size="medium"
            margin="none"
            required
            ref={productIDRef}
          />
        </div>
        <div className="relative w-[437px] h-[215px] shrink-0">

        <input
            className="absolute top-[0px] left-[0px] bg-gray-400 w-[382px] h-[47px]"
            type="file"
            //required
            ref={imageRef}
          />
            
          <FormControlLabel
            className="absolute top-[65px] left-[0px]"
            label="Online Service/Digital Deliverable"
            labelPlacement="end"
            control={<Switch color="primary" size="medium" />}
           // hidechild= ternarydata ? "stringdata" : true //-=----Edit to show/hide radio in data and blowUpContent for DB send
            onChange={toggleElement}
           ref={OnlineRef}
          />
              
            
            <TextField
            className="[border:none] bg-[transparent] absolute top-[112px] left-[0px]"
            sx={{ width: 382 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Shipping Costs"
            placeholder="Shipping Costs"
            size="medium"
            margin="none"
            ref={shippingRef}
            disabled={!shippingToggle}
            required={shippingToggle}
            
          /> 
          
          
          
            
          <TextField
            className="[border:none] bg-[transparent] absolute top-[173px] left-[0px]"
            sx={{ width: 382 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Contact Email/Discord Handle"
            placeholder="Contact Email/Discord Handle"
            size="medium"
            margin="none"
            required
            ref={contactRef}
          />
        </div>
      </div>
      <TextField
        className="self-stretch flex-1 relative"
        color="primary"
        variant="outlined"
        multiline
        minRows={8}
        maxRows={12}
        label="Product Description"
        placeholder="Product Description"
        margin="dense"
        required
        ref={DescRef}
      />
      <IconButton color="primary" disabled  >
        <Icon>send_sharp</Icon>
      </IconButton>
    </form>
  );
};

export default ListingForm;
