import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/ntff-logo.png';
import Slide1 from '../assets/Slide1.jpg';
import Slide2 from '../assets/Slide2.webp';
import Slide3 from '../assets/Slider-3.jpeg';
import Button from 'react-bootstrap/Button';

const Hero = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      img: Slide1,
      title: "A Journey Through Nollywood",
      subtitle: "Premieres, Stars, and Stories Await",
      paragraph:
        "Step into the vibrant world of Nollywood on January 25, 2026. Watch film premieres, meet your favorite actors, and celebrate storytelling in a festival where culture and cinema collide.",
    },
    {
      img: Slide2,
      title: "Explore, Learn, Connect",
      subtitle: "Workshops, Tours, and Panel Discussions",
      paragraph:
        "Travel across Nigeria, engage in creative workshops, and join panel discussions with industry experts. Immerse yourself in a festival made for cinephiles and adventure seekers on January 25, 2026.",
    },
    {
      img: Slide3,
      title: "Celebrate African Stories",
      subtitle: "Networking, Discoveries, and Inspiration",
      paragraph:
        "Discover untold stories from filmmakers across Africa, connect with industry leaders, and experience the ultimate festival celebrating the magic of travel and film, happening January 25, 2026.",
    }]

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} height="70px" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">NTFF2026</Nav.Link>
            <Nav.Link href="#link">Organizers</Nav.Link>
            <Nav.Link href="#link">Event Highlights</Nav.Link>
            <Nav.Link href="#link">Speakers</Nav.Link>
            <Nav.Link href="#link">Registration</Nav.Link>
            <Nav.Link href="#link">Featured Films</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">Sponsors</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

       <Carousel activeIndex={index} onSelect={handleSelect} style={{position: 'relative'}}>
        {slides.map((slide, i) =>(
          <Carousel.Item key = {i}>
            <img src={slide.img} alt="" />
            <div className="carousel-overlay"></div>
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <h5>{slide.subtitle}</h5>
              <p>{slide.paragraph}</p> 
              <Button variant="primary" style={{borderRadius: '9999px'}}><a style={{textDecoration:'none', color:'white'}} target='_blank' href='https://www.eventbrite.com/e/newcomers-festival-2026-tickets-1934354960759?aff=ebdssbdestsearch&keep_tld=1'>Book Your Ticket Now</a></Button>
            </Carousel.Caption>
               
              </Carousel.Item>

        ))}
    </Carousel>
    </>
  )
}

export default Hero
