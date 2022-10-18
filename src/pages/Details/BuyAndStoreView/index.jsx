import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.less";

function BuyAndStoreView(props) {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const [isStore, setIsStore] = useState(token && props.isStore);
  const store = () => {
    if (token) {
      // 这里应该发送请求，请求成功后更新state
      setIsStore(true);
    } else {
      navigate("/login");
    }
  };
  const cancelStore = () => {
    // 这里应该发送请求，请求成功后更新state
    setIsStore(false);
  };
  return (
    <div className={classes["buy-store-container"]}>
      <div className={classes["item-container"]}>
        {isStore ? (
          <button className={classes.selected} onClick={cancelStore}>
            已收藏
          </button>
        ) : (
          <button className={classes.selected} onClick={store}>
            收藏
          </button>
        )}
      </div>
      <div className={classes["item-container"]}>
        <button>购买</button>
      </div>
    </div>
  );
}

export default BuyAndStoreView;
