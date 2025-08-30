import React from "react";
import "./PretoriaTrainingCenter.css";
import sandtonImg from "../assets/images/sandton.jpg"; // adjust path

export function SantonTrainingCenter() {
  return (
    <section className="training-wrapper">
      <div className="training-card">
        <div className="training-content">
          <div>
            <h1 className="training-title">Sandton Training Centre</h1>
            <p className="training-subtitle">The financial hub of South Africa</p>
            <p className="training-body">
              Located in Johannesburg’s vibrant business district, Sandton Training Centre
              offers premium corporate workshops, leadership development programs, and
              networking opportunities in the heart of Africa’s economic powerhouse.
            </p>
          </div>
          <div className="training-cta">
            <a href="/contact" className="btn-primary">Book a Session</a>
            <a
              href="https://www.google.com/maps/search/Sandton+training+centre"
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              Find on map
            </a>
          </div>
        </div>
        <div className="training-image-wrapper">
          <img src={sandtonImg} alt="Sandton skyline" className="training-image" />
          <figcaption className="training-caption">Sandton</figcaption>
        </div>
      </div>
    </section>
  );
}
