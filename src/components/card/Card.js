import React, { useState } from "react";
import Separator from "../../components/separator/Separator";
import Sclose from "../../images/sclose.svg";
import "./styles.css";

function Card(props) {
  let deleteTrainer = (e) => {
    props.setData(props.data.filter((x) => x.id !== e));
  };
  return (
    <div className="cardsContainer">
      {props.data.map((x) => (
        <div className="contentContainer">
          <div className="topContent">
            <div className="cardContainer" key={x.email}>
              <div className="trainer">Trener:</div>
              <div className="trainerc">{x.name}</div>
              <div className="email">e-mail:</div>
              <div className="emailc">{x.email}</div>
              <div className="mobile">telefon:</div>
              <div className="mobilec">
                {x.mobile[0] +
                  x.mobile[1] +
                  x.mobile[2] +
                  " " +
                  x.mobile[3] +
                  x.mobile[4] +
                  x.mobile[5] +
                  " " +
                  x.mobile[6] +
                  x.mobile[7] +
                  x.mobile[8]}
              </div>
            </div>
            <div className="idContainer">
              <input
                type="image"
                src={Sclose}
                onClick={() => {
                  deleteTrainer(x.id);
                }}
              />
              <div className="IDIdentifier">
                ID:<div>{`# ${x.id}`}</div>
              </div>
            </div>
          </div>
          <Separator color={"#F2F2F2"} margintop={"16px"} marginbot={"16px"} />
          <div className="desc">{x.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
