import React, { useState } from "react";
import classes from "./style.module.less";

function Tabs(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const toggle = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <ul className={classes.container}>
        {React.Children.map(props.children, (child, index) => {
          return (
            <li
              className={`${classes.category} ${
                index === currentIndex ? classes.active : null
              }`}
              onClick={() => toggle(index)}
            >
              {child.props.category}
            </li>
          );
        })}
      </ul>
      {React.Children.map(props.children, (element, index) => {
        return <>{currentIndex === index ? element : null}</>;
      })}
    </div>
  );
}

export default Tabs;
