import React from "react";
import Item from "./Item";
import classes from "./style.module.less";

function SearchListView(props) {
  return (
    <div className={classes.container}>
      {props.search.map((item) => {
        return <Item key={item.id} data={item} />;
      })}
    </div>
  );
}

export default SearchListView;
