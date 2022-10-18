import React from "react";
import BuyAndStoreView from "../BuyAndStoreView";

function BuyAndStore(props) {
  return (
    <div>
      <BuyAndStoreView isStore={props.isStore} />
    </div>
  );
}

export default BuyAndStore;
