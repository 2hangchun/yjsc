import React from "react";
import Item from "./Item";

function CommentView(props) {
  const comments = props.comments;
  console.log("comments", comments);
  return (
    <div>
      <ul>
        {comments.map((item, index) => {
          return (
            <li key={index}>
              <Item data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentView;
