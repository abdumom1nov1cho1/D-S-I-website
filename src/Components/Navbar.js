import "../Components/Navbar.css";
import icon1 from "../Icons/Home.svg"
import icon2 from "../Icons/Email.svg"
import icon3 from "../Icons/3ison.svg"

import React from "react";

const Navbar = ({icon}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <img src={icon} alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Technology
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Client
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Partner
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div class="icons">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
