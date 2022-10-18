import React, { useState } from "react";
import classes from "./style.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function SearchHeader() {
  const [keyword, setKeyword] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const returnBack = () => {
    navigate(-1);
  };
  const search = (e) => {
    if (keyword.trim() && e.keyCode == 13) {
      navigate("/search/" + keyword);
    }
    return;
  };

  useEffect(() => {
    setKeyword(params.keyword);
  }, [params.keyword]);

  return (
    <div className={classes.header}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={classes.icon}
        size="lg"
        onClick={returnBack}
      />
      <div className={classes["input-container"]}>
        <input
          type="text"
          onKeyUp={search}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

export default SearchHeader;
