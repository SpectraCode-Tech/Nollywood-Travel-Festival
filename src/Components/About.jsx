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
      <Container>
        <Row
        className="my-5 p-5 align-items-center text-white"
        style={{
          background: "linear-gradient(90deg, #28a745, #fd7e14)",
          borderRadius: "10px",
        }}
      >
        {/* LEFT COLUMN - Countdown & Button */}
        <Col md={6} className="text-center mb-3 mb-md-0">
          <a
            href="https://logwork.com/countdown-timer"
            className="countdown-timer d-block mb-3"
            data-timezone="Africa/Lagos"
            data-date="2026-01-25 09:00"
            style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Countdown to Festival
          </a>
          <Button variant="light" size="lg" className="fw-bold">
            Register Now
          </Button>
        </Col>

        {/* RIGHT COLUMN - Title & Theme */}
        <Col md={6} className="text-center">
          <h3 className="fs-1 fw-bold">NTFF 2026 – Germany</h3>
          <p className="fs-5">
            <strong>Theme:</strong> Stories That Travel – Celebrating Films that Inspire and Connect Cultures
          </p>
        </Col>
      </Row>``      </Container>
    </div>
  );
};

export default About;