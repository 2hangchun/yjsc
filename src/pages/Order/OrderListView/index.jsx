import React from "react";
import Item from "./Item";

function OrderListView(props) {
  const data = props.data;
  console.log(data);
  return (
    <div>
      {data.map((item, index) => {
        return <Item data={item} key={index} />;
      })}
    </div>
  );
}

export default OrderListView;
