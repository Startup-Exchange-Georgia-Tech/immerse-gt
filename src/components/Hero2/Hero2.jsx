import Header from "../Header/Header";
import "./Hero2.css";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import pen from "../../assets/pen.png";
import headset from "../../assets/headset.png";
import buzz from "../../assets/buzz.png";

export default function Hero2() {
  const [gradientRotate, setGradientRotate] = useState(
    `linear-gradient(0deg, rgb(255, 174, 0) 0%, rgba(255, 255, 255, 0) 25%))`
  );

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
          String((y / window.innerHeight) * 4) + "vh";
        buzzRef.current.style.left =
          String((x / window.innerWidth) * 1.2) + "vw";
        penRef.current.style.bottom =
          String((y / window.innerHeight) * 5) + "vh";
        penRef.current.style.left =
          String((x / window.innerWidth) * 1) + "vw";
        headsetRef.current.style.bottom =
          String((y / window.innerHeight) * 4) + "vh";
        headsetRef.current.style.right =
          String((x / window.innerWidth) * 1.2) + "vw";
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
        <div className="objects-container-container">
          <div className="objects-container">
            <img src={buzz} className="buzz" ref={buzzRef}></img>
            <img src={pen} className="pen" ref={penRef}></img>
            <img src={headset} className="headset" ref={headsetRef}></img>
            {/* <div>area1</div>
            <div>area2</div>
            <div>area3</div>
            <div>area4</div> */}
          </div>
        </div>

        <img src="/secondary.png" className="Hero2-image"></img>
        <div className="Hero2-text">
          <div className="hero-date">04.07.23 - 04.09.23 |📍Georgia Tech</div>
        </div>
        <div className="hero2-desc-text">
          In-person XR hackathon. Open to all. $20,000 in prizes.
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
              Partner with us ➫
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
