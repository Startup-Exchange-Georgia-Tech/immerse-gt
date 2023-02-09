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

  const [gradientRotate, setGradientRotate] = useState(
    `linear-gradient(0deg, #fff, rgba(255, 255, 255, 0))`
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
  const buttonRef = useRef(null);

  return (
    <div
      className="Hero"
      onMouseMove={(e) => {
        if (
          penRef == null ||
          headsetRef == null ||
          buzzRef == null ||
          buttonRef == null
        )
          return;
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
        const butt_x = buttonRef.current.getBoundingClientRect().x;
        const butt_y = buttonRef.current.getBoundingClientRect().y;
        const angle =
          (Math.atan2(
            y - (butt_y + buttonRef.current.getBoundingClientRect().height / 2),
            x - (butt_x + buttonRef.current.getBoundingClientRect().width / 2)
          ) *
            180) /
          Math.PI;
        setGradientRotate(
          `linear-gradient(${
            angle - 90
          }deg, rgb(255, 174, 0) 0%, rgba(255, 255, 255, 0) 25%)`
        );
      }}
    >
      <Header></Header>
      <div className="Hero2-content">
        <img src={buzz} className="buzz" ref={buzzRef}></img>
        <img src={pen} className="pen" ref={penRef}></img>
        <img src={headset} className="headset" ref={headsetRef}></img>
        <img src="/secondary.png" className="Hero2-image"></img>
        <div className="Hero2-text">
          <div className="hero-date">04.07.23 - 04.09.23 |📍Georgia Tech</div>
        </div>
        <div className="hero2-desc-text">
          In-person XR hackathon.
          Open to all.
          $5000 in prizes.
        </div>
        <div className="hero2-apply">
          <div
            className="hero2-apply-button"
            style={{ backgroundImage: gradientRotate }}
            ref={buttonRef}
          >
            <a
              href="https://ggqbjxtu5wa.typeform.com/to/LlcDYgKi"
              className="apply-link"
            >
              Apply Now
            </a>
          </div>

          <div className="hero-partner">
            Partner with us{" "}
            <span className="arrow">
              <img src="/arrow.png"></img>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
