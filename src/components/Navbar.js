import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand logo" to="/">HARISH B</Link>
        <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            
            {/* MyProjects Dropdown Button */}
            <li className="nav-item dropdown">
              <button 
                className="btn myprojects-btn dropdown-toggle" 
                id="navbarDropdown" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                MyProjects
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/myprojects">All Projects</Link></li>
                <li><Link className="dropdown-item" to="/graphic-design">Graphic Design</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
