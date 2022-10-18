import React from "react";
import { useSelector } from "react-redux";
import classes from "./style.module.less";

function CurrentCity(props) {
  const { city } = useSelector((state) => state.city);
  return (
    <div className={classes["current-city"]}>
      <h2>当前城市：{city}</h2>
    </div>
  );
}

export default CurrentCity;
