import React from "react";

const style = {
  background: "lightblue",
  border: "1px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  borderRadius: "5px",
};
//Destructuring the props
const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);
export default Square;
