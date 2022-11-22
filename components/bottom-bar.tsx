import type { NextPage } from "next";
import { Button } from "@mui/material";

const BottomBar: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-200 flex flex-col p-[14px_22px_37px] box-border items-start justify-start gap-[0px] text-left text-sm text-black font-eb-garamond">
      <div className="relative tracking-[0.4px] leading-[24px] uppercase inline-block">
        Quick Start here
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[26px] text-base text-white lg:flex-col">
        <div className="w-[661px] shrink-0 flex flex-row items-start justify-between md:flex-col md:gap-[26px]">
          <Button
            className="relative"
            sx={{ width: 153 }}
            variant="contained"
            color="success"
            size="large"
            href="/faq-page"
          >
            FAQ
          </Button>
          <Button
            className="relative"
            sx={{ width: 228 }}
            variant="contained"
            color="success"
            size="large"
            href="/ada-donors"
          >
            ADA Donors
          </Button>
          <Button
            className="relative"
            sx={{ width: 228 }}
            variant="contained"
            color="success"
            size="large"
            href="https://buy.stripe.com/aEU17l7Nr1qXgdqeUV"
          >
            Fiat DONORS
          </Button>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px] lg:flex-col md:flex">
          <div className="flex flex-row items-end justify-start md:flex-col sm:w-[400px]">
            <div className="relative inline-block w-[418px] shrink-0">
              Supported by contributions from Users like you. Thank You!
            </div>
          </div>
          <Button
            className="relative"
            sx={{ width: 228 }}
            variant="contained"
            color="success"
          >
            MADAO WIKI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
