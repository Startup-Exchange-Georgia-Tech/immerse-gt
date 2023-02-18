import "./Partners.css";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <div className="partners">
      <motion.img
        src="/gradient-glow1.png"
        className="gradient-glow-bg"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }} transition={{
          duration: 2,
        }}
      ></motion.img>
      <div className="partners-content">
        <motion.div
          className="partners-heading"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          MEET OUR PARTNERS
        </motion.div>
        <motion.div
          className="partners-body"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          For each of our participation tracks, we offer partners the
          opportunity to sponsor the track’s prize pool, to curate use-cases and
          judging criteria, and to offer speakers and mentors.{" "}
        </motion.div>
        <motion.div
          className="partners-section-button"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          <a href="mailto:hello@immersegt.io">
            <div className="hero-partner">
              Partner with us{" "}
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
          {/* <div className="partners-button-text">Partner with us</div> */}
        </motion.div>
      </div>
      <div className="partners-images">
        <div className="partner-image-container">
          <img src="/deloitte.png" className="partner-image"></img>
        </div>
        <div className="partner-image-container">
          {/* <img src="/createx.png" className="partner-image"></img> */}
        </div>
        <div className="partner-image-container">
          {/* <img src="/404dao.png" className="partner-image"></img> */}
        </div>
        {/* <div className="partner-image-container">
          <img src="/google.png" className="partner-image"></img>
        </div>
        <div className="partner-image-container">
          <img src="/meta.png" className="partner-image"></img>
        </div>
        <div className="partner-image-container">
          <img src="/unity.png" className="partner-image"></img>
        </div>
        <div className="partner-image-container">
          <img src="/accenture.png" className="partner-image"></img>
        </div> */}
      </div>
      <div className="partners-bottom"></div>
      <div className="keynote-speakers-section">
        <div className="partners-heading keynote-speakers-heading">
          KEYNOTE SPEAKERS
        </div>
        <div className="keynote-speakers-container">
          <div className="keynote-speaker-card-container">
            <div className="keynote-speaker-card">
              <div className="keynote-speaker-card-header">
                <div className="keynote-speaker-card-title">DAN HELFRICH</div>
                <div className="keynote-speaker-card-role">
                  CEO & CHAIRMAN, DELOITTE CONSULTING
                </div>
              </div>
              <div className="keynote-speaker-card-bottom">
                <img
                  src="./dan.png"
                  alt="Image of Dan HelFrich"
                  className="keynote-image"
                />
                <div className="keynote-speaker-card-text">
                  Dan Helfrich is chair and chief executive officer of Deloitte
                  Consulting LLP, where he leads a growing team of 80,000+
                  professionals who help clients innovatively face today's most
                  complex issues.
                </div>
              </div>
            </div>
          </div>
          <div className="keynote-speaker-card-container">
            <div className="keynote-speaker-card">
              <div className="keynote-speaker-card-header">
                <div className="keynote-speaker-card-title">AYO ODUSOTE</div>
                <div className="keynote-speaker-card-role">
                  PRINCIPAL & DEI LEADER, DELOITTE
                </div>
              </div>
              <div className="keynote-speaker-card-bottom">
                <img
                  src="./ayo.png"
                  alt="Image of Dan HelFrich"
                  className="keynote-image"
                />
                <div className="keynote-speaker-card-text">
                  Ayo is a principal in Deloitte Consulting LLP’s customer &
                  marketing practice with 20 years of consulting experience,
                  serving clients in the Technology, Media, and Telecom sectors.
                  Ayo also serves as the Diversity, Equity, and Inclusion leader
                  for Deloitte Consulting.<br></br>Ayo also serves as the
                  Diversity, Equity, and Inclusion leader for Deloitte
                  Consulting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
