import React, { useState, useEffect } from "react";
import "./styles.css";
import Check from "../../images/check.svg";

function Progressbar(props) {
  const [color, setColor] = useState("gray");
  const [bccolor, setBccolor] = useState("bcgray");

  useEffect(() => {
    if (props.state === "add-trainer") {
      setColor("gray");
      setBccolor("bcgray");
    } else if (props.state === "add-discipline") {
      setColor("green");
      setBccolor("bcgreen");
    }
  }, [props.state]);
  return (
    <div className="progressBar">
      <div className="bar">
        <div className="progressLR">
          <div className="circle bcgreen">
            <img src={Check} />
          </div>
        </div>
        <div className={"line " + bccolor}>
          <div className={"line bcgreen"}></div>
          <div className={"line"}></div>
        </div>
        <div className="progressLR">
          <div className={"circle " + bccolor}>
            <div className="scircle bcwhite"></div>
          </div>
        </div>
      </div>
      <div className="progressText">
        <div className="green">{props.step1}</div>
        <div className={color}>{props.step2}</div>
      </div>
    </div>
  );
}

export default Progressbar;
