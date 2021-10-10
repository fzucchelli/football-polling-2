import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { updateField, updateHowManyPlayerVotedField } from "./Firebase.js";

function Rating(props) {
  const [rating, setRating] = useState(0);
  const [hoverTempRating, setHoverTempRating] = useState(0);

  function sendRating(value) {
    setRating(value);
    updateField({ name: "Frank", rate: value });
    updateHowManyPlayerVotedField("Frank");
  }

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const value = index + 1;

        return (
          <>
            <input className="star" type="radio" value={value} />
            <FaStar
              color={
                value <= (hoverTempRating || rating) ? "#fdcb6e" : "#dfe6e9"
              }
              size={35}
              onClick={() => sendRating(value)}
              onMouseEnter={() => setHoverTempRating(value)}
              onMouseLeave={() => setHoverTempRating(0)}
            />
          </>
        );
      })}
    </div>
  );
}

export default Rating;
