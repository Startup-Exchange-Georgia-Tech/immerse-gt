import Header from "../Header/Header";
import "./Hero2.css";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import pen from "../../assets/pen.png";
import headset from "../../assets/headset.png";
import buzz from "../../assets/buzz.png";

export default function Hero2() {
  const countDownDate = new Date(2023, 4, 7, 0, 0, 0, 0).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  const [size, setSize] = useState([0, 0]);

  const [gradientRotate, setGradientRotate] = useState(
    `linear-gradient(0deg, rgb(255, 174, 0) 0%, rgba(255, 255, 255, 0) 25%))`
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

  const [penOffsetX, setPenOffstateX] = useState(10);
  const [headsetOffsetX, setHeadsetOffstateX] = useState(6);
  const [buzzOffsetX, setBuzzOffstateX] = useState(-2);

  const [penOffsetY, setPenOffstateY] = useState(-20);
  const [headsetOffsetY, setHeadsetOffstateY] = useState(5);
  const [buzzOffsetY, setBuzzOffstateY] = useState(-30);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth <= 1500) {
        setPenOffstateX(-10);
        setHeadsetOffstateX(-2);
        setBuzzOffstateX(-20);
        setPenOffstateY(-20);
        setHeadsetOffstateY(0);
        setBuzzOffstateY(-35);
      }
      if (window.innerWidth <= 1250) {
        setPenOffstateX(-10);
        setHeadsetOffstateX(-2);
        setBuzzOffstateX(-20);
        setPenOffstateY(-10);
        setHeadsetOffstateY(0);
        setBuzzOffstateY(-35);
      }

      if (window.innerWidth <= 800) {
        setPenOffstateX(-30);
        setHeadsetOffstateX(-10);
        setBuzzOffstateX(-30);
        setPenOffstateY(-20);
        setHeadsetOffstateY(-15);
        setBuzzOffstateY(-45);
      }

      if (window.innerWidth <= 550) {
        setPenOffstateX(-60);
        setHeadsetOffstateX(-40);
        setBuzzOffstateX(-60);
        setPenOffstateY(-20);
        setHeadsetOffstateY(-15);
        setBuzzOffstateY(-45);
      }

      if (window.innerWidth <= 400) {
        setPenOffstateX(-70);
        setHeadsetOffstateX(-50);
        setBuzzOffstateX(-75);
        setPenOffstateY(-20);
        setHeadsetOffstateY(-15);
        setBuzzOffstateY(-45);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      className="Hero"
      onMouseMove={(e) => {
        if (
          buttonRef == null
        )
          return;
        var x = e.clientX,
          y = e.clientY;
        // buzzRef.current.style.top =
        //   String(buzzOffsetY + (y / window.innerHeight) * 4) + "vh";
        // buzzRef.current.style.left =
        //   String(buzzOffsetX + (x / window.innerWidth) * 1.2) + "vw";
        // penRef.current.style.bottom =
        //   String(penOffsetY + (y / window.innerHeight) * 5) + "vh";
        // penRef.current.style.left =
        //   String(penOffsetX - (x / window.innerWidth) * 1) + "vw";
        // headsetRef.current.style.bottom =
        //   String(headsetOffsetY - (y / window.innerHeight) * 4) + "vh";
        // headsetRef.current.style.right =
        //   String(headsetOffsetX - (x / window.innerWidth) * 1.2) + "vw";
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
        {/* <img src={buzz} className="buzz" ref={buzzRef}></img>
        <img src={pen} className="pen" ref={penRef}></img>
        <img src={headset} className="headset" ref={headsetRef}></img> */}
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

          <a href="mailto:hello@immersegt.io">
            <div className="hero-partner">
              Partner with us{" "}➫
              {/* <span className="arrow">
                <img src="/arrow.png"></img>
              </span> */}
            </div>
          </a>
        </div>
        
      </div>
    </div>
  );
}
