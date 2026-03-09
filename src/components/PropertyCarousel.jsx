import React from "react";

export default function PropertyCarousel({ images }) {
  return (
    <div id="propertyCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((img, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <img src={img} className="d-block w-100" alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}
