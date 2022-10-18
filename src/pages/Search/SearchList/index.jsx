import React, { useState, useEffect } from "react";
import SearchListView from "../SearchListView";
import { createAxiosByInterceptors } from "@/api/request";
import LoadMore from "@/components/LoadMore";
import classes from "./style.module.less";

function SearchList(props) {
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const http1 = () => {
    const request = createAxiosByInterceptors();
    request
      .get("/search", {
        params: {
          search: props.search,
        },
      })
      .then((res) => {
        // setSearchData(searchData.concat(res.data));
        setSearchData((pre) => pre.concat(res.data));
        setHasMore(res.hasMore);
      })
      .catch((err) => console.log(err));
  };

  const http2 = () => {
    const request = createAxiosByInterceptors();
    request
      .get("/search", {
        params: {
          search: props.search,
        },
      })
      .then((res) => {
        // setSearchData(searchData.concat(res.data));
        setSearchData(res.data);
        setHasMore(res.hasMore);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    http2();
    return () => {
      setSearchData([]);
      setHasMore(false);
    };
  }, [props.search]);

  return (
    <div>
      {searchData.length > 0 ? (
        <SearchListView search={searchData} />
      ) : (
        <h3>等待数据加载</h3>
      )}
      {hasMore ? (
        <LoadMore loadMore={http1} />
      ) : (
        <p className={classes["no-more-data"]}>———————— 已经到底了 ————————</p>
      )}
    </div>
  );
}

export default SearchList;
