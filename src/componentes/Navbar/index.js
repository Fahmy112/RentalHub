import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../media-query/media-query.css'
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
function NavbarComponent  ()   {

  return (
        <Navbar collapseOnSelect expand="lg"  className="main-navbar">
            <Container >
            <div className='navbar'>
                <Navbar.Brand href="Home" > 
                <div className="logo">
                      <Link to='Home' > 
                        <img src="/assets/images/logo.jpeg" className='logo-img' alt='imglogo'/>
                      </Link>
                  </div>
                    </Navbar.Brand> 
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                    <Navbar.Collapse id="responsive-navbar-nav" > 
                        <Nav className="me-auto ul-list"> 
                            <Nav.Link href="Home" className="list-item"> 
                                Home
                            </Nav.Link> 
                            <Nav.Link href="About" className="list-item"> 
                                About 
                            </Nav.Link> 
                            <Nav.Link href="#" className="list-item"> 
                                Destinations 
                            </Nav.Link> 
                            <Nav.Link href="#" className="list-item"> 
                                Jobs 
                            </Nav.Link> 
                            <Nav.Link href="#" className="list-item"> 
                                News 
                            </Nav.Link> 
                            <Nav.Link href="Contact" className="list-item"> 
                                Contact Us 
                            </Nav.Link> 
                        </Nav> 
                    </Navbar.Collapse> 
                </div>
            </Container>

        </Navbar>  



      // <div className="main-navbar">
      //   <div className="container">
      //      <div className='navbar'>
              // <div className="logo">
              //     <Link to='Home'> 
              //       <img src="/assets/images/logo.jpeg" className='logo-img' alt='imglogo'/>
              //     </Link>
              // </div>
      //       </div>

      //         <div >
      //         <ul className='ul-list'>
      //             <li className="list-item"><Link to="Home">Home</Link></li>
      //             <li className="list-item"><a href="#">AboutUs</a></li>
      //             <li className="list-item"><a href="#">Our Destinations</a></li>
      //             <li className="list-item"><a href="#">Jobs</a></li>
      //             <li className="list-item"><a href="#">News</a></li>
      //             <li className="list-item"><Link to="contact">Contact Us</Link></li>
      //         </ul>
      //         </div>
            
      //   </div>
          
      // </div>

    );
  }


export default NavbarComponent;
