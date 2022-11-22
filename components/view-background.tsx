import type { NextPage } from "next";
import { Button, Icon } from "@mui/material";

const ViewBackground: NextPage = () => {
  return (
    <div className="self-stretch flex-1 bg-blue flex flex-col items-start justify-start text-left text-xl text-black font-eb-garamond">
      <div className="self-stretch flex-1 bg-gray-300 flex flex-row p-[10px] box-border items-center justify-center">
        <div className="self-stretch flex-1 bg-gray-100 flex flex-col p-[20px_20px_48px] box-border items-center justify-start gap-[10px]">
          <div className="flex flex-col items-center justify-start gap-[13px]">
            <div className="relative inline-block w-[196px] h-[41px] shrink-0">
              ADA Donors,
            </div>
            <p className="m-[0] relative text-lg whitespace-pre-wrap text-center inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                You may donate ADA in any amount with any wallet of your choice
                at
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                &nbsp;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`$MutualAid  `}</p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                $MutualAidDAO
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                $MADAO
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                or at our Shelley address
              </p>
              <p className="m-[0]">wihjgsdigsdi</p>
            </p>
          </div>
          <Button
            variant="contained"
            color="primary"
            href="https://pool.pm/$mutualaid"
          >
            Check Out our Pool.pm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewBackground;
