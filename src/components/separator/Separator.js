import React, { useState } from "react";
import "./styles.css";

function Separator(props) {
  return (
    <div
      className="separator"
      style={{
        backgroundColor: props.color,
        marginTop: props.margintop,
        marginBottom: props.marginbot,
      }}
    ></div>
  );
}

export default Separator;
