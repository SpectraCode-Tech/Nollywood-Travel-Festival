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
    description: `<p>Chinedu Okafor is an award-winning Nollywood producer, cultural strategist, and global film advocate with more than a decade of leadership in the African film industry. He has produced over 20 critically acclaimed films, many of which have screened at international film festivals including Durban FilmMart, TIFF Africa Spotlight, and the Pan-African Film Festival.</p>
<p>
  Known for his strong storytelling and passion for elevating African cinema, Chinedu oversees NTFF’s overall vision, programming, partnerships, and international collaborations.
  He is committed to designing a festival that not only entertains but also creates economic opportunities for emerging filmmakers, strengthens continental networks, and positions Nigerian talent on the world stage.
  Chinedu’s global travel experience and industry connections make him a driving force in shaping NTFF 2026 into a globally competitive cultural event.
</p>`,
    background: org1
  },
  {
    name: "Amaka Obi",
    role: "Creative Lead",
    image: org2,
    description: 
`<p>Amaka Obi is a celebrated filmmaker and multidisciplinary creative director known for blending culture, visual art, storytelling, and innovative media techniques. With a background spanning cinematography, design, and creative consulting, Amaka has worked with top African brands, film studios, and cultural institutions.</p>
<p>At NTFF, she is responsible for the festival’s creative identity, ensuring that every touchpoint—from graphics to stage setups, exhibitions, screenings, and digital experiences—reflects excellence and originality. Her work focuses on creating immersive, emotionally compelling festival environments that captivate both audiences and industry professionals. Amaka is recognized for her ability to conceptualize bold visual narratives and transform ideas into powerful live and digital experiences that define the NTFF brand.</p>`,
    background: org2
  },
  {
    name: "Tunde Adeyemi",
    role: "Event Coordinator",
    image: org3,
    description: `<p>Tunde Adeyemi is a seasoned event planner, cultural project manager, and logistics expert with extensive experience organizing large-scale festivals, conferences, and corporate events across Nigeria and other African cities.</p>

<p>
  His role at NTFF includes managing venue logistics, scheduling, vendor relationships, hospitality, volunteer coordination, and contingency planning.
  Tunde ensures the festival operates like a well-oiled machine—from red carpet arrivals to screening sessions, panel discussions, masterclasses, and closing ceremonies.
</p>He is widely respected for his attention to detail, ability to handle high-pressure environments, and his passion for showcasing African culture through well-organized, memorable experiences.
<p>Tunde brings a strong cultural lens to his work, ensuring the festival remains welcoming, accessible, and deeply rooted in African values.</p>`,
    background: org3
  },
  {
    name: "Sade Balogun",
    role: "Marketing & PR Lead",
    image: org4,
    description: `<p>Sade Balogun is a highly respected marketing strategist, media relations expert, and PR consultant with over 7 years of experience in entertainment marketing, digital campaigns, and brand communication. She has worked with influencers, film studios, lifestyle brands, and cultural events across West Africa.</p>
    <p>At NTFF, Sade leads the festival’s publicity strategy, digital presence, brand storytelling, influencer partnerships, and international PR campaigns.
Her responsibilities include managing press conferences, coordinating media houses, developing advertising strategies, and ensuring global visibility for the festival.</p>
<p>Sade is known for crafting compelling narratives that build excitement and attract sponsors, partners, and attendees. Her innovative promotional approach ensures NTFF 2026 receives strong engagement across traditional media, social platforms, and global entertainment networks.</p>`,
    background: org4
  }
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
                <img
                  src={org.image}
                  className="d-block w-100 rounded"
                  alt={org.name}
                />
              </Col>

              <Col md={7}>
                <h3 className="fw-bold mt-3 mt-md-0">{org.name}</h3>
                <h5 className="text-muted">{org.role}</h5>

                {/* Render description safely */}
                {(() => {
                  if (org.description.includes("<p>")) {
                    return (
                      <div
                        className="mt-3"
                        dangerouslySetInnerHTML={{ __html: org.description }}
                      />
                    );
                  } else {
                    return <p className="mt-3">{org.description}</p>;
                  }
                })()}
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OrganizerSlider;