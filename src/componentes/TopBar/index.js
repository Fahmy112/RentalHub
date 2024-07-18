import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

           
const TopBar = () => {
    return(
        <div className='main'>
            <div className='container'>  
                <div className='left'>
                <Link to="https://www.facebook.com/GlobalHillsRealEstate"><i class="fa fa-facebook fa-2x " aria-hidden="true"></i></Link>
                <Link to="https://www.instagram.com/rental_hub1?igsh=MTc4a3JzMmNlejJ2cQ=="><i class="fa fa-instagram fa-2x " aria-hidden="true"></i></Link>
                <Link to="https://www.linkedin.com/in/essraa-zaher-506666127?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa fa-linkedin fa-2x " aria-hidden="true"></i></Link>
                </div>
            
            <div className='right'>
            <Link className='link' to="contact"><i class="fa fa-map-marker " aria-hidden="true"></i>Contact Us</Link>
            </div>
            
            
            
            </div>
        </div>

    )
}
export default TopBar;