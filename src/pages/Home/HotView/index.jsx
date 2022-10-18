import React from "react";
import classes from "./style.module.less";

function HotView(props) {
  // console.log("@", props);
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{props.title}</h3>
      <ul className={classes["goods-list"]}>
        {props.data.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>
                <img src={item.imgUrl} alt="" />
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HotView;
