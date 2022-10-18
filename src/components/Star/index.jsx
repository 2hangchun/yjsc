import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star(props) {
  const num = props.num;
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return item <= num ? (
          <FontAwesomeIcon icon={faStar} color="#f6c843" key={index} />
        ) : (
          <FontAwesomeIcon icon={faStar} color="#ccc" key={index} />
        );
      })}
    </div>
  );
}

export default Star;
