import React from "react";
import "./PretoriaTrainingCenter.css";
import pretoriaImg from "../assets/images/pretoria.jpg"; // adjust relative path

export const PretoriaTrainingCenter = () => (
  <section className="training-wrapper pretoria">
    <div className="training-card">
      <div className="training-content">
        <h1 className="training-title">Pretoria Training Centre</h1>
        <p className="training-subtitle">Professional upskilling & certification</p>
        <p className="training-body">
          Hands-on workshops, expert trainers, and flexible schedules for both
          individuals and corporate groups.
        </p>
        <div className="training-cta">
          <a href="/contact" className="btn-primary">Book a Session</a>
          <a href="https://www.google.com/maps/search/Pretoria" target="_blank" rel="noreferrer" className="btn-link">Find on map</a>
        </div>
      </div>
      <div className="training-image-wrapper">
        <img src={pretoriaImg} alt="Pretoria skyline" className="training-image" />
        <figcaption className="training-caption">Pretoria</figcaption>
      </div>
    </div>
  </section>
);
