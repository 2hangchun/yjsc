import React, { useEffect } from "react";
import OrderHeader from "@/components/PubHeader";
import UserInfo from "./UserInfo";
import OrderList from "./OrderList";

function Order() {
  return (
    <div>
      <OrderHeader title="订单评价" />
      <UserInfo />
      <OrderList />
    </div>
  );
}

export default Order;
