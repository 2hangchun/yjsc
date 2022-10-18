import React from "react";
import classes from "./style.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Star from "@/components/Star";

function Item(props) {
  const data = props.data;
  return (
    <div className={classes["comment-item"]}>
      <h3>
        <FontAwesomeIcon icon={faUser} size="sm" />
        {data.username}
      </h3>
      <Star num={data.star} />
      <p>{data.comment}</p>
    </div>
  );
}

export default Item;
