import React from "react";
import classes from "./index.module.less";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faHome,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function FootNav() {
  return (
    <div className={classes["foot-nav"]}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => {
              if (isActive) {
                return `${classes["nav-link"]} ${classes.active}`;
              } else {
                return `${classes["nav-link"]}`;
              }
            }}
          >
            <FontAwesomeIcon icon={faHome} size="xl" />
            <span>首页</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shop"
            className={({ isActive }) => {
              if (isActive) {
                return `${classes["nav-link"]} ${classes.active}`;
              } else {
                return `${classes["nav-link"]}`;
              }
            }}
          >
            <FontAwesomeIcon icon={faShop} size="xl" />
            <span>商店</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/life-service"
            className={({ isActive }) => {
              if (isActive) {
                return `${classes["nav-link"]} ${classes.active}`;
              } else {
                return `${classes["nav-link"]}`;
              }
            }}
          >
            <FontAwesomeIcon icon={faGamepad} size="xl" />
            <span>生活服务</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) => {
              if (isActive) {
                return `${classes["nav-link"]} ${classes.active}`;
              } else {
                return `${classes["nav-link"]}`;
              }
            }}
          >
            <FontAwesomeIcon icon={faUser} size="xl" />
            <span>我的</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FootNav;
