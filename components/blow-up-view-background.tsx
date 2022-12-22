import type { NextPage } from "next";
import { Provider } from "react-redux";
import BlowUpBackground from "../components/blow-up-background";
import { store } from "../store";



//--------------------------------------------------------------------------------------------------------



const BlowUpViewBackground: NextPage = (Listing) => {

  

  return ( <Provider store={store} >
    <div className="self-stretch flex-1 bg-blue flex flex-col items-start justify-start text-left text-lg text-black font-eb-garamond">
      <div className="self-stretch flex-1 bg-gray-300 flex flex-row p-[10px] box-border items-start justify-start">
        <BlowUpBackground Listing={Listing} />
      </div>
    </div></Provider>
  );
};

export default BlowUpViewBackground;
