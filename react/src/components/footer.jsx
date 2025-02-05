import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>Stay tuned as we update our site!</p>
        </div>
        <div className="footer-links">
          <h5>Pages</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="https://www.linkedin.com">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Sports Plus</p>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}
