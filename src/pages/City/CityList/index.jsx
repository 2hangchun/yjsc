import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.less";
import { changeCity } from "@/store/citySlice";

const Cities = [
  "北京",
  "天津",
  "上海",
  "重庆",
  "香港",
  "澳门",
  "石家庄",
  "太原",
  "沈阳",
  "长春",
  "哈尔滨",
  "南京",
  "杭州",
  "合肥",
  "福州",
  "南昌",
  "济南",
  "郑州",
  "广州",
  "长沙",
  "武汉",
  "海口",
  "成都",
  "贵阳",
  "昆明",
  "西安",
  "兰州",
  "西宁",
  "台北",
  "呼和浩特",
  "南宁",
  "拉萨",
  "银川",
  "乌鲁木齐",
];

function CityList(props) {
  const { city } = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chooseCity = (e) => {
    const selected = e.target.innerText;
    // props.changeCity(selected);
    dispatch(changeCity(selected));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className={classes["city-list-container"]}>
      <h3>热门城市</h3>
      <ul className={classes["city-list"]}>
        {Cities.map((c, index) => {
          return (
            <li
              key={index}
              onClick={chooseCity}
              className={c == city ? classes.active : ""}
            >
              {c}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CityList;
