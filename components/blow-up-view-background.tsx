import type { NextPage } from "next";
import BlowUpBackground from "../components/blow-up-background";

const BlowUpViewBackground: NextPage = (props) => {

  const listingContent = props.listingContent

  return (
    <div className="self-stretch flex-1 bg-blue flex flex-col items-start justify-start text-left text-lg text-black font-eb-garamond">
      <div className="self-stretch flex-1 bg-gray-300 flex flex-row p-[10px] box-border items-start justify-start">
        <BlowUpBackground ListedContent={listingContent} />
      </div>
    </div>
  );
};

export default BlowUpViewBackground;
