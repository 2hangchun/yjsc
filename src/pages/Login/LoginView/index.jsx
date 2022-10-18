import React, { useState } from "react";
import classes from "./style.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { createAxiosByInterceptors } from "@/api/request";
import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";
import { useNavigate } from "react-router-dom";
import { validatorInput } from "@/utils/validator";

function LoginView() {
  const [telephone, setTelephone] = useState("");
  const [verification, setVerification] = useState("");
  const [errorInfo, setErrorInfo] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    const { isValid, err } = validatorInput({
      telephone,
      verification,
    });
    if (isValid) {
      setErrorInfo(err);
    } else {
      http();
    }
  };
  const http = () => {
    const request = createAxiosByInterceptors({});
    request
      .post("/login", {
        params: {
          telephone,
          verification,
        },
      })
      .then((res) => {
        dispatch(
          login({
            ...res,
          })
        );
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submit}>
      <div id={classes["login-container"]}>
        <div
          className={`${classes["input-container"]} ${
            classes["phone-container"]
          } ${errorInfo.telephone ? classes.error : ""}`}
        >
          <FontAwesomeIcon icon={faMobileScreenButton} color={"#ff5555"} />
          <input
            placeholder="请输入手机号"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        {errorInfo.telephone && (
          <span className={classes["error-msg"]}>{errorInfo.telephone}</span>
        )}
        <div
          className={`${classes["input-container"]} ${
            classes["password-container"]
          } ${errorInfo.verification ? classes.error : ""}`}
        >
          <FontAwesomeIcon icon={faEnvelope} color={"#ff5555"} />
          <input
            type="text"
            placeholder="输入验证码"
            value={verification}
            onChange={(e) => setVerification(e.target.value)}
          />
          <button>发送验证码</button>
        </div>
        {errorInfo.verification && (
          <span className={classes["error-msg"]}>{errorInfo.verification}</span>
        )}

        <button className={classes["btn-login"]}>登录</button>
      </div>
    </form>
  );
}

export default LoginView;
