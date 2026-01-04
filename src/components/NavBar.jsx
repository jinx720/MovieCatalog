import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-title">Movie Catalog</span>
          <span className="navbar-subtitle">Purple &amp; Gold Edition</span>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favourites" className="nav-link">
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default NavBar