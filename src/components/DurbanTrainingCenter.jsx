import React from "react";
import "./PretoriaTrainingCenter.css";
import durbanImg from "../assets/images/durban.jpg"; // adjust path

export const DurbanTrainingCenter = () => (
  <section className="training-wrapper durban">
    <div className="training-card">
      <div className="training-content">
        <h1 className="training-title">Durban Training Centre</h1>
        <p className="training-subtitle">A place to be!</p>
        <p className="training-body">
          Durban (Zulu: eThekwini, from itheku meaning 'bay / lagoon') is the
          largest city in KwaZulu-Natal. It is a hub for tourism and
          manufacturing with Africa’s busiest port. ATI hosts training events
          and team building activities here — from exploring beaches and Ushaka
          Marine Life to enjoying Zulu dances and the Gateway Mall.
        </p>
        <div className="training-cta">
          <a href="/contact" className="btn-primary">Book a Session</a>
          <a href="https://www.google.com/maps/search/Durban" target="_blank" rel="noreferrer" className="btn-link">Find on map</a>
        </div>
      </div>
      <div className="training-image-wrapper">
        <img src={durbanImg} alt="Durban beach and city" className="training-image" />
        <figcaption className="training-caption">Durban</figcaption>
      </div>
    </div>
  </section>
);
