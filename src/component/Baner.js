import React from 'react'
import shape1 from '../assets/images/shape/shape-1.png'
import logo from '../assets/images/logo.png'
import smallLogo from '../assets/images/small-logo.png'
import logo2 from '../assets/images/logo-2.png'
import sepretor1 from '../assets/images/icons/separator-1.png'
import category1 from '../assets/images/resource/category-1.png'
import category2 from '../assets/images/resource/category-2.png'
import category3 from '../assets/images/resource/category-3.png'
import category4 from '../assets/images/resource/category-4.png'
import shop1 from '../assets/images/resource/shop/shop-1.jpg'
import shop2 from '../assets/images/resource/shop/shop-2.jpg'
import shop3 from '../assets/images/resource/shop/shop-3.jpg'
import shop4 from '../assets/images/resource/shop/shop-4.jpg'
import shop5 from '../assets/images/resource/shop/shop-5.jpg'
import shop6 from '../assets/images/resource/shop/shop-6.jpg'
import shop7 from '../assets/images/resource/shop/shop-7.jpg'
import shop8 from '../assets/images/resource/shop/shop-8.jpg'
import ctabg from '../assets/images/background/cta-bg-1.jpg'
import shape2 from '../assets/images/shape/shape-2.png'
import shape3 from '../assets/images/shape/shape-3.png'

import instagram1 from '../assets/images/resource/instagram-1.jpg'
import instagram2 from '../assets/images/resource/instagram-2.jpg'
import instagram3 from '../assets/images/resource/instagram-3.jpg'
import instagram4 from '../assets/images/resource/instagram-4.jpg'
import instagram5 from '../assets/images/resource/instagram-5.jpg'
import instagram6 from '../assets/images/resource/instagram-6.jpg'


const Baner = () => {
  return (
    <div class="boxed_wrapper">    
    <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn">
      <i className="fas fa-times" />
    </div>
    <nav className="menu-box">
      <div className="nav-logo">
        <a href="index.html">
          <img src={logo2} alt="" title="" />
        </a>
      </div>
      <div className="menu-outer">
        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
      </div>
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>Chicago 12, Melborne City, USA</li>
          <li>
            <a href="tel:+8801682648101">+88 01682648101</a>
          </li>
          <li>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li>
            <a href="index.html">
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  {/* End Mobile Menu */}
  {/* banner-section */}
  <section className="banner-style-one">
  
    <div
      className="pattern-layer"
      style={{   backgroundImage: `url(${shape1})` }}
    />
    <div className="banner-carousel owl-theme owl-carousel">
      <div className="slide-item">
        <div className="auto-container">
          <div className="content-inner">
            <div className="content-box">
              <h1>
                Up To <br />
                <span>50%</span> Discount
              </h1>
              <h3>Summer Lookbook - 2020</h3>
              <p>New Modern Stylist Fashionable Men's Wear Jeans Shirt.</p>
              <div className="btn-box">
                <a href="index.html" className="theme-btn-one">
                  Explore Now
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
            <figure className="image-box image-1">
              <img src="assets/images/banner/banner-image-1.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div className="auto-container">
          <div className="content-inner">
            <div className="content-box">
              <h1>
                Up To <br />
                <span>50%</span> Discount
              </h1>
              <h3>Summer Lookbook - 2020</h3>
              <p>New Modern Stylist Fashionable Men's Wear Jeans Shirt.</p>
              <div className="btn-box">
                <a href="index.html" className="theme-btn-one">
                  Explore Now
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
            <figure className="image-box image-2">
              <img src="assets/images/banner/banner-image-2.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div className="auto-container">
          <div className="content-inner">
            <div className="content-box">
              <h1>
                Up To <br />
                <span>50%</span> Discount
              </h1>
              <h3>Summer Lookbook - 2020</h3>
              <p>New Modern Stylist Fashionable Men's Wear Jeans Shirt.</p>
              <div className="btn-box">
                <a href="index.html" className="theme-btn-one">
                  Explore Now
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
            <figure className="image-box imgae-3">
              <img src="assets/images/banner/banner-image-3.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  

  <section className="topcategory-section centred">
    <div className="auto-container">
      <div className="sec-title">
        <h2>Top Category</h2>
        <p>
          Follow the most popular trends and get exclusive items from castro
          shop
        </p>
        <span
          className="separator"
          style={{
            backgroundImage: `url(${sepretor1})`
          }}
        />
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 category-block">
          <div
            className="category-block-one wow fadeInUp animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <figure className="image-box">
              <img src={category1} alt="" />
            </figure>
            <h5>
              <a href="index.html">Women Collections</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 category-block">
          <div
            className="category-block-one wow fadeInUp animated animated"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <figure className="image-box">
              <img src={category2} alt="" />
            </figure>
            <h5>
              <a href="index.html">Kids Collections</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 category-block">
          <div
            className="category-block-one wow fadeInUp animated animated"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <figure className="image-box">
              <img src={category3} alt="" />
            </figure>
            <h5>
              <a href="index.html">Summer Collections</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 category-block">
          <div
            className="category-block-one wow fadeInUp animated animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <figure className="image-box">
              <img src={category4} alt="" />
            </figure>
            <h5>
              <a href="index.html">Gents Collections</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* topcategory-section end */}
  {/* shop-section */}
  <section className="shop-section">
    <div className="auto-container">
      <div className="sec-title">
        <h2>Our Top Collection</h2>
        <p>There are some product that we featured for choose your best</p>
        <span
          className="separator"
          style={{
            backgroundImage: `url(${sepretor1})`
          }}
        />
      </div>
      <div className="sortable-masonry">
        <div className="filters">
          <ul className="filter-tabs filter-btns centred clearfix">
            <li
              className="active filter"
              data-role="button"
              data-filter=".best_seller"
            >
              Best Seller
            </li>
            <li
              className="filter"
              data-role="button"
              data-filter=".new_arraivals"
            >
              New Arraivals
            </li>
            <li className="filter" data-role="button" data-filter=".top_rate">
              Top Rate
            </li>
          </ul>
        </div>
        <div className="items-container row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop1} alt="" />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop1}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Cold Crewneck Sweater</a>
                  <span className="price">$70.30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop2} alt="" />
                  <span className="category green-bg">New</span>
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop2}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Multi-Way Ultra Crop Top</a>
                  <span className="price">$50.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller top_rate">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop3} alt="" />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop3}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Side-Tie Tank</a>
                  <span className="price">$40.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop4} alt="" />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop4}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Cold Crewneck Sweater</a>
                  <span className="price">$60.30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller top_rate">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop5} alt="" />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop5}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Side-Tie Tank</a>
                  <span className="price">$35.30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop6} alt="" />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop6}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Must-Have Easy Tank</a>
                  <span className="price">$25.30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop7} alt="" />
                  <span className="category red-bg">Hot</span>
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop7}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Woven Crop Cami</a>
                  <span className="price">$90.30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
            <div className="shop-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={shop8} alt="" />
                  <ul className="info-list clearfix">
                    <li>
                      <a href="index.html">
                        <i className="flaticon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Add to cart</a>
                    </li>
                    <li>
                      <a
                        href={shop8}
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-search" />
                      </a>
                    </li>
                  </ul>
                </figure>
                <div className="lower-content">
                  <a href="product-details.html">Must-Have Easy Tank</a>
                  <span className="price">$20.30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-wrapper centred">
        <ul className="pagination clearfix">
          <li>
            <a href="shop.html">Prev</a>
          </li>
          <li>
            <a href="shop.html">1</a>
          </li>
          <li>
            <a href="shop.html" className="active">
              2
            </a>
          </li>
          <li>
            <a href="shop.html">3</a>
          </li>
          <li>
            <a href="shop.html">4</a>
          </li>
          <li>
            <a href="shop.html">5</a>
          </li>
          <li>
            <a href="shop.html">Next</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* shop-section end */}
  {/* cta-section */}
  <section className="cta-section">
    <div
      className="image-layer"
      style={{ backgroundImage: `url(${ctabg})` }}
    />
    <div className="auto-container">
      <div className="cta-inner centred">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: `url(${shape2})` }}
          />
          <div
            className="pattern-2"
            style={{ backgroundImage: `url(${shape3})` }}
          />
        </div>
        <h2>End of Season Clearance Sale upto 50%</h2>
        <p>
          Welcome to the new range of shaving products from master barber. We
          have over three decades of experience in the male grooming industry
        </p>
        <a href="shop.html" className="theme-btn-one">
          Shop Now
          <i className="flaticon-right-1" />
        </a>
      </div>
    </div>
  </section>
  {/* cta-section end */}
  {/* service-section */}
  <section className="service-section">
    <div className="auto-container">
      <div className="inner-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-truck" />
                </div>
                <h3>
                  <a href="index.html">Free Shipping</a>
                </h3>
                <p>Free shipping on oder over $100</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-credit-card" />
                </div>
                <h3>
                  <a href="index.html">Secure Payment</a>
                </h3>
                <p>We ensure secure payment with PEV</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-24-7" />
                </div>
                <h3>
                  <a href="index.html">Support 24/7</a>
                </h3>
                <p>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-undo" />
                </div>
                <h3>
                  <a href="index.html">30 Days Return</a>
                </h3>
                <p>Simply return it within 30 days for an exchange.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* service-section end */}
  {/* instagram-section */}
  <section className="instagram-section">
    <div className="outer-container">
      <div className="sec-title">
        <h2>Follow Us On Instagram</h2>
        <p>Excepteur sint occaecat cupidatat</p>
        <span
          className="separator"
          style={{
            backgroundImage: `url(${sepretor1})`
          }}
        />
      </div>
      <div className="six-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
        <figure className="image-box">
          <img src={instagram1} alt="" />
          <ul className="info-list clearfix">
            <li>
              <a href="index-2.html">
                <i className="flaticon-heart" />
                450
              </a>
            </li>
            <li>
              <a href="index-2.html">
                <i className="flaticon-commentary" />
                320
              </a>
            </li>
          </ul>
        </figure>
        <figure className="image-box">
          <img src={instagram2} alt="" />
          <ul className="info-list clearfix">
            <li>
              <a href="index-2.html">
                <i className="flaticon-heart" />
                450
              </a>
            </li>
            <li>
              <a href="index-2.html">
                <i className="flaticon-commentary" />
                320
              </a>
            </li>
          </ul>
        </figure>
        <figure className="image-box">
          <img src={instagram3} alt="" />
          <ul className="info-list clearfix">
            <li>
              <a href="index-2.html">
                <i className="flaticon-heart" />
                450
              </a>
            </li>
            <li>
              <a href="index-2.html">
                <i className="flaticon-commentary" />
                320
              </a>
            </li>
          </ul>
        </figure>
        <figure className="image-box">
          <img src={instagram4} alt="" />
          <ul className="info-list clearfix">
            <li>
              <a href="index-2.html">
                <i className="flaticon-heart" />
                450
              </a>
            </li>
            <li>
              <a href="index-2.html">
                <i className="flaticon-commentary" />
                320
              </a>
            </li>
          </ul>
        </figure>
        <figure className="image-box">
          <img src={instagram5} alt="" />
          <ul className="info-list clearfix">
            <li>
              <a href="index-2.html">
                <i className="flaticon-heart" />
                450
              </a>
            </li>
            <li>
              <a href="index-2.html">
                <i className="flaticon-commentary" />
                320
              </a>
            </li>
          </ul>
        </figure>
        <figure className="image-box">
          <img src={instagram6} alt="" />
          <ul className="info-list clearfix">
            <li>
              <a href="index-2.html">
                <i className="flaticon-heart" />
                450
              </a>
            </li>
            <li>
              <a href="index-2.html">
                <i className="flaticon-commentary" />
                320
              </a>
            </li>
          </ul>
        </figure>
      </div>
    </div>
  </section>
  {/* instagram-section end */}
  {/*Scroll to top*/}
  <button className="scroll-top scroll-to-target" data-target="html">
    <i className="fas fa-long-arrow-alt-up" />
  </button>
   
  
  
    
    
   
    
  
    
    
    
   
    
</div>


  
  

  )
}

export default Baner
