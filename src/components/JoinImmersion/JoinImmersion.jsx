import "./JoinImmersion.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function JoinImmersion() {
  const countDownDate = new Date(2024, 3, 7, 0, 0, 0, 0).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  const [gradientRotate, setGradientRotate] = useState(
    `linear-gradient(0deg, #fff, rgba(255, 255, 255, 0))`
  );

  const buttonRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds];
  };
  return (
    <div
      className="JoinImmersion"
      onMouseMove={(e) => {
        if (buttonRef == null) return;
        var x = e.clientX,
          y = e.clientY;
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
      <motion.img src="/gradient-glow2.png" className="gradient-glow2" initial={{
        opacity: 0,
      }} whileInView={{
        opacity: 1,
      }} transition={{
        duration: 1,
      }} viewport={{
        amount: 0.5
      }}></motion.img>
      <div className="joinimmersion_title">COMING SPRING 2024 </div>
      <div className="countdown-container">
        <div className="countdown-item">
          <div className="countdown-number">
            {getReturnValues(countDown)[0]}
          </div>
          <div className="countdown-text">days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">
            {getReturnValues(countDown)[1]}
          </div>
          <div className="countdown-text">hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">
            {getReturnValues(countDown)[2]}
          </div>
          <div className="countdown-text">minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">
            {getReturnValues(countDown)[3]}
          </div>
          <div className="countdown-text">seconds</div>
        </div>
      </div>
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
    </div>
  );
}
