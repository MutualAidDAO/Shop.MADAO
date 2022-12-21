import { useCallback, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import {
  TextField,
  FormControlLabel,
  Radio,
  Icon,
  IconButton,
  Switch,
} from "@mui/material";
import useShop from "../hooks/useShop";
import { useForm } from "react-hook-form";


//----------------------------------------------------------------------------------------------


type ListingType = {
  
  listing?: string;
  price?: string;
  
 
      Contact?: string,
      shipping?: string|undefined,
      Online?: boolean,
      proDesc?: string,
      image?: Blob;
    }
const {createProduct}=useShop()

const ListingForm: NextPage = () => {
  const [shippingToggle, setShippingToggle] = useState(true);



  // const priceRef = useRef(null);
  // const listingRef = useRef(null);
  // const OnlineRef = useRef(null);

  // const ContactRef = useRef(null);
  // const shippingRef = useRef(null);
  // const DescRef = useRef(null);
  // const imageRef = useRef(null);



  //---------------Helper consts above------------

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const reader = new FileReader();

  const imgBlobber = async () => {
    const imgBlob = new Blob([reader.result], { type:
"image/png" });
await register("Blob", { value: imgBlob });
};

reader.onload = imgBlobber;
 
  const submitHandler = (event) => {
   event.preventDefault()
  
     
     

    
      
      
      
      
      
        
      //imgBlobber();
    
      
    

    const price = watch("priceRef");
    const listing =
      watch("listingRef") +
      "ID" +
      (Math.random() * 10000).toFixed(0) +
      "Date" +
      (Date.now() / (1000 * 60 * 60 * 24 * 7)).toFixed(0);
    const Contact = watch("ContactRef");
    const shipping = watch("shippingRef");
    const Online = watch("OnlineRef");
    const proDesc= watch("DescRef");
    const productImage = watch("Blob")
     
      console.log(productImage)
    const ListedData = {
      listing,
      productImage,
      Contact,
      shipping,
      Online,
      proDesc,
      price,
    };

    if (JSON.stringify(ListedData).length < 390 * 1024) {
      return createProduct(ListedData);
    } else {
      console.log(
        "toast error about size requirements",
        JSON.stringify(ListedData).length
      );
    }}
    

  // useEffect(() =>{
  //   imgBlobber()
  // },[])
  
  return (
    <form className="self-stretch bg-gray-100 h-[601px] shrink-0 flex flex-col p-[29px_13px_60px] box-border items-center justify-start gap-[18px] lg:w-full md:h-[60%] md:pb-[650px] md:box-border">
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
            {...register("priceRef")}
          />{errors.priceRef && <span>This field is required</span>}
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
            {...register("listingRef")}
          />{errors.listingRef && <span>This field is required</span>}
        </div>
        <div className="relative w-[437px] h-[215px] shrink-0">
          <h4 className=" w-5/6">Max File about ~250KB '.PNG files only'</h4>
          <input
            className="absolute top-[0px] left-[0px] bg-gray-400 w-[382px] h-[60px]"
            type="file"
            //required
            
          />{errors.imageRef && <span>This field is required</span>}

          <FormControlLabel
            className="absolute top-[65px] left-[0px]"
            label="Online Service/Digital Deliverable"
            labelPlacement="end"
            control={<Switch color="primary" size="medium" />}
            // hidechild= ternarydata ? "stringdata" : true //-=----Edit to show/hide radio in data and blowUpContent for DB send
            
            {...register("OnlineRef", {onChange:()=>{ setShippingToggle(!shippingToggle)}})}
          />{errors.OnlineRef && <span>This field is required</span>}

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
            {...register("shippingRef")}
            disabled={!shippingToggle}
            required={shippingToggle}
          />{errors.shippingRef && <span>This field is required</span>}

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
            {...register("ContactRef")}
          />{errors.ContactRef && <span>This field is required</span>}
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
        {...register("DescRef")}
      />{errors.DescRef && <span>This field is required</span>}
      <IconButton
        type="submit"
        onClick={handleSubmit(submitHandler)}
        color="primary"
        className=" top-[-50px]"
        disabled={false}
      >
        <p>
          Max listing request size is 399,360 string length, about 400KB. This
          includes all characters you type in the text and your image file. Plus
          a boolean and the XML syntax that are about 90 units
        </p>
        <Icon>send_sharp</Icon>
      </IconButton>
    </form>
  )};


export default ListingForm;
