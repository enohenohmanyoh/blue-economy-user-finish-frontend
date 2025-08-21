import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Footer.css";
import footerLogo from "../assets/logo.jpg";
import footerImage from "../assets/footer.jpg";

const SITE_KEY = "6LdoZrMrAAAAAN0Rab4FeD0kGHBznr1CDGIGG3SU";

const Footer = () => {
  const [newsletterCaptcha, setNewsletterCaptcha] = useState(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterCaptcha) {
      alert("Please verify that you are not a robot!");
      return;
    }
    alert("Newsletter subscription submitted ✅");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Quick Links + Image + Enquiry */}
        <div className="quick-links-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="/about">About Us</a></li>
        
            <li><a href="/training-centres">Training Centres</a></li>
            <li><a href="/events">Events Calendar</a></li>
          
          </ul>
          
          <div className="footer-image-box">
            <img src={footerImage} alt="Footer Illustration" className="footer-image" />
          </div>

          {/* Enquiry form moved here under image */}
          <div className="enquiry-section">
            <h3>Have Questions?</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea
              placeholder="Your Message"
              rows="4"
              style={{
                width: "100%",
                maxWidth: "280px",
                margin: "0 auto 10px",
                display: "block",
                borderRadius: "4px",
                padding: "6px",
              }}
            ></textarea>
            <button className="subscribe-btn">Send Enquiry</button>
          </div>
        </div>

        {/* Logo now in its own column */}
        <div className="logo-section">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
        </div>

        {/* Contact + Newsletter */}
        <div className="address-section">
          <h3>Contact</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@aims.org">info@alibel.org</a>
            <br />
            <strong>Address:</strong>
            <br />
            206 Ilanga, 679 Stanza Bopape Street, Arcadia, Pretoria, South Africa
            <br />
            <strong>Phone:</strong> +27 71 971 3333 | +27 60 542 3163
          </address>
          <div className="social-section">
            <h4>Follow Us</h4>
            <p>
              <a href="#">LinkedIn</a> | <a href="#">Twitter/X</a> |{" "}
              <a href="#">Facebook</a> | <a href="#">YouTube</a>
            </p>
          </div>

          <div className="newsletter-form-box">
            <h2>Subscribe to Our Newsletter</h2>
            <form className="subscription-form" onSubmit={handleNewsletterSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="terms-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
              </div>
              <ReCAPTCHA sitekey={SITE_KEY} onChange={setNewsletterCaptcha} />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
