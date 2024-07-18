import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () =>    {
    return (
        
      <div className="main-navbar">
        <div className="container">
           <div className='navbar'>
              <div className="logo">
                  <Link to='Home'> 
                    <img src="/assets/images/logo.jpeg" className='logo-img' alt='imglogo'/>
                  </Link>
              </div>
            </div>

              <div >
              <ul className='ul-list'>
                  <li className="list-item"><Link to="Home">Home</Link></li>
                  <li className="list-item"><a href="#">AboutUs</a></li>
                  <li className="list-item"><a href="#">Our Destinations</a></li>
                  <li className="list-item"><a href="#">Jobs</a></li>
                  <li className="list-item"><a href="#">News</a></li>
                  <li className="list-item"><Link to="contact">Contact Us</Link></li>
              </ul>
              </div>
            
        </div>
          
      </div>

    );
  
}

export default Navbar;
