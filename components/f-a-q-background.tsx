import type { NextPage } from "next";
import { useEffect } from "react";
import FaqContent from "../components/faq-content";

const FAQBackground: NextPage = () => {
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
    <div className="self-stretch flex-1 bg-blue flex flex-col items-center justify-center">
      <div className="self-stretch flex-1 bg-gray-300 flex flex-row p-[10px] box-border items-center justify-center">
        <div className="self-stretch flex-1 bg-gray-100 flex flex-row p-[20px_20px_48px] box-border items-start justify-center relative gap-[10px]">
          <FaqContent />
          <img
            className="absolute m-[0_!important] right-[0px] bottom-[0px] w-[251px] h-[52px] shrink-0 object-cover [&.animate]:animate-[1s_ease_0s_1_reverse_forwards_flip-horizontal-bottom] opacity-[1] z-[1]"
            alt="AI assisted by Locofy plugin"
            src="../locofyBadge@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
    </div>
  );
};

export default FAQBackground;
