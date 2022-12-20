import type { NextPage } from "next";
import { useEffect } from "react";

type ListingContentType = {
  listingImage?: Blob;
  productName?: string;
  price?: string;
};

const ListingContent: NextPage<ListingContentType> = (ListingsContent:{
  listingImage,
  productName,
  price,
}) => {

  
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

  return (
    <div className="flex flex-col items-start justify-start gap-[13px] text-left text-xl text-black font-eb-garamond md:w-full">
      <img
        className="relative w-[199px] h-[108px] shrink-0 object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] md:w-full"
        alt=""
        src={listingImage}
        data-animate-on-scroll
      />
      <div className="relative inline-block w-[196px] h-[41px] shrink-0">
        {productName}
      </div>
      <p className="m-[0] relative text-lg inline-block">{price}</p>
    </div>
  );
};

export default ListingContent;
