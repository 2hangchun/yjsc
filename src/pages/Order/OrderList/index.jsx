import React, { useEffect, useState } from "react";
import { createAxiosByInterceptors } from "@/api/request";
import { useSelector } from "react-redux";
import OrderListView from "../OrderListView";

function OrderList() {
  const { nick } = useSelector((state) => state.user);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const request = createAxiosByInterceptors();
    request
      .get("/order/comment", {
        params: {
          username: nick,
        },
      })
      .then((res) => setOrderList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {orderList.length > 0 ? <OrderListView data={orderList} /> : null}
    </div>
  );
}

export default OrderList;
