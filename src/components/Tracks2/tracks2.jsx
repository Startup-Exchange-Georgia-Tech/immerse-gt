import "./tracks2.css";
import { useEffect, useState } from "react";

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
        <div className="tracks2-text">
          <div className="tracks2-heading">
            CHECK OUT OUR PARTICIPATION TRACKS
          </div>
          <div className="tracks2-body">
            Tracks for ImmerseGT 2023 cover all kinds of industries, ranging
            from Web3, to Sports & Fitness. Your application will ask you to
            list your top 3 tracks.For more information on how each track is
            evaluated, view our Participation Tracks Notion page here.
          </div>
        </div>
        <div className="track-cards-container">
          {tracks.tracks? tracks.tracks.map((track) => {
            return (
              <div className="track-card-container">
                <div className="track-card">
                  <div className="track-card-heading">{track.name}</div>
                  <div className="track-card-body">{track.description}</div>
                </div>
              </div>
            );
          }) : null}
        </div>
      </div>
    </div>
  );
}
