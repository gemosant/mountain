import React from 'react'
import "./Footer.scss"
import {Input } from 'reactstrap';
import mountain from "../../assets/mountain.png"

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4"><label>Sign up for news,sales or catalog</label></div>
        <div className="col-md-4"> <Input placeholder="Enter your email address" /></div>
        <div className="col-md-2"><a href="#" className="link">FIND A STORE</a></div>
        <div className="col-md-2"><a href="#" className="link">TAKE A TEST RIDE</a></div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ul>
          <h4>About Us</h4>
            <li><a href="#">About Burton</a></li>
            <li><a href="#">Remembering Jake</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Chill Foundation</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Performer Program</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
          <h4>Discover</h4>
            <li><a href="#">Learn To Ride</a></li>
            <li><a href="#">Riglet Snowboarding</a></li>
            <li><a href="#">The Stash</a></li>
            <li><a href="#">The Mountain Blog</a></li>
            <li><a href="#">#Mountain Team</a></li>
            <li><a href="#">COVID-19 Statement</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">2021 Winter Lookbook</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
          <h4>Self Service</h4>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Spare Parts</a></li>
            <li><a href="#">Size Charts</a></li>
            <li><a href="#">Customer Reviews</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
          <h4>Get Help</h4>
            <li><a href="#">Help & FAQS</a></li>
            <li><a href="#">Email Us</a></li>
            <li><a href="#">(800)000-0000</a></li>
          </ul>
        </div>
        <div className="col-md-1">
          <img src={mountain}/>
        </div>
      </div>
      <div className="row end">
        <div className="col-md-1"><span class="region">US/EN</span></div>
        <div className="col-md-3"><span class="copy">&copy;2021 Mountain Snowboards</span></div>
        <div className="col-md-4 icon">
          <i class="fab fa-facebook-f f"></i>
          <i class="fab fa-twitter f"></i>
          <i class="fab fa-youtube f"></i>
          <i class="fab fa-instagram f"></i>
          <i class="fab fa-pinterest-p f"></i>
        </div>
        <div className="col-md-4 terms">
          <span><a href="#">Terms & Conditions</a> </span>
          <span> <a href="#">Privacy</a></span>
          <span><a href="#"> User Content</a></span>
        </div>
      </div>
      
  </>
  )
}

export default Footer;
