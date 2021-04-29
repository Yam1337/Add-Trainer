import React, { useState, useEffect, ReactFragment } from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Progressbar from "./components/progressbar/Progressbar";
import Separator from "./components/separator/Separator";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import Card from "./components/card/Card";

function App() {
  const [page, setPage] = useState("add-trainer");
  const [trainername, setTrainername] = useState("");
  const [trainersurname, setTrainersurname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [myInfo, setMyInfo] = useState([]);
  const [buttonState, setButtonState] = useState(true);
  const emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const addInfo = () => {
    setPage("add-discipline");
    setMyInfo([
      ...myInfo,
      {
        name: trainername + " " + trainersurname,
        email: email,
        mobile: mobile,
        desc: desc,
        id: `TA${(myInfo.length + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 4,
          useGrouping: false,
        })}`,
      },
    ]);
    setTrainername("");
    setTrainersurname("");
    setEmail("");
    setMobile("");
    setDesc("");
  };
  useEffect(() => {
    if (
      trainername.length >= 3 &&
      trainersurname.length >= 3 &&
      mobile.length === 9 &&
      !isNaN(mobile) &&
      emailIsValid(email)
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
    console.log(mobile);
  }, [trainername.length, trainersurname.length, mobile.length, email.length]);
  const Content = () => {
    if (page === "add-trainer") {
      return (
        <div className="content">
          <Input
            placeholder={"Imię Trenera"}
            myvalue={trainername}
            setmyvalue={setTrainername}
            rows={1}
            width={"100%"}
            maxlength={32}
          />
          <Input
            placeholder={"Nazwisko Trenera"}
            myvalue={trainersurname}
            setmyvalue={setTrainersurname}
            rows={1}
            width={"100%"}
            maxlength={32}
          />
          <div className="multipleInput">
            <Input
              placeholder={"Nr telefonu"}
              myvalue={mobile}
              setmyvalue={setMobile}
              rows={1}
              width={"32%"}
              maxlength={9}
            />
            <Input
              placeholder={"e-mail"}
              myvalue={email}
              setmyvalue={setEmail}
              rows={1}
              width={"64%"}
              maxlength={36}
            />
          </div>
          <Separator color={"#F2F2F2"} margintop={"16px"} marginbot={"0px"} />
          <Input
            placeholder={"Krótki opis"}
            myvalue={desc}
            setmyvalue={setDesc}
            rows={7}
            width={"100%"}
            maxlength={200}
          />
          <Separator color={"#F2F2F2"} margintop={"16px"} marginbot={"0px"} />
          <div className="buttonContainer">
            <Button
              text={"Dalej"}
              function={() => {
                addInfo();
              }}
              disabled={buttonState}
            />
          </div>
        </div>
      );
    }
    if (page === "add-discipline") {
      return (
        <div className="disciplineContainer">
          <div className="disciplines">
            <Card data={myInfo} setData={setMyInfo} />
            <Separator color={"#F2F2F2"} margintop={"16px"} />
          </div>
          <div className="buttonContainer">
            <Button
              text={"Powrót"}
              function={() => {
                setPage("add-trainer");
              }}
              disabled={false}
            />
            <Button
              text={"Zakończ"}
              marginleft={"8px"}
              marginright={"0px"}
              function={() => {
                console.log(myInfo);
                setPage("add-trainer");
                setMyInfo([]);
              }}
            />
          </div>
        </div>
      );
    }
  };
  return (
    <div className="popupBody">
      <Topbar
        state={page}
        function={() => {
          setPage("add-trainer");
          setMyInfo([]);
        }}
      />
      <div className="pageContent">
        <Progressbar
          state={page}
          step1={"DODAJ TRENERA"}
          step2={"PODSUMOWANIE"}
        />
        <Separator color={"#F2F2F2"} margintop={"0px"} marginbot={"0px"} />
        {Content()}
      </div>
    </div>
  );
}

export default App;
