import React from 'react';
import './Footer.css';
import footerLogo from '../assets/logo.jpg';   // ✅ replace with your logo file
import footerImage from '../assets/footer.jpg'; // ✅ replace with your footer image file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Newsletter Subscription Section */}
        <div className="newsletter-section">
          <h2>Subscribe to our newsletter</h2>
          <form className="subscription-form">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <p className="subscription-text">
              Ready for valuable updates and tips via email and WhatsApp? 
              Sign up, and opt out at any time. ❤
            </p>
            <div className="terms-checkbox">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">I agree with the Terms & Conditions</label>
            </div>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>

        <div className="footer-divider"></div>

        {/* Quick Links Section */}
        <div className="quick-links-section">
          <div className="image-placeholder">
            <img 
              src={footerLogo} 
              alt="Footer Logo" 
              className="footer-logo" 
            />
          </div>

          <h3>Quick Links:</h3>
          <ul className="quick-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/training-centres">Training Centres</a></li>
            <li><a href="/events">Events Calendar</a></li>
            <li><a href="/membership">Membership Downloads</a></li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        {/* Address Section with Social + Image + Enquiry under Phone */}
        <div className="address-section">
          <h3>Contact Information</h3>
          <address>
            <strong>General inquiries:</strong> <a href="mailto:info@aims.org">info@aims.org</a><br /><br />
            
            <strong>Address:</strong><br />
            206 Ilanga,<br />
            679 Stanza Bopape Street,<br />
            Arcadia, Pretoria,<br />
            South Africa<br /><br />

            <strong>Phone:</strong><br />
            +27 71 971 3850<br />
            +27 60 542 3163
          </address>

          {/* ✅ Social + Image + Enquiry moved under phone */}
          <div className="social-section">
            <h3>Follow Us</h3>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter/X</a> |{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a> |{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
            </p>

            <div className="footer-image-box">
              <img 
                src={footerImage} 
                alt="Footer Illustration" 
                className="footer-image" 
              />
            </div>

            <div className="enquiry-section">
              <h3>Enquiry</h3>
              <form className="enquiry-form">
                <div className="form-group">
                  <input type="text" id="enquiry-name" name="enquiry-name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" id="enquiry-email" name="enquiry-email" placeholder="Email" />
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
