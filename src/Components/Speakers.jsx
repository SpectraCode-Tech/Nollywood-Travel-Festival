import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import spk1 from "../assets/Genevive.jpg";
import spk2 from "../assets/Afolayan-2.jpg";
import spk3 from "../assets/Funke-Akindele.jpg";
import spk4 from "../assets/Ngozi-Onwurah.webp";
import spk5 from "../assets/Richard-Mofe-Damijo.jpg";
import spk6 from "../assets/mo-abudu.jpeg";

const speakers = [
  {
    name: "Genevieve Nnaji",
    role: "Actress & Producer",
    image: spk1,
    description:
      "Acclaimed actress and producer known for her impact in Nollywood and beyond."
  },
  {
    name: "Kunle Afolayan",
    role: "Director & Screenwriter",
    image: spk2,
    description:
      "Celebrated director blending Nigerian culture with global cinematic stories."
  },
  {
    name: "Funke Akindele",
    role: "Actress & Entrepreneur",
    image: spk3,
    description:
      "Beloved actress inspiring millions with her talent and business excellence."
  },
  {
    name: "Ngozi Onwurah",
    role: "Filmmaker & Travel Advocate",
    image: spk4,
    description:
      "International filmmaker bridging African culture through powerful films."
  },
  {
    name: "Richard Mofe-Damijo (RMD)",
    role: "Veteran Actor & Cultural Icon",
    image: spk5,
    description:
      "Legendary actor and cultural influencer with decades of contribution to Nigerian cinema."
  },
  {
    name: "Mo Abudu",
    role: "Media Executive & Producer",
    image: spk6,
    description:
      "Founder of EbonyLife Studios, globally recognized for elevating African storytelling."
  }
];

const SpeakerCarousel = () => {
  const slidesCount = Math.ceil(speakers.length / 3);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-3">Featured Guests</h2>
      <p className="text-center mb-4">
        Our guest speakers offer insights, inspiration, and unforgettable experiences.
        Learn directly from the visionaries shaping Nollywood and Africa’s film industry.
      </p>

      <Carousel interval={4000} pause={false}>
        {[...Array(slidesCount)].map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="g-4">
              {speakers
                .slice(slideIndex * 3, slideIndex * 3 + 3)
                .map((speaker, idx) => (
                  <Col md={4} key={idx}>
                    <div className="speaker-card position-relative overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-100 rounded shadow"
                        style={{ height: "350px", objectFit: "cover" }}
                      />

                      {/* DEFAULT VIEW */}
                      <div className="speaker-info-default">
                        <h5 className="fw-bold">{speaker.name}</h5>
                        <small className="text-warning">{speaker.role}</small>
                      </div>

                      {/* HOVER VIEW */}
                      <div className="speaker-info-hover">
                        <h5 className="fw-bold">{speaker.name}</h5>
                        <small className="text-warning">{speaker.role}</small>
                        <p className="mt-2">{speaker.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default SpeakerCarousel;






