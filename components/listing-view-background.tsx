import type { NextPage } from "next";
import ListingsView from "../components/listings-view";
import { Provider } from "react-redux";
import {store} from '../store'



const ListingViewBackground: NextPage= () => {

  return (<Provider store={store}>
    <div className="self-stretch flex-1 bg-blue overflow-y-auto flex flex-col items-start justify-start text-left text-xl text-black font-eb-garamond">
      <ListingsView  />
    </div></Provider>
  );
};

export default ListingViewBackground;
