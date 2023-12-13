import React from 'react'
import logo from '../assets/images/logo.png'
import smalllogo from '../assets/images/small-logo.png'

const Navbar = () => {
    const lastPartOfUrl = window.location.href.split('/').pop()


    function blogSection(){
        return(
            <li className="">
            <a href="#">Blog</a>
          </li>
        )
    }
 

  return (
    <header className="main-header">
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <figure className="logo-box">
            <a href="index.html">
              <img src={logo} alt="castro" />
            </a>
          </figure>
          <div className="menu-area">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li className="current">
                    <a href="/home">Home</a>
                  </li>
                 { lastPartOfUrl !== 'signup' &&  lastPartOfUrl !== 'login' && blogSection()}
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/signup">Signup</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/*sticky Header*/}
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box clearfix">
          <div className="logo-box pull-left">
            <figure className="logo">
              <a href="index.html">
                <img src={smalllogo} alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area pull-right">
            <nav className="main-menu clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
    
    
  )
}

export default Navbar
