import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.webp";
import gal6 from "../assets/gal6.jpg";
import gal7 from "../assets/gal7.jpg";
import gal8 from "../assets/gal8.jpg";
import gal9 from "../assets/gal9.jpg";
import gal10 from "../assets/gal5.jpg";



// Put all images in an array
const images = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Normal IF-statement logic for modal
  let showModal;
  if (selectedImage) {
    showModal = true;
  } else {
    showModal = false;
  }

  return (
    <section className=" py-5 bg-black">
      <h2 className="text-center fw-bold mb-4">Event Gallery</h2>
      <p className="text-center mb-4">
        Explore moments from our previous festival editions.
      </p>

      {/* Masonry Gallery Grid */}
      <div className="container masonry-gallery">
        {images.map((img, index) => (
          <div className="masonry-item" key={index}>
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="img-fluid rounded shadow gallery-img"
              style={{ cursor: "pointer", width: "100%" }}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      <Modal
        show={showModal}
        onHide={() => setSelectedImage(null)}
        centered
        size="lg"
      >
        <Modal.Body className="p-0">
          <img
            src={selectedImage}
            alt="Preview"
            className="img-fluid w-100"
            style={{ borderRadius: "6px" }}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;