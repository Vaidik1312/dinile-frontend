import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerbackground">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                <h5>Customer Care</h5>
                <ul>
                  <li className="dots">
                    <i class="fa-solid fa-comment-dots"></i>Live Chat
                  </li>
                  <li className="dots">
                    <i class="fa-solid fa-phone"></i>1-234-567-8910
                  </li>
                  <li className="dots">
                    <i class="fa-solid fa-envelope"></i>Email Us
                  </li>
                  <li>Contact Us</li>
                  <li>FAQs</li>
                  <li>Help Topics</li>
                  <li>Order Status</li>
                  <li>Returns</li>
                  <li>Sell Your Diamond</li>
                  <li>Give Us Your Feedback</li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                <h5>Why Dinile Gems?</h5>
                <ul>
                  <li>Returns Are Free</li>
                  <li>Conflict Free Diamond </li>
                  <li>Diamond Price Matching </li>
                  <li>Diamond Upgrade Program</li>
                  <li>Free Lifetime Warranty</li>
                  <li>Free Secure Shipping </li>
                  <li>Free Boxes & Gift Card</li>
                  <li>Jewellery Insurance </li>
                  <li>Service Discounts</li>
                  <li>Students Discount</li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                <h5>About Dinile Gems</h5>
                <ul>
                  <li>Quality & Value</li>
                  <li>Diamond Sustainability </li>
                  <li>Customer Reviews </li>
                  <li>Dinile Gems Blog</li>
                  <li>Careers</li>
                  <li>Locations </li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                <h5>Diamond Shapes</h5>
                <ul>
                  <li>Round </li>
                  <li>Princess </li>
                  <li>Cushion</li>
                  <li>Oval</li>
                  <li>Emerald</li>
                  <li>Pear </li>
                  <li>Asscher</li>
                  <li>Heart</li>
                  <li>Radiant </li>
                  <li>Marquise </li>
                </ul>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                <h5>Get Exclusive Offers and News</h5>
                <form action="" class="d-flex align-items-center">
                  <input
                    type="email"
                    maxlength="70"
                    required
                    placeholder="Enter Your Email"
                  />
                  <button class="bt">SIGN UP</button>
                </form>

                <div className="facebook"></div>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-pinterest-p"></i>
                <i class="fa-brands fa-square-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;