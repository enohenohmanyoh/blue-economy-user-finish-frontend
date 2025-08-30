// WorkshopGallery.jsx
import React from "react";
import "./WorkshopGallery.css";
import logoImage from '../assets/logo.jpeg';

const workshops = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the fundamentals of React and build your first app.",
    imageUrl: logoImage,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into ES6+, closures, and async programming.",
    imageUrl: logoImage,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Master the essentials of user interface and experience design.",
    imageUrl: logoImage,
  },
  {
    id: 4,
    title: "Node.js & Express",
    description: "Build scalable backend applications with Node.js and Express.",
    imageUrl: logoImage,
  },
  {
    id: 5,
    title: "React Basics",
    description: "Learn the fundamentals of React and build your first app.",
    imageUrl: logoImage,
  },
  {
    id: 6,
    title: "Advanced JavaScript",
    description: "Deep dive into ES6+, closures, and async programming.",
    imageUrl: logoImage,
  },
  {
    id: 7,
    title: "UI/UX Design",
    description: "Master the essentials of user interface and experience design.",
    imageUrl: logoImage,
  },
  {
    id: 8,
    title: "Node.js & Express",
    description: "Build scalable backend applications with Node.js and Express.",
    imageUrl: logoImage,
  }
];

const WorkshopGallery = () => {
  return (
    <div className="gallery-container">
      <h2>Training Workshops</h2>
      <div className="gallery-grid">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="gallery-item">
            <img src={workshop.imageUrl} alt={workshop.title} />
            <h3>{workshop.title}</h3>
            <p>{workshop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopGallery;