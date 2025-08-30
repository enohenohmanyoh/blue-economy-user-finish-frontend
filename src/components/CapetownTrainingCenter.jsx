import React from "react";
import "./PretoriaTrainingCenter.css";
import capetownImg from "../assets/images/capetown.jpg"; // adjust path

export const CapetownTrainingCenter = () => (
  <section className="training-wrapper capetown">
    <div className="training-card">
      <div className="training-content">
        <h1 className="training-title">Cape Town Training Centre</h1>
        <p className="training-subtitle">Where mountains meet the ocean</p>
        <p className="training-body">
          Cape Town’s centre blends learning with inspiration — workshops
          overlooking Table Mountain and vibrant city life.
        </p>
        <div className="training-cta">
          <a href="/contact" className="btn-primary">Book a Session</a>
          <a href="https://www.google.com/maps/search/Cape%20Town" target="_blank" rel="noreferrer" className="btn-link">Find on map</a>
        </div>
      </div>
      <div className="training-image-wrapper">
        <img src={capetownImg} alt="Cape Town view" className="training-image" />
        <figcaption className="training-caption">Cape Town</figcaption>
      </div>
    </div>
  </section>
);
