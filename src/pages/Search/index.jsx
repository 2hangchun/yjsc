import React from "react";
import { useParams } from "react-router-dom";
import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";

function Search() {
  const params = useParams();
  return (
    <div>
      <SearchHeader />
      <SearchList search={params.keyword} />
    </div>
  );
}

export default Search;
