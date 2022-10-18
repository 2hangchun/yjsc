import React, { useEffect, useState } from "react";
import classes from "./style.module.less";
import defaultImg from "@/assets/images/default.png";
import { loadImageAsync } from "@/utils/loadImageAsync";
import { createAxiosByInterceptors } from "@/api/request";
import { useSelector } from "react-redux";

function Item(props) {
  const data = props.data;
  const [value, setValue] = useState("");
  const [currentCommentState, setCurrentCommentState] = useState(
    data.commentState
  );
  const [image, setImage] = useState(defaultImg);
  const { nick } = useSelector((state) => state.user);
  const handleClick = () => {
    setCurrentCommentState(1);
  };
  useEffect(() => {
    loadImageAsync(data.img)
      .then((res) => {
        setImage(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const http = () => {
    const request = createAxiosByInterceptors();
    return request;
  };

  const submit = () => {
    console.log(value);
    http()
      .post("/order/submit/comment", {
        params: {
          id: data.id,
          username: nick,
          comment: value,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setCurrentCommentState(2);
        } else {
          setCurrentCommentState(0);
        }
      });
  };

  const cancel = () => {
    setCurrentCommentState(0);
  };

  return (
    <>
      <div className={classes.item}>
        <div className={classes.img}>
          <img src={image} alt="" />
        </div>
        <div className={classes.content}>
          <span>商户: {data.title}</span>
          <span>类型: {data.houseType}</span>
          <span>价格: {data.price}</span>
        </div>
        <div className={classes.operate}>
          {currentCommentState === 0 ? (
            <button className={classes.not} onClick={handleClick}>
              评价
            </button>
          ) : currentCommentState === 1 ? null : (
            <button className={classes.done} disabled>
              已评价
            </button>
          )}
        </div>
      </div>
      {currentCommentState === 1 ? (
        <div className={classes.comment}>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <div>
            <button className={classes.submit} onClick={submit}>
              提交
            </button>
            <button onClick={cancel}>取消</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Item;
