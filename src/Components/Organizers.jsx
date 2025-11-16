import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import org1 from "../assets/chinedu.jpg";
import org2 from "../assets/amaka.jpg";
import org3 from "../assets/Tunde.jpg";
import org4 from "../assets/Sade.jpg";

const organizers = [
  {
    name: "Chinedu Okafor",
    role: "Festival Director",
    image: org1,
    description:
      "Award-winning Nollywood producer and travel enthusiast. Chinedu has produced over 20 acclaimed films and is passionate about promoting Nigerian cinema globally.",
    background: org1
    },
  {
    name: "Amaka Obi",
    role: "Creative Lead",
    image: org2,
    description:
      "Renowned filmmaker, media strategist, and creative director. Amaka ensures each festival edition is visually stunning and immersive.",
    background: org2
    },
  {
    name: "Tunde Adeyemi",
    role: "Event Coordinator",
    image: org3,
    description:
      "Experienced event planner and cultural ambassador. Tunde manages logistics, partnerships, and ensures a seamless festival experience for all attendees.",
    background: org3
  },
  {
    name: "Sade Balogun",
    role: "Marketing & PR Lead",
    image: org4,
    description:
      "Expert in media campaigns and influencer engagement, responsible for promoting the festival locally and internationally.",
    background: org4
    },
];

const OrganizerSlider = () => {

  return (
    <Container fluid className="p-5 bg-orange">
      <h2 className="text-center mb-4 fw-bold">
        Meet the Visionaries Behind NTFF 2026
      </h2>

      <Carousel interval={6000} pause={false}>
        {organizers.map((org, index) => (
          <Carousel.Item key={index}>
            <Row className="align-items-center placeHolder">
              <Col md={5}>
                <img src={org.image} className="d-block w-100 rounded" alt={org.name} />
              </Col>

              <Col md={7}>
                <h3 className="fw-bold mt-3 mt-md-0">{org.name}</h3>
                <h5 className="text-muted">{org.role}</h5>
                <p className="mt-3">{org.description}</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OrganizerSlider;