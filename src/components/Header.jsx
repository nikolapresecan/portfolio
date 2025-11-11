import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <div className="topbar d-flex w-100 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <a href="https://www.linkedin.com/in/nikola-prese%C4%8Dan/" target="_blank" rel="noreferrer" className="nav-link p-1 fs-5" title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/nikolapresecan" target="_blank" rel="noreferrer" className="nav-link p-1 fs-5" title="GitHub">
              <i className="bi bi-github"></i>
            </a>
          </div>

          <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="mainNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div id="mainNav" className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-2 align-items-lg-center text-center">
            <li className="nav-item">
              <NavLink end to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleClose}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleClose}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleClose}>
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleClose}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
