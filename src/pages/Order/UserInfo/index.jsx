import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCity } from "@fortawesome/free-solid-svg-icons";

function UserInfo() {
  const { city } = useSelector((state) => state.city);
  const { token, nick } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faUser} />
        <span>{nick}</span>
      </div>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faCity} />
        <span>{city}</span>
      </div>
    </div>
  );
}

export default UserInfo;
