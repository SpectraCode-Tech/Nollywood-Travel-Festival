import React from "react";
import netflix from "../assets/netflix.png";
import mtn from "../assets/mtn.jpg";
import dstv from "../assets/dstv.jpg";
import guinness from "../assets/guinness.jpg";
import toyota from "../assets/toyota.jpg";
import airpeace from "../assets/airpeace.png";
import dangote from "../assets/dangote.svg";

const sponsors = [
  { name: "Netflix", image: netflix, tier: "Platinum" },
  { name: "MTN Nigeria", image: mtn, tier: "Platinum" },
  { name: "DSTV / MultiChoice", image: dstv, tier: "Gold" },
  { name: "Guinness Nigeria", image: guinness, tier: "Gold" },
  { name: "Toyota Nigeria", image: toyota, tier: "Silver" },
  { name: "Air Peace", image: airpeace, tier: "Silver" },
  { name: "Dangote Group", image: dangote, tier: "Silver" },
];

const Sponsors = () => {
  return (
    <section className="container my-5 py-5">
      <h2 className="text-center fw-bold mb-3">Our Esteemed Sponsors</h2>
      <p className="text-center mb-4">
        The Nollywood Travel Film Festival 2026 is proud to be supported by leading global and Nigerian brands that share our vision of celebrating cinema, culture, and travel. Their partnership helps us deliver a world-class festival experience.
      </p>

      {/* Sponsor Grid */}
      <div className="row g-4 text-center align-items-center">
        {sponsors.map((sponsor, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="sponsor-logo img-fluid p-3"
            />
            <h6 className="mt-2">{sponsor.name}</h6>
            <small className="text-muted">{sponsor.tier} Sponsor</small>
          </div>
        ))}
      </div>

      <p className="text-center mt-4">
        We thank our sponsors for their generous support in making the NTFF 2026 an unforgettable celebration of Nollywood, travel, and culture.
      </p>
    </section>
  );
};

export default Sponsors;