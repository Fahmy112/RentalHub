import React from 'react';
import { Link } from 'react-router-dom';
import  './index.css'


const Footer = () =>    {
  
    return (
      <div className='bg-black justify-content-center first-div'>
      <div class="container">
  <footer class="py-5 main-section">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 contact-div">
        <a href='Contact'><h5>Contact Us </h5></a>
        <p >+20|| 01029924396</p>
      </div>

      <div class="col-6 col-md-2 mb-3 address-div">
        <h5>Address</h5>
        <p>Head Office: Building 26, GamalNouh ,Almaza, MisrElGdeda , Egypt Cairo, Cairo Governorate, Egypt</p>
        <ul class="nav flex-column">
          
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 links-div">
        <h5>Important Links </h5>
        <ul class="nav flex-column">
          <li><a href='About'>About Us</a></li>
          <li><a href='Work'>Jobs</a></li>
          <li><a href='Contact'>Contact Us</a></li>
          <li><a href='https://www.iubenda.com/en/help/2859-terms-and-conditions-when-are-they-needed#:~:text=%E2%80%9CTerms%20and%20Conditions%E2%80%9D%20is%20the,%E2%80%9D%20or%20%E2%80%9CLegal%20Notes%E2%80%9D.'>Terms & conditions</a></li>
          
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3 form-div">
        <form action='mailto:hagarsaed112@gmail.com' method='get' required>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="submit" value='send'>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
            <div className='footer-icons'>
                <Link to="https://www.facebook.com/GlobalHillsRealEstate"><i class="fa fa-facebook fa-2x " aria-hidden="true"></i></Link>
                <Link to="https://www.instagram.com/rental_hub1?igsh=MTc4a3JzMmNlejJ2cQ=="><i class="fa fa-instagram fa-2x " aria-hidden="true"></i></Link>
                <Link to="https://www.linkedin.com/in/essraa-zaher-506666127?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa fa-linkedin fa-2x " aria-hidden="true"></i></Link>
            </div>

    <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
      <p>© 2024,All rights reserved #Rental Hub.</p>
      <ul class="list-unstyled d-flex">

      </ul>
    </div>
  </footer>
</div>
</div>
    );
  
}

export default Footer;
