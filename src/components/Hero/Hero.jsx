import Header from '../Header/Header'
import './Hero.css'
import { useState, useEffect } from 'react'

export default function Hero() {

  const countDownDate = new Date(2023, 4, 7, 0, 0, 0, 0).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);


  const getReturnValues = (countDown) => {
    // calculate time left
    console.log(countDown)
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    console.log([days, hours, minutes, seconds])
    return [days, hours, minutes, seconds];
  };

  return (
    <div className='Hero'>
      <Header></Header>
      <div className='Hero-content'>
        <div className='hero-left'>
          <img src='/secondary.png'></img>
          <div className='hero-date'>
            04.07.23 - 04.09.23 |📍Georgia Tech
          </div>
          <div className='hero-desc'>
            <div className='hero-desc-text'>In-person XR hackathon.<br/>
            Open to all.<br/>
            $5000 in prizes.
            </div>
          </div>
          <div className='hero-apply'>
            <div className='hero-apply-button'>
              Apply Now
            </div>
            <div className='hero-partner'>Partner with us <span className='arrow'><img src='/arrow.png'></img></span></div>
          </div>

        </div>
        <div className='hero-right'>
          <div className='countdown-title'>COUNTDOWN</div>
          <div className='countdown-container'>
            <div className='countdown-item'>
              <div className='countdown-number'>{getReturnValues(countDown)[0]}</div>
              <div className='countdown-text'>days</div>
            </div>
            <div className='countdown-item'>
              <div className='countdown-number'>{getReturnValues(countDown)[1]}</div>
              <div className='countdown-text'>hours</div>
            </div>
            <div className='countdown-item'>
              <div className='countdown-number'>{getReturnValues(countDown)[2]}</div>
              <div className='countdown-text'>minutes</div>
            </div>
            <div className='countdown-item'>
              <div className='countdown-number'>{getReturnValues(countDown)[3]}</div>
              <div className='countdown-text'>seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}