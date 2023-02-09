import Header from "../Header/Header";
import "./Hero2.css";
import { useState, useEffect, useRef } from "react";
import path from "../../assets/path.png";
import pen from "../../assets/pen.png";
import union from "../../assets/Union.png";
import union2 from "../../assets/Union1.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import headset from "../../assets/headset.png";
import buzz from "../../assets/buzz.png";

export default function Hero2() {
  const countDownDate = new Date(2023, 4, 7, 0, 0, 0, 0).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getReturnValues = (countDown) => {
    // calculate time left
    console.log(countDown);
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    console.log([days, hours, minutes, seconds]);
    return [days, hours, minutes, seconds];
  };

  const penRef = useRef(null);
  const headsetRef = useRef(null);
  const buzzRef = useRef(null);

  return (
    <div
      className="Hero"
      onMouseMove={(e) => {
        if (penRef == null || headsetRef == null || buzzRef == null) return;
        var x = e.clientX,
          y = e.clientY;
        buzzRef.current.style.top =
          String(-30 + (y / window.innerHeight) * 4) + "vh";
        buzzRef.current.style.left =
          String(-2 + (x / window.innerWidth) * 1.2) + "vw";
        penRef.current.style.bottom =
          String((y / window.innerHeight) * 5) + "%";
        penRef.current.style.left =
          String(5 - (x / window.innerWidth) * 1) + "%";
        headsetRef.current.style.bottom =
          String(5 - (y / window.innerHeight) * 4) + "%";
        headsetRef.current.style.right =
          String(6 - (x / window.innerWidth) * 1.2) + "%";
      }}
    >
      <Header></Header>
      <div className="Hero2-content">
        <img src={buzz} className="buzz" ref={buzzRef}></img>
        <img src={pen} className="pen" ref={penRef}></img>
        <img src={headset} className="headset" ref={headsetRef}></img>
        <img src="/secondary.png" className="Hero2-image"></img>
      </div>
    </div>
  );
}
