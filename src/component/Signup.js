import React, { useState,useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const history =useNavigate()

 


 

  
    
     


  
  


  const handleSignup = async (e) => {
    e.preventDefault()
    
    // Encrypt the API key

    const data={
      name:name,
      email:email,
      password:password

    }

    localStorage.setItem('user', JSON.stringify(data));
    history('/login')

  };
  return (
    <div>
    <Navbar/>
       <section className="myaccount-section">
      <div className="auto-container">
        <div className="row justify-content-center clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
            <div className="inner-box signup-inner">
              <div className="upper-inner">
                <h3>Create An Account</h3>
                <p>Log in to access all your resources</p>
              </div>
              <form className="default-form" >
                <div className="form-group">
                  <label>Your name</label>
                  <input type="text" name="name" required="" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email" required="" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" required="" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <div className="custom-controls-stacked">
                    <label className="custom-control material-checkbox">
                      <input type="checkbox" className="material-control-input" />
                      <span className="material-control-indicator"></span>
                      <span className="description">I agree to terms &amp; Policy.</span>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button  className="theme-btn-two w-100" onClick={handleSignup}>
                    Sign Up<i className="flaticon-right-1"></i>
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>
                  Already have an account? <a href="/login">Log In Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </div>
   
  );
};

export default Signup;
