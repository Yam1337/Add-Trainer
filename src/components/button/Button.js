import React, { useState, useEffect, ReactFragment } from "react";
import "./styles.css";

function Button(props) {
  const [buttonState, setButtonState] = useState("buttonEnabled");
  useEffect(() => {
    if (props.disabled === true) {
      setButtonState("buttonDisabled");
    } else if (props.disabled === false) {
      setButtonState("buttonEnabled");
    }
  }, [props.disabled]);
  return (
    <>
      <button
        style={{ marginLeft: props.marginleft, marginRight: props.marginright }}
        className={buttonState}
        onClick={props.function}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
