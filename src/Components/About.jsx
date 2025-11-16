import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import aboutimg from '../assets/Aboutimg.jpeg';

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.logwork.com/widget/countdown.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className='p-5 align-items-center gap-3'>
          <Col>
            <a 
              href="https://logwork.com/countdown-timer"
              className="countdown-timer"
              data-timezone="Africa/Lagos"
              data-date="2026-01-25 12:06"
            >
            &nbsp;
            </a>
          </Col>
          <Col className='text-center'>
          <h3 className='fs-1'>NTFF2026 Germany</h3>
          <p><strong>Theme: </strong>Stories That Travel</p>
          </Col>
          <Col><Button variant="primary">Register</Button></Col>
        </Row>
        <Row className='bg-black p-5 text-white align-items-center gap-3'>
          <Col style={{textAlign:'justify'}} md={6}  ><h1>About the Festival</h1>
          <p className=''>
            The Nollywood Travel Film Festival (NTFF) returns on January 25, 2026, as Nigeria’s premier 
            celebration of cinema and culture. Founded in 2020, NTFF brings together filmmakers, actors, 
            producers, travel enthusiasts, and audiences from across Africa and beyond. The festival aims 
            to bridge the worlds of film and travel by showcasing the beauty of Nigerian landscapes, 
            culture, and stories through the lens of cinema.
          </p>
          <p style={{backgroundColor:'rgb(180, 199, 7)'}} className='p-3 text-black '>Our festival is not just about films – it’s about experiences. Attendees enjoy exclusive screenings, panel discussions with Nollywood’s brightest talents, masterclasses on filmmaking and storytelling, and curated travel experiences that highlight Nigeria’s rich
            cultural heritage. Whether you are a filmmaker, a cinephile, or a traveler seeking inspiration, NTFF is the event for you.</p>
            </Col>
          <Col><img src={aboutimg} width='100%' alt="" /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;