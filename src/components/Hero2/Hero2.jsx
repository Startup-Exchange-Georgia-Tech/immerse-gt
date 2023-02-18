import Header from "../Header/Header";
import "./Hero2.css";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import pen from "../../assets/pen.png";
import headset from "../../assets/headset.png";
import buzz from "../../assets/buzz.png";
import { motion } from "framer-motion";

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

        buzzRef.current.style.margin = `${(y / window.innerHeight) * 4}% 0 0 -${
          (x / window.innerWidth) * 1.2
        }%`;
        penRef.current.style.margin = `-${(y / window.innerHeight) * 5}% 0 0 ${
          (x / window.innerWidth) * 1
        }%`;
        headsetRef.current.style.margin = `${
          (x / window.innerWidth) * 1.2
        }% 0 0 ${(y / window.innerHeight) * 4}%`;
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
      <div className="Hero2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="Hero2-content">
            <div className="objects-container-container">
              <div className="objects-container">
                <img src={buzz} className="buzz" ref={buzzRef}></img>
                <img src={pen} className="pen" ref={penRef}></img>
                <img src={headset} className="headset" ref={headsetRef}></img>
              </div>
            </div>

            <img src="/secondary.png" className="Hero2-image"></img>
            <div className="Hero2-text">
              <div className="hero-date">
                04.07.23 - 04.09.23 |📍Georgia Tech
              </div>
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
                <div className="hero-partner">Partner with us ➫</div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-content-bottom">
        <div className="hero-content-bottom-left">
          <div className="hero-bottom-text">CO-HOSTS</div>
          <img src="/gtxr.png" className="hero-club-logo"></img>
          <img src="/sx.png" className="hero-club-logo"></img>
        </div>
        <div className="hero-content-bottom-right">
          <div className="hero-bottom-text">OFFICIAL PARTNERS</div>
          <img src="/deloitte.png" className="hero-club-logo"></img>
        </div>
      </div>
      <div className="hero-content-bottom-bottom"></div>
    </div>
  );
}
