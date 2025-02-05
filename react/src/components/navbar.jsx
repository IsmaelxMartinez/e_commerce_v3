import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          {" "}
          {/* Use className instead of class */}
          {/* Link should use `to` instead of `href` */}
          <Link to="/" className="brand-logo">
            <img src="brand-logo.png" alt="brand-logo" />
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/products">Products</Link> {/* Updated Link */}
            </li>
            <li>
              <Link to="/contact">Contact</Link> {/* Updated Link */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
