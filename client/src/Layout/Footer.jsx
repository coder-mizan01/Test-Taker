import React from 'react';
import { Link } from 'react-router-dom';

//icons
import {BiLogoFacebook} from "react-icons/bi";
import {FaLinkedinIn} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai";

//css
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <>
     
     <section id='footer'>

       <div className="company">
         <h2>company</h2>
         <div className="company-details">
         <Link>About Us</Link>
         <Link>Blog</Link>
         <Link>Careear</Link>
         <Link>Academy</Link>
         <Link>Product</Link>
           
         </div>
       </div>

        <div className="service-section">
            <h2>services</h2>

            <div className="service-details">
               <Link to='/'>Take Exam</Link>
               <Link to='/'>Give Exam</Link>
               <Link to='/'>Make Question</Link>
               <Link to='/'>publish Result</Link>
               <Link to='/'>others</Link>
            </div>

        </div>

        <div className="contact-inforamtion">
            <h2>contacts</h2>
            <div className="contact-details">
             <Link to='/'>Call : 0880139896</Link>
           <Link to='/'>Email : TestTaker@gmail.com</Link>
               <Link to='/'>Address : 14/8 Gulshan 1 , Dhaka 1214</Link>
               <Link to='/'>office : open at (10pm to 6pm)</Link>
            </div>
        </div>

        <div className="getin-touch">
         <h2><Link className='footer-logo' to='/'>Test Taker</Link></h2>

            <div className="getin-touch-details">
            <p>Get update with us regularly</p>
                <div className="footer-input">
                   <input type="email" placeholder='Email' />
                   <button ><AiOutlineArrowRight /></button>
                </div>
                <div className="social-media">
                    <BiLogoFacebook className='facebook' style={{margin:'8px'}} />
                    <FaLinkedinIn className='linked-in' style={{margin:'8px'}} />
                    <FaTwitter className='twitter'  style={{margin:'10px'}}/>
                </div> 
            </div>
        </div>
     </section>
    
    </>
  )
}

export default Footer