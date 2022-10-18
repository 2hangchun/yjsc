import React, { useEffect, useState } from "react";
import CommentView from "../CommentView";
import { createAxiosByInterceptors } from "@/api/request";
import LoadMore from "@/components/LoadMore";
import classes from "./style.module.less";

function Comment(props) {
  const [comments, setComments] = useState(null);
  const http = () => {
    const request = createAxiosByInterceptors();
    request
      .get("/comment", {
        params: {
          id: props.id,
        },
      })
      .then((res) =>
        setComments({
          hasMore: res.hasMore,
          data: comments ? [...comments.data, ...res.data] : res.data,
        })
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    http();
  }, []);

  return (
    <div>
      {comments && <CommentView comments={comments.data} />}
      {comments && comments.hasMore ? (
        <LoadMore loadMore={http} />
      ) : (
        <p className={classes["no-more-data"]}>———————— 已经到底了 ————————</p>
      )}
    </div>
  );
}

export default Comment;
