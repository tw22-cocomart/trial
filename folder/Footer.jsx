import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="fupper">
          <img className="f-logo" src="images/cocomart-logo.png" alt="Cocomart Logo" />
          <h2>CocoMart</h2>
        </div>
        <ul className="flower">
          <li>All rights reserved</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer-center">
        <ul className="footer-upper">
          <h2>Contact Us</h2>
          <li>+631234567890</li>
          <li>cocomart.tw22@gmail.com</li>
        </ul>
        <div className="icon-socials">
          <br />
          <a href="#"><img className="icon icon-socials" src="images/icon-fb.png" alt="FB" /></a>
          <a href="#"><img className="icon icon-socials" src="images/icon-insta.png" alt="IG" /></a>
          <a href="#"><img className="icon icon-socials" src="images/icon-twt.png" alt="TW" /></a>
        </div>
      </div>

      <div className="footer-right disclaimer">
        For educational purposes only, and no copyright infringement is intended.
      </div>
    </footer>
  );
};

export default Footer;