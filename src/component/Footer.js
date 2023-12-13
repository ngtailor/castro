import React from 'react'
import FoterLogo from '../assets/images/footer-logo-2.png'
import card1 from '../assets/images/resource/card-1.png'
import card2 from '../assets/images/resource/card-2.png'
import card3 from '../assets/images/resource/card-3.png'
import card4 from '../assets/images/resource/card-1.png'


const Footer = () => {
  return (
  <footer className="main-footer light">
    <div className="footer-top">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 big-column">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <a href="index.html">
                      <img src={FoterLogo} alt="" />
                    </a>
                  </figure>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Category</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a href="index.html">Men</a>
                      </li>
                      <li>
                        <a href="index.html">Women</a>
                      </li>
                      <li>
                        <a href="index.html">Kids</a>
                      </li>
                      <li>
                        <a href="index.html">Accessories</a>
                      </li>
                      <li>
                        <a href="index.html">Shoe</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Useful Link</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a href="index.html">News &amp; Tips</a>
                      </li>
                      <li>
                        <a href="index.html">About Us</a>
                      </li>
                      <li>
                        <a href="index.html">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="index.html">Our Shop</a>
                      </li>
                      <li>
                        <a href="index.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 big-column">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contact</h3>
                  </div>
                  <ul className="info-list clearfix">
                    <li>
                      <i className="flaticon-maps-and-flags" />
                      4708 Ruecker Wall, Kassandratown, HI
                    </li>
                    <li>
                      <i className="flaticon-phone-ringing" />
                      <a href="tel:23055873407">+2(305) 587-3407</a>
                    </li>
                    <li>
                      <i className="flaticon-email" />
                      <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget newsletter-widget">
                  <div className="widget-title">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="widget-content">
                    <p>4708 Ruecker Wall, Kassandratown, HI 97729</p>
                    <form
                      action="https://azim.commonsupport.com/Castro/contact.html"
                      method="post"
                      className="newsletter-form"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required=""
                        />
                        <button type="submit" className="theme-btn-three">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container clearfix">
        <ul className="cart-list pull-left clearfix">
          <li>
            <a href="index.html">
              <img src={card1} alt="" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <img src={card2} alt="" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <img src={card3} alt="" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <img src={card4} alt="" />
            </a>
          </li>
        </ul>
        <div className="copyright pull-right">
          <ul className="footer-social clearfix">
            <li>
              <a href="index.html">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-vimeo-v" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
          </ul>
          <p>
            <a href="index.html">Castro</a> © 2020 All Right Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
