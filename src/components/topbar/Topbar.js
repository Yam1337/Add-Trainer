import React, { useState, useEffect } from "react";
import "./styles.css";
import Close from "../../images/close.svg";

function Topbar(props) {
  const [name, setName] = useState("DODAJ TRENERA");
  useEffect(() => {
    if (props.state === "add-trainer") {
      setName("DODAJ TRENERA");
    } else if (props.state === "add-discipline") {
      setName("DODAJ DYSCYPLINĘ");
    }
  }, [props.state]);
  return (
    <div className="topBar">
      <div className="addTrainer">{name}</div>
      <input type="image" src={Close} onClick={props.function} />
    </div>
  );
}

export default Topbar;
