import React from "react";
import "../css/Navbar.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Navbar = () => {


  return (
    <>
      {/* <nav className="bgcolor">
        <div className="nav-container d-flex align-items-center justify-content-between">
          <div className="logo-body">
            <a className="navbar-brand">
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
          <div
            className="d-flex align-items-center gap-2"
            id="navbarSupportedContent"
          >
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
      </nav> */}

      {/* <nav class="bg-color pt-1 pb-1 navbar navbar-expand-lg navbar-light">
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
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="m-0 d-flex align-items-center justify-content-center">
              <li class="nav-item">
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

      <nav className="bg-color pt-1 pb-1 navbar navbar-expand-lg navbar-light">
        <div className="nav-container">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="m-0 d-flex align-items-center justify-content-center">
              <li className="nav-item">
                <a className="nav-link nav" aria-current="page" href="#">
                  DIAMONDS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="#">
                  ENGAGEMENT RINGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="#">
                  WEDDING RINGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" aria-current="page" href="#">
                  JEWELLERY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="#">
                  GIFTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav" href="#">
                  EDUCATION
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

 
<nav class="navbar bgcolor">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <a className="navbar-brand">
              <img src={require("../Assets/Logo.png")} alt="" />
            </a>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

 
    </>
  );
};

export default Navbar;
