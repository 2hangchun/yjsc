import React, { useEffect, useState } from "react";
import DetailsView from "../DetailsView";
import { createAxiosByInterceptors } from "@/api/request";

function DetailsList(props) {
  const [detailsData, setDetailsData] = useState({});
  const http = () => {
    const request = createAxiosByInterceptors();
    request
      .get("/details", {
        params: {
          id: props.id,
        },
      })
      .then((res) => {
        setDetailsData(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    http();
    return () => {
      setDetailsData({});
    };
  }, []);
  return (
    <div>
      {detailsData.imgs ? <DetailsView detailsData={detailsData} /> : null}
    </div>
  );
}

export default DetailsList;
