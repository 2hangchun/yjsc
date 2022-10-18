import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.less";

function SearchInput() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const search = (e) => {
    if (keyword.trim() && e.keyCode === 13) {
      navigate("search/" + keyword);
    }
  };
  return (
    <input
      type="text"
      className={classes["search-input"]}
      onKeyUp={search}
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchInput;
