import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content-container">
        <div className="footer-brand-container">
          <a href="/"><img src="/spiral.png" className="footer-logo"></img></a>
          <div className="footer-hosts">
            <div className="footer-hosts-title">Co-Hosted By</div>
            <a href="https://startup.exchange">
              <img src="/sx.png" className="footer-cohost-logo"></img>

            </a>
            <a href="https://gtxr.club"><img src="/gtxr.png" className="footer-cohost-logo"></img></a>
          </div>
        </div>
        <div className="footer-info-container">
          <div className="footer-info-brand">Immerse GT</div>
          <div className="footer-info-dates">April 7-9, 2023</div>

          <div className="footer-info-join">
            <a href="https://ggqbjxtu5wa.typeform.com/to/LlcDYgKi"><span className="footer-info-apply">Apply </span></a>—
            <a href="mailto:hello@immersegt.io"><span className="footer-info-apply">Partner </span></a>—
            <span className="footer-info-sponsor">Sponsor</span>
          </div>

          <div className="footer-link">Event Overview (Coming Soon)</div>
          <div className="footer-link">Schedule (Coming Soon)</div>
        </div>
        <div className="footer-links-container">
          <div className="footer-nav">
            <a href="/"><div className="footer-link-selected">Home</div></a>
            <div className="footer-link">About</div>
            <a href="#TrackCard"><div className="footer-link">Tracks and Prizes</div></a>
            <div className="footer-link">FAQs</div>
            <div className="footer-link">Schedule </div>
            <div className="footer-link">Sponsors</div>
            <a href="mailto:hello@immersegt.io"><div className="footer-link">Contact</div></a>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/company/90436194"><img src="/linkedin.png" className="footer-social-icon"></img></a>
            <a href="http://www.instagram.com/immerse.gt"><img src="/instagram.png" className="footer-social-icon"></img></a>
            <a href="https://lu.ma/immersegt"><img src="/linktree.png" className="footer-social-icon"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}
