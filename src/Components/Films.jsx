
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import film1 from "../assets/films/the-fire-and the-moth.webp";
import film2 from "../assets/films/Labake-Olododo.webp";
import film3 from "../assets/films/owanbe.jpg";
import film4 from "../assets/films/Mikolo.jpg";
import film5 from "../assets/films/a-green-forever.jpg";
import film6 from "../assets/films/osamede.jpg";
import film7 from "../assets/films/Everybody_Loves_Jenifa_cover.jpg";
import film8 from "../assets/films/Ori-Rebirth-official-poster.jpg";

const films = [
  {
    title: "The Fire and The Moth",
    director: "Taiwo Egunjobi",
    genre: "Drama / Suspense",
    description:
      "In a shadowy border town, smuggler Saba steals a sacred artifact, triggering a violent and morally complex chase.",
    image: film1,
  },
  {
    title: "Labake Olododo",
    director: "Biodun Stephen",
    genre: "Epic / Cultural Drama",
    description:
      "Set in a Yoruba community, Labake stands against societal injustice and challenges long-held traditions.",
    image: film2,
  },
  {
    title: "Owambe Thieves",
    director: "Adeoluwa Owu",
    genre: "Crime / Comedy",
    description:
      "A couple’s plan to rob a lavish party spirals into a series of secrets, betrayals, and unexpected twists.",
    image: film3,
  },
  {
    title: "Mikolo",
    director: "Niyi Akinmolayan",
    genre: "Family / Fantasy",
    description:
      "Siblings discover a magical forest of Irumole and the power of an ancient amulet.",
    image: film4,
  },
  {
    title: "A Green Fever",
    director: "Taiwo Egunjobi",
    genre: "Neo-noir / Thriller",
    description:
      "Set in 1980s Nigeria, a tense story of betrayal, survival, and political unrest unfolds.",
    image: film5,
  },
  {
    title: "Osamede",
    director: "James Omokwe",
    genre: "Historical / Mythological Drama",
    description:
      "Inspired by Edo mythology, a village struggles to reconcile history, legacy, and power.",
    image: film6,
  },
  {
    title: "Everybody Loves Jenifa",
    director: "Funke Akindele & Tunde Olaoye",
    genre: "Comedy / Drama",
    description:
      "Jenifa’s girls’ trip to Ghana goes awry when a bag of drugs is mistakenly left behind.",
    image: film7,
  },
  {
    title: "Ori: The Rebirth",
    director: "Muyiwa Ademola, Tope Adebayo, Adebayo Tijani",
    genre: "Spiritual / Folklore",
    description:
      "A woman haunted by dark dreams embarks on a journey to reclaim her ancestral power.",
    image: film8,
  },
];

const FeaturedFilms = () => {
  const slidesCount = Math.ceil(films.length / 4); // 4 films per slide

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-3">Featured Films</h2>
      <p className="text-center mb-4">
        At NTFF 2026, we spotlight a selection of real Nollywood films that are making waves — 
        from thrillers and drama to cultural epics and fantasy. These films reflect the diversity, 
        creativity, and storytelling power of contemporary Nigerian cinema.
      </p>

      <Carousel interval={5000} pause={false}>
        {[...Array(slidesCount)].map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="g-4">
              {films.slice(slideIndex * 4, slideIndex * 4 + 4).map((film, idx) => (
                <Col key={idx} lg={3} md={6} sm={12} className="position-relative">
                  <div className="film-card position-relative">
                    <img
                      src={film.image}
                      alt={film.title}
                      className="w-100 rounded shadow"
                      style={{ height: "350px", objectFit: "cover" }}
                    />

<div className="film-overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <h5 className="fw-bold text-white">{film.title}</h5>
                      <small className="text-warning">{film.director} | {film.genre}</small>
                      <p className="text-white mt-2">{film.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedFilms;