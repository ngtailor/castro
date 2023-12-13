import React ,{useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Baner from './Baner';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {useNavigate}from 'react-router-dom'


const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history=useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();

      // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem('user');

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);

        // Check if entered username and password match the stored data
        if (email === parsedUserData.email && password === parsedUserData.password) {
            console.log(parsedUserData)
          // Successful login, perform further actions
          console.log('Login successful!');
          history('/home')
        } else {
          console.log('Invalid username or password');
        }
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    } else {
      console.log('User not found. Please sign up.');
    }
    
      };
    

  return (
    <div>
<Navbar/>
    <section class="myaccount-section">
    <div class="auto-container">
        <div class="row justify-content-center clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 inner-column">
                <div class="inner-box login-inner">
                    <div class="upper-inner">
                        <h3>Log in</h3>
                        <p>Log in to access all your resources</p>
                    </div>
                    <form action="https://azim.commonsupport.com/Castro/my-account.html" method="post" class="default-form">
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" required=""  value={email} onChange={(e) => setEmail(e.target.value)}/>
                            
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <div class="custom-controls-stacked">
                                <label class="custom-control material-checkbox">
                                    <input type="checkbox" class="material-control-input"/>
                                    <span class="material-control-indicator"></span>
                                    <span class="description">Remember me</span>
                                </label>
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <a href="home.html" type="submit" class="theme-btn-two w-100" onClick={handleSubmit}>Log In<i class="flaticon-right-1"></i></a>
                        </div>
                    </form>
                    <div class="text-center">
                        
                        <p>Don't Have an Account? <a href="/signup">Sign up Now</a></p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
<Footer/>

    </div>
    
  )
}

export default Login
