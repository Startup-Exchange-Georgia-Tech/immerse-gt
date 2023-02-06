import "./Tracks.css";
import TrackCard from "../TrackCard/TrackCard";

export default function Tracks() {
  return (
    <div className="Tracks">
      <div className="tracks_title">Tracks</div>
      <div className="trackcard_container">
        <TrackCard name="Data Visualization">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases to develop new methods of data visualization or elevate on
          preexisting ones.
        </TrackCard>
        <TrackCard name="Gaming">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases for gaming both within and outside the Metaverse.
        </TrackCard>
        <TrackCard name="DEI">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases to discover and expand utilities of XR technology that promote
          DEI in the professional work environment, jury/court selection system,
          foster care, the Metaverse as a whole, or other relevant environments.
        </TrackCard>
        <TrackCard name="Mixed Reality">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases at the intersection of physical reality and the virtual
          universe.
        </TrackCard>
        <TrackCard name="Productivity">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases to boost productivity in the professional work environment,
          education, and day-to-day life.
        </TrackCard>
        <TrackCard name="Shared World Experience">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases to discover and expand the social utilities of XR technology in
          apprenticeship, professional work environment, and the Metaverse as a
          whole.
        </TrackCard>
        <TrackCard name="Sports & Fitness">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases for sports, fitness, and health both within and outside the
          Metaverse.
        </TrackCard>
        <TrackCard name="Sustainability">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases to discover and expand utilities of XR technology that promote
          sustainability in the professional work environment, living,
          production and supply chain, and the Metaverse as a whole.
        </TrackCard>
        <TrackCard name="Web3">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases for decentralization, blockchain, and connectivity. Students
          will focus on the question “How will XR technology be integral in the
          development of Web3 and the technology stage of the decentralized
          world”?
        </TrackCard>
        <TrackCard name="Business Use Case">
          Develop novel XR (Extended Reality) applications, assets, and use
          cases that could have been used with old client cases. Find a way to
          do it bigger or better.
        </TrackCard>
      </div>
    </div>
  );
}
