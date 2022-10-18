import React, { useEffect, useRef } from "react";
import classes from "./style.module.less";

function LoadMore(props) {
  const cH = document.documentElement.clientHeight;
  const lM = useRef();

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      if (lM.current.getBoundingClientRect().top < cH) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
          props.loadMore();
        }, 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      timer = null;
    };
  }, []);
  return (
    <div ref={lM} className={classes["load-more"]}>
      加载更多
    </div>
  );
}

export default LoadMore;
