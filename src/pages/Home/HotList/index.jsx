import React, { useEffect, useState } from "react";
import HotView from "../HotView";
import { createAxiosByInterceptors } from "@/api/request";
import { useSelector } from "react-redux";

function HotList() {
  const { city } = useSelector((state) => state.city);
  const [hot1List, setHot1List] = useState([]);
  const [hot2List, setHot2List] = useState([]);
  useEffect(() => {
    const request = createAxiosByInterceptors();
    request
      .post("/hot1", {
        params: {
          city,
        },
      })
      .then((res) => setHot1List(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const request = createAxiosByInterceptors();
    request
      .post("/hot2", {
        params: {
          city,
        },
      })
      .then((res) => setHot2List(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {hot1List.length > 0 && <HotView data={hot1List} title="⎪ 热门商品 ⎪" />}
      {hot2List.length > 0 && <HotView data={hot2List} title="⎪ 新品推荐 ⎪" />}
    </div>
  );
}

export default HotList;
