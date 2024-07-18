import React from 'react';
import './index.css'
import BgVideo from './contact.mp4'

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className='contact'>
      <video autoPlay loop muted className="bg-vid"><source src={BgVideo} type="video/mp4" /> </video>
    <div className='container'>
      
      
    <Form className='contact-form'>
      <h1 >Contact Us</h1>
      <div className='d-flex'>
      <Form.Group className="name-form1 mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="name-form2 mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Second Name" />
      </Form.Group>
      </div>

      <Form.Group className="email-form mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="phonenumber-form mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="tel" placeholder=" Phone Number" />
      </Form.Group>

      <Form.Group className="email-form mb-3  " controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com " />
      </Form.Group>

      <div className= ' d-flex '>
      <Dropdown>
      <Dropdown.Toggle className='button1 ' variant="success" id="dropdown-basic">
        Your Favourite Type
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown1'>
        <Dropdown.Item href="#/action-1">Villa</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Twin House</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Town House</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pent House</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Duplex</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Apartment</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className='button1' variant="success" id="dropdown-basic">
        Your Favourite Area
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown1'>
        <Dropdown.Item href="#/action-1">New Cairo</Dropdown.Item>
        <Dropdown.Item href="#/action-2">October</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mostakbal City</Dropdown.Item>
        <Dropdown.Item href="#/action-3">North Coast</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ain ELSohkna</Dropdown.Item>
        <Dropdown.Item href="#/action-3">New Capital</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </div>
      <Form.Group className="mb-3 mt-3  " controlId="exampleForm.ControlTextarea1">
        <Form.Control  as="textarea" rows={3} placeholder="Your Descison"/>
            
            <div className='submit'>
            <Button className='submit-button txt-align-c mt-3' variant="outline-success">Submit</Button>
            </div>
      </Form.Group>
      
    </Form>
    
    </div>
    </div>
  );
}

export default Contact;
