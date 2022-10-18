import React, { useEffect, useState } from "react";
import DetailsHeader from "@/components/PubHeader";
import Swiper from "@/components/Swiper";
import classes from "./style.module.less";
import { loadImageAsync } from "@/utils/loadImageAsync";
import defaultImage from "@/assets/images/default.png";
import BuyAndStore from "../BuyAndStore";
import Tabs from "@/components/Tabs";
import Comment from "../Comment";

function DetailsView(props) {
  const detailsData = props.detailsData;
  const [images, setImages] = useState([defaultImage]);

  useEffect(() => {
    const loadImages = detailsData.imgs.map((item) => {
      return loadImageAsync(item);
    });
    Promise.all(loadImages).then((res) => setImages(res));
    return () => {
      setImages([defaultImage]);
    };
  }, []);
  return (
    <div>
      <DetailsHeader title="详情页" />
      <Swiper bannerList={images} />
      <Tabs>
        <div category="详情">
          <div className={classes["details-info"]}>
            <h3>{detailsData.title}</h3>
            <div className={classes.box}>
              <ul>
                <li>
                  <span>{detailsData.price} 元/月</span>
                  <p>租金</p>
                </li>
                <li>
                  <span>{detailsData.info.type}</span>
                  <p>房屋类型</p>
                </li>
                <li>
                  <span>{detailsData.houseType}</span>
                  <p>面积</p>
                </li>
              </ul>
            </div>
            <div className={classes.info}>
              <div className={classes["info-list"]}>
                <p>楼层：{detailsData.info.level}</p>
                <p>装修：{detailsData.info.style}</p>
              </div>
              <div className={classes["info-list"]}>
                <p>类型：{detailsData.info.type}</p>
                <p>朝向：{detailsData.info.orientation}</p>
              </div>
              <div className={classes["info-list"]}>
                <p>年代：{detailsData.info.year}</p>
              </div>
            </div>
          </div>
          <BuyAndStore isStore={detailsData.isStore} />
        </div>
        <div category="评价">
          <Comment id={detailsData.id} />
        </div>
      </Tabs>
    </div>
  );
}

export default DetailsView;
