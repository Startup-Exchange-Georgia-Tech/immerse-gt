import "./Workshops.css";
import { motion } from "framer-motion";

export default function workshops() {
  return (
    <div className="workshops">
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
      <div className="workshops-content">
        <motion.div
          className="workshops-heading"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          EVENT WORKSHOPS
        </motion.div>
        <motion.div
          className="workshops-body"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          Gain hands-on experience in building XR technologies from scratch by
          learning from industry experts and innovators. Learn topics from
          Meta's software ecosystem to the hidden optics behind Google glass!{" "}
          <br />
          <br />
          In the week leading up to the hackathon, we will also offer 2 daily
          sessions on the basics of XR development, courtesy of GTXR.
        </motion.div>
        <motion.div
          className="workshops-section-button"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          <a href="mailto:hello@immersegt.io">
            <div className="hero-workshop">
              Plan a workshop with us{" "}
              <motion.span
                initial={{
                  x: 40,
                }}
                whileInView={{
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                ➫
              </motion.span>
              {/* <span className="arrow">
                <img src="/arrow.png"></img>
              </span> */}
            </div>
          </a>
          {/* <div className="workshops-button-text">workshop with us</div> */}
        </motion.div>
      </div>
      <div className="workshops-images">
        {/* <div className="workshop-image-container"> */}
        {/* <img src="/404dao.png" className="workshop-image"></img> */}
        {/* </div> */}
        <div className="workshop-image-container">
          <img src="/google.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/meta.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/unity.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/accenture.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/qualcomm.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/nvidia.png" className="workshop-image"></img>
        </div>
      </div>
      <div className="more-partners">

        <motion.div
          className="workshops-heading"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          OTHER PARTNERS
        </motion.div>

        
      </div>
      <div className="workshops-images">
        {/* <div className="workshop-image-container"> */}
        {/* <img src="/404dao.png" className="workshop-image"></img> */}
        {/* </div> */}
        <div className="workshop-image-container">
          <img src="/immersed.svg" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/teleportal.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/mark3.svg" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/inspirit.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/futurus.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/3dimension.png" className="workshop-image"></img>
        </div>
        <div className="workshop-image-container">
          <img src="/zenvr.png" className="workshop-image"></img>
        </div>
      </div>
      <div className="workshops-bottom"></div>

      <div className="keynote-speakers-section">
        <div className="workshops-heading keynote-speakers-heading">
          KEYNOTE SPEAKERS
        </div>
        <div className="keynote-speakers-container">
          <div className="keynote-speaker-card-container">
            <div className="keynote-speaker-card">
              <div className="keynote-speaker-card-header">
                <div className="keynote-speaker-card-title">COMING SOON</div>
                {/* <div className="keynote-speaker-card-role">
                  CEO & CHAIRMAN, DELOITTE CONSULTING
                </div> */}
              </div>
              <div className="keynote-speaker-card-bottom">
                {/* <img
                  src="./dan.png"
                  alt="Image of Dan HelFrich"
                  className="keynote-image"
                /> */}
                <div className="keynote-speaker-card-text">
                  {/* Dan Helfrich is chair and chief executive officer of Deloitte
                  Consulting LLP, where he leads a growing team of 80,000+
                  professionals who help clients innovatively face today's most
                  complex issues. */}
                </div>
              </div>
            </div>
          </div>
          <div className="keynote-speaker-card-container">
            <div className="keynote-speaker-card">
              <div className="keynote-speaker-card-header">
                <div className="keynote-speaker-card-title">COMING SOON</div>
                {/* <div className="keynote-speaker-card-role">
                  PRINCIPAL & DEI LEADER, DELOITTE
                </div> */}
              </div>
              <div className="keynote-speaker-card-bottom">
                {/* <img
                  src="./ayo.png"
                  alt="Image of Dan HelFrich"
                  className="keynote-image"
                /> */}
                <div className="keynote-speaker-card-text">
                  {/* Ayo is a principal in Deloitte Consulting LLP’s customer &
                  marketing practice with 20 years of consulting experience,
                  serving clients in the Technology, Media, and Telecom sectors.
                  Ayo also serves as the Diversity, Equity, and Inclusion leader
                  for Deloitte Consulting.<br></br>Ayo also serves as the
                  Diversity, Equity, and Inclusion leader for Deloitte
                  Consulting. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
