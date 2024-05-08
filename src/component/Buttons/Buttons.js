import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div>
      <button className="btn px-6 py-2 bg-slate-600 rounded-lg" onClick={props.btfun}>
        {props.btnName}{" "}
      </button>
    </div>
  );
};

export default Buttons;
