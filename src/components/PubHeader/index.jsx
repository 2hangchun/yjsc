import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import classes from "./style.module.less";
import { useNavigate } from "react-router-dom";

function PubHeader(props) {
  const navigate = useNavigate();
  const returnBack = () => {
    navigate(-1);
    // window.history.back();
  };
  return (
    <div className={classes.header}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={classes.icon}
        size="lg"
        onClick={returnBack}
      />
      <h3>{props.title}</h3>
    </div>
  );
}

export default PubHeader;
