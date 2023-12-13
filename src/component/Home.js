import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Baner from './Baner'
import category1 from '../assets/images/resource/category-1.png'
import logo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [userName,setUseName]=useState('')
    const history =useNavigate()

    useEffect(()=>{
        const storedUserData = localStorage.getItem('user');
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUseName(parsedUserData.name)
    
        }else{
            setUseName('')
        }

    },[])


    function Logout(){
        localStorage.removeItem('user');
        history('/login')

    }


    

   
  return (
    <div class="boxed_wrapper">
        <div class="header-lower">
                <div class="auto-container">
                    <div class="outer-box">
                        <figure class="logo-box"><a href="index.html"><img src={logo} alt=""/></a></figure>
                        <div class="menu-area">
                          
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                           <li class=""><a href="">Blog</a>
                                        </li>                                    
                                        <li><a href="#" class="profile-icon"><img src={category1} style={{width:"40px", height:"40px",borderRadius:"50%"}} /> {userName ?userName:"User"}</a></li>  
                                        <li class=""><a href="/" onClick={Logout} >Logout</a>
                                        </li>              
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        
                    </div>
                </div>
            </div>
        <Baner/>
        <Footer/>
        
    </div>
  )
}

export default Home
