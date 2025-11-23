import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import whatsapp from '../assets/whatsapp.png';
import wordpress from '../assets/wordpress.png';
import facebook from '../assets/facebook.png';

function Footer() {
    return(
        <>
        <Container fluid className='contact bg-orange'>
        <Row className='p-5 gap-5'>
          <Col>
          <h2>Send Us a Message!</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <label>Message</label>
         <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px', marginBottom: "20px" }}
        />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </Col>
          <Col className=''>
        <h2>Get In Touch</h2>
        <p><strong>Email: </strong> <br />info@ntffestival.com</p>
        <p><strong>Phone: </strong><br />+234 901 234 5678</p>
        <p><strong>Social Media: </strong><br />
        <img src={whatsapp} style={{width:'60px', paddingRight:'10px'}} alt="" />
        <img src={wordpress} style={{width:'60px', paddingRight:'10px'}} alt="" />
        <img src={facebook} style={{width:'60px', paddingRight:'10px'}} alt="" />
        </p>
          </Col>
        </Row>
        <Row className='bg-black p-3'>
            <p className='text-center text-white'>© 2026 Nollywood Travel Film Festival. All rights reserved. Connect with us to stay updated on upcoming events, film submissions, and exclusive festival news.</p>
        </Row>
        </Container>
        </>
    )
}

export default Footer