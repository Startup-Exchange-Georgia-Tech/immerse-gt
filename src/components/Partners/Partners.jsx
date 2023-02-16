import "./Partners.css";

export default function Partners() {
  return (
    <div className="partners">
      <img src="/gradient-glow1.png" className="gradient-glow-bg"></img>
      <div className="partners-content">
        <div className="partners-heading">MEET OUR PARTNERS</div>
        <div className="partners-body">
          For each of our participation tracks, we offer partners the
          opportunity to sponsor the track’s prize poop, to curate use-cases and
          judging criteria, and to offer speakers and mentors.{" "}
        </div>
        <div className="partners-section-button">
          <div className="partners-button-text">Partner with us</div>
          <img src="/arrow.png"></img>
        </div>
      </div>
      <div className="partners-images">
        <div className="partner-image-container">
          <img src="/deloitte.png" className="partner-image"></img>
        </div>
        <div className="partner-image-container">
          <img src="/createx.png" className="partner-image"></img>
        </div>
        <div className="partner-image-container">
          <img src="/404dao.png" className="partner-image"></img>
        </div>
        <div className="partner-image-container">
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
        </div>
      </div>
      <div className="partners-bottom">

      </div>
    </div>
  );
}
