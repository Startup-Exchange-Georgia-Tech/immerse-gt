import "./tracks2.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Tracks2() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("/tracks.json")
      .then((res) => res.json())
      .then((data) => {
        setTracks(data);
      });
  }, []);

  return (
    <div className="tracks2-container">
      <div className="tracks2">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="tracks2-text">
            <div className="tracks2-heading">
              CHECK OUT OUR PARTICIPATION TRACKS
            </div>
            <div className="tracks2-body">
              Tracks for ImmerseGT 2023 cover all kinds of industries, ranging
              from Web3, to Sports & Fitness. Your application will ask you to
              list your top 3 tracks. For more information on how each track is
              evaluated, view our Participation Tracks Notion page{" "}
              <a
                className="tracks-button"
                href="https://startup-exchange.notion.site/startup-exchange/ImmerseGT-Participation-Tracks-8be8e06a49b6475bb63ba4d61eead0ed"
              >
                <u>here</u>
              </a>
              .
            </div>
          </div>
        </motion.div>
        <div className="track-cards-container">
          {tracks.tracks
            ? tracks.tracks.map((track, i) => {
                return (
                  <motion.div className="track-card-container" initial={{
                    opacity: 0,
                    y: 100,
                  }} whileInView={{
                    opacity: 1,
                    y: 0,
                  }} duration={{
                    duration: 0.5,
                  }}>
                    <div className="track-card">
                      <div className="track-card-heading">{track.name}</div>
                      <div className="track-card-body">{track.description}</div>
                    </div>
                  </motion.div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
