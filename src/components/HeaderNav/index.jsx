import React from "react";
import classes from "./index.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "@/components/SearchInput";

function HeaderNav() {
  const { city } = useSelector((state) => state.city);
  const navigate = useNavigate();
  return (
    <div className={classes["header-nav"]}>
      <div className={classes.left} onClick={() => navigate("/city")}>
        <span>{city}</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className={classes.center}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <SearchInput />
      </div>
      <div className={classes.right}>
        <FontAwesomeIcon
          icon={faFileLines}
          onClick={() => navigate("/order")}
        />
      </div>
    </div>
  );
}

export default HeaderNav;
