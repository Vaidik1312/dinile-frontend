import React from "react";
import "../css/Navbar.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bgcolor">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={require("../Assets/Logo.png")} />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            <form className="d-flex inputbox">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For Jewellery"
                aria-label="Search"
              />
              <i class="fa-solid fa-magnifying-glass iconsearch"></i>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={require("../Assets/flag.png")} />
                  English,USD
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-heart"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-cart-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg ">
        <div class="container ">
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
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto mb-2 px-10 mb-lg-0 d-flex gap-5">
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