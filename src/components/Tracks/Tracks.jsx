import "./Tracks.css";
import TrackCard from "../TrackCard/TrackCard";

export default function Tracks() {
  return (
    <div className="Tracks">
      <div className="tracks_title">Tracks</div>
      <div className="trackcard_container">
        <TrackCard name="Merging Realities">
        Best in Mixed Reality & Shared World Experience
        </TrackCard>
        <TrackCard name="On-the-Go Augmentation">
        Best in MobileAR and WebXR
        </TrackCard>
        <TrackCard name="Virtual Adventures">
        Best in Gaming and Sports/Fitness
        </TrackCard>
        <TrackCard name="Intelligent Immersion">
        Best in AI (Sponsored by Fusen World)
        </TrackCard>
        <TrackCard name="Next-Gen XR Apps">
        Best Commercial Use (Sponsored by CreateX)
        </TrackCard>
        <TrackCard name="Omniverse Odyssey">
        Best use of Omniverse (Sponsored by Nvidia)
        </TrackCard>
        <TrackCard name="Innovative Assistive Technology">
        Best Assistive Technology (Sonification Lab)
        </TrackCard>
        <TrackCard name="Mindful Immersion in XR">
        Best in Mindfulness (Sponsored by ZenVR)
        </TrackCard>

      </div>
    </div>
  );
}
