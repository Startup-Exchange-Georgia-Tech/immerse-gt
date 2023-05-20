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
          <div className="footer-info-brand">ImmerseGT</div>
          <div className="footer-info-dates">COMING SPRING 2024</div>

          <div className="footer-info-join">
            <a href="https://ggqbjxtu5wa.typeform.com/to/LlcDYgKi"><span className="footer-info-apply">Apply </span></a>—
            <a href="mailto:hello@immersegt.io"><span className="footer-info-apply">Partner </span></a>—
            <span className="footer-info-sponsor">Sponsor</span>
          </div>

          <div className="footer-link"><a href="https://startup-exchange.notion.site/ImmerseGT-2023-Rules-and-Code-of-Conduct-8b2a39e221174501816180bc5da806b7">Event Overview</a></div>
          <div className="footer-link">Schedule</div>
        </div>
        <div className="footer-links-container">
          <div className="footer-nav">
            <a href="/"><div className="fooRRter-link-selected">Home</div></a>
            <a href="#Tracks"><div className="footer-link">Tracks and Prizes</div></a>
            <a href="https://www.notion.so/startup-exchange/ImmerseGT-2023-Rules-and-Code-of-Conduct-8b2a39e221174501816180bc5da806b7"><div className="footer-link">Rules</div></a>
            <a href="https://tinyurl.com/scheduleXR"><div className="footer-link">Schedule </div></a>
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
