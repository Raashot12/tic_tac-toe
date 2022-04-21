import React from "react";
import "./Card.css";

interface IPROPS{
  character: string
}
function Card({character}: IPROPS) {
  console.log(character)
  return (
    <div className="card">
      <h1 className={character === "O" ? "redSign" : "blueSign"}>
        {character}
      </h1>
    </div>
  )
}

export default Card;