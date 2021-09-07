import React, { useState } from "react";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 170) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <section className="need-padding">
      <nav
        class={
          navbar
            ? "navbar navbar-expand-lg navbar-light fixed-top navBg "
            : "navbar navbar-expand-lg navbar-light fixed-top "
        }
      >
        <div class="container-fluid menu">
          <>
            <div className="logo">
              <h4>
                <span className="mr-3">
                  <FontAwesomeIcon icon={faRegistered} />
                </span>
                iaZ
              </h4>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav  menual-customize">
                <li class="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact">Contact</Link>
                </li>
                <li class="nav-item">
                  <Link to="/project">Projects</Link>
                </li>
                <li class="nav-item">
                  <Link to="/resume">Resume</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Blog">Blog</Link>
                </li>
              </ul>
            </div>
          </>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
