import type { NextPage } from "next";
import { useEffect } from "react";
import { Icon, IconButton } from "@mui/material";
import BlowUpContent from "../components/blow-up-content";


//------------------------------------------------------------------------
const BlowUpBackground: NextPage = (props) => {



  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

    const {
    
      price: props.price,
      productID: props.productID,
    
      productName: props.productName,
      contactHereToPurchase: props.contactHereToPurchase,
      shipping: props.shipping,
      Online: props.Online,
      productDescription: props.productDescription,
      image: props.image}
  } = listingContent;


  return (
    <div className="flex-1 bg-gray-100 h-[667px] flex flex-row p-[20px_20px_48px] box-border items-start justify-start gap-[10px] text-left text-lg text-black font-eb-garamond md:flex-col sm:max-w-[100vw]">
      <BlowUpContent
        productName="Product Name"
        contactHereToPurchase={`Contact here to purchase`}
        shippingOnline="Shipping/Online(boolean)"state
        productDescription="Product Description"
        price="₥~~~"
      />
      <img
        className="self-stretch relative max-h-full w-[616px] shrink-0 object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] md:w-full md:max-h-[50%] sm:max-h-[50%] sm:max-w-full"
        alt=""
        src="../rectangle-111@2x.png"
        data-animate-on-scroll
      />
      <IconButton color="primary">
        <Icon>arrow_back_ios_sharp</Icon>
      </IconButton>
    </div>
  );
};

export default BlowUpBackground;
