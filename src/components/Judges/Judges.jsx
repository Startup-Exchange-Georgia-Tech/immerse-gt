import "./Judges.css";
import styles from './Judges.css'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function judges() {
  return (
    <div className="judges">
      <motion.img
        src="/gradient-glow1.png"
        className="gradient-glow-bg"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      ></motion.img>
      <div className="judges-content">
        <motion.div
          className="judges-heading"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          MEET OUR JUDGES
        </motion.div>
        <motion.div
          className="judges-section-button"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          {/* <div className="judges-button-text">judge with us</div> */}
        </motion.div>
      </div>
      <div className="judges-images">
        {/* <div className="judge-image-container"> */}
        {/* <img src="/404dao.png" className="judge-image"></img> */}
        {/* </div> */}
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./robert.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Robert Rios</div>
            <div className="keynote-speaker-card-role">NVIDIA</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./matt.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Matt Golino</div>
            <div className="keynote-speaker-card-role">ZENVR</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./jp.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">JP Minetos</div>
            <div className="keynote-speaker-card-role">HARTMANN CAPITAL</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./thomas.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Thomas Suarez</div>
            <div className="keynote-speaker-card-role">TELEPORTAL</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./adiV.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Adi Vivek</div>
            <div className="keynote-speaker-card-role">CAMBRIDGE BLOCKCHAIN SOCIETY</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./dot.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Dot Bustelo</div>
            <div className="keynote-speaker-card-role">LOUPE</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./bruce.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Bruce Walker</div>
            <div className="keynote-speaker-card-role">HCI @ GEORGIA TECH</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./elizabeth.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Elizebeth Strickler</div>
            <div className="keynote-speaker-card-role">MEDIA INNOVATION, GEORGIA STATE UNIVERSITY</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./cole.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Cole Schendl</div>
            <div className="keynote-speaker-card-role">404DAO</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./karthik.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Karthik Ramachandran</div>
            <div className="keynote-speaker-card-role">SUSTAINABLE-X, GEORGIA TECH</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./rajD.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Raj Deshpande</div>
            <div className="keynote-speaker-card-role">PULSEWORKS</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./zach.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Zach Farley</div>
            <div className="keynote-speaker-card-role">KITTLABS</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./jeasy.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Jeasy Sehgal</div>
            <div className="keynote-speaker-card-role">VIRTUAL PRODUCTION, GEORGIA STATE UNIVERSITY</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./markus.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Markus Klusemann</div>
            <div className="keynote-speaker-card-role">OVERTIME</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./chloe.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Chloe Wade</div>
            <div className="keynote-speaker-card-role">DELOITTE</div>
          </div>
        </div>
        <div className="judge-image-container">
          <div className="ExecBoardCardContainer">
            <img src="./will.png" className="judge-image"></img>
            <div className="keynote-speaker-card-title">Will Chick</div>
            <div className="keynote-speaker-card-role">DELOITTE</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
