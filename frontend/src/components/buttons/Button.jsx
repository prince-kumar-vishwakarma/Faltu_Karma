import React from "react";
import "./Button.css"


const Button = (probs) => {
  return (
    <div>
      <button  className="button" type="button">{probs.name}</button>
    </div>
  )
}

export default Button
