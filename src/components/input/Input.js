import React, { useState } from "react";
import "./styles.css";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="inputHolder"
      className={"inputHolder " + props.width}
      style={{ width: props.width }}
    >
      <textarea
        maxLength={props.maxlength}
        rows={props.rows}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.setmyvalue(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
