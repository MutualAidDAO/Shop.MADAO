import type { NextPage } from "next";
import { useEffect } from "react";
import { Button, Icon } from "@mui/material";

const Navbar: NextPage = () => {
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
    <nav className="self-stretch bg-turquoise flex flex-row items-start justify-start gap-[0px] lg:flex-col lg:gap-[30]">
      <div className="relative bg-turquoise w-[381px] h-[104px] shrink-0">
        <Button
          className="absolute top-[10px] left-[212px]"
          sx={{ width: 169 }}
          variant="contained"
          color="primary"
          size="small"
          endIcon={<Icon>arrow_forward_ios_sharp</Icon>}
        >
          No Wallet? Get one
        </Button>
        <Button
          className="absolute top-[10px] left-[37px]"
          sx={{ width: 109 }}
          variant="outlined"
          color="primary"
          size="small"
        >
          Connect Wallet
        </Button>
        <div className="absolute top-[69px] left-[66px] bg-gray-100 w-[274px] h-[34px] flex flex-row items-end justify-center gap-[122px] sm:w-[246px]">
          <p className="m-[0] relative text-lg font-eb-garamond text-white text-right flex items-end w-[60px] h-[23px] shrink-0">
            ₳~~
          </p>
          <p className="m-[0] relative text-lg font-eb-garamond text-white text-left inline-block">
            ₥~~~
          </p>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-turquoise flex flex-row p-[10px_202px_10px_70px] box-border items-center justify-start gap-[30px] lg:pl-[5rem] lg:pr-[5rem] lg:box-border lg:flex-[unset] lg:self-stretch md:w-full md:h-[10%] md:flex-col md:gap-[0] sm:flex-col sm:pt-[10px] sm:pb-[10px] sm:box-border mq650:flex-col">
        <img
          className="relative w-[94px] h-[93px] shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_both_roll-in-left] opacity-[1]"
          alt=""
          src="../madaodog-1@2x.png"
          data-animate-on-scroll
        />
        <div className="flex flex-row items-center justify-start gap-[30px] sm:flex-col mq650:flex-col">
          <Button
            sx={{ width: 240 }}
            variant="outlined"
            color="success"
            size="large"
            href="/"
            endIcon={<Icon>lock_sharp</Icon>}
          >
            Buy
          </Button>
          <Button
            sx={{ width: 201 }}
            variant="outlined"
            color="success"
            size="large"
            href="/sell-page"
            endIcon={<Icon>send_sharp</Icon>}
          >
            Sell
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
