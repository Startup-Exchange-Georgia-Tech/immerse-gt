import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content-container">
        <div className="footer-brand-container">
          <img src="/spiral.png" className="footer-logo"></img>
          <div className="footer-hosts">
            <div className="footer-hosts-title">Co-Hosted By</div>
            <img src="/sx.png" className="footer-cohost-logo"></img>
            <img src="/gtxr.png" className="footer-cohost-logo"></img>
          </div>
        </div>
        <div className="footer-info-container">
          <div className="footer-info-brand">Immerse GT</div>
          <div className="footer-info-dates">April 7-9, 2023</div>

          <div className="footer-info-join">
            <span className="footer-info-apply">Apply </span>—
            <span className="footer-info-partner"> Partner </span>—
            <span className="footer-info-sponsor">Sponsor</span>
          </div>

          <div className="footer-link">Event Overview (Coming Soon)</div>
          <div className="footer-link">Schedule (Coming Soon)</div>
        </div>
        <div className="footer-links-container">
          <div className="footer-nav">
            <div className="footer-link-selected">Home</div>
            <div className="footer-link">About</div>
            <div className="footer-link">Tracks and Prizes</div>
            <div className="footer-link">FAQs</div>
            <div className="footer-link">Schedule </div>
            <div className="footer-link">Sponsors</div>
            <div className="footer-link">Contact</div>
          </div>

          <div className="footer-social">
            <img src="/linkedin.png" className="footer-social-icon"></img>
            <img src="/instagram.png" className="footer-social-icon"></img>
            <img src="/linktree.png" className="footer-social-icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
