import React from "react";
import "../css/Navbar.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Navbar = () => {
  return (
    <>
      <nav className="bgcolor">
        <div className="nav-container d-flex align-items-center justify-content-between">
          <div className="logo-body">
            <a className="navbar-brand" href="#">
              <img src={require("../Assets/Logo.png")} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="contact-info">
            <ul className="d-flex align-items-center justify-content-between m-0 gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa-solid fa-phone"></i>1-800-242-2728
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-location-dot"></i>location
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-calendar-check"></i>Virtual
                  Appointment
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2" id="navbarSupportedContent">
            <form className="d-flex inputbox">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For Jewellery"
                aria-label="Search"
              />
              <i class="fa-solid fa-magnifying-glass iconsearch"></i>
            </form>
            <ul className="d-flex align-items-center justify-content-between m-0">
              <li className="nav-item me-2">
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={require("../Assets/flag.png")} alt="" />
                  English,USD
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-heart"></i>
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-cart-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav class="bg-color pt-1 pb-1">
        <div class="nav-container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="" id="navbarNavDropdown">
            <ul class="m-0 d-flex align-items-center justify-content-center">
              <li class="nav-item ">
                <a class="nav-link nav" aria-current="page" href="#">
                  DIAMONDS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav" href="#">
                  ENGAGEMENT RINGS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav" href="#">
                  WEDDING RINGS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav" aria-current="page" href="#">
                  JEWELLERY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav" href="#">
                  GIFTS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav" href="#">
                  EDUCATION
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;