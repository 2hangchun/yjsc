import React, { useEffect, useState } from "react";
import classes from "./style.module.less";
import { loadImageAsync } from "@/utils/loadImageAsync";
import defaultImage from "@/assets/images/default.png";
import { Link } from "react-router-dom";

function Item(props) {
  const item = props.data;
  const [image, setImage] = useState(defaultImage);

  useEffect(() => {
    loadImageAsync(item.img)
      .then((res) => setImage(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes["list-item"]}>
      <Link to={`/details/${item.id}`}>
        <img src={image} alt="" />
        <div className={classes.mask}>
          <div className={classes.left}>
            <p>{item.title}</p>
            <p>{item.houseType}</p>
          </div>
          <div className={classes.right}>
            <div className={classes.btn}>{item.rentType}</div>
            {/* dangerouslySetInnerHTML:识别标签结构 */}
            <p dangerouslySetInnerHTML={{ __html: item.price + "元/月" }} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
