import React from "react";
import "./Card.css";

interface IPROPS{
  character: string
}
function Card({character}: IPROPS) {
 
  return (
    <div className="card">
      <h1 className={character === "O" ? "red-sign" : "blue-sign"}>
        {character}
      </h1>
    </div>
  )
}

export default Card;
