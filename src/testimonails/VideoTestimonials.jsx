import './VideoTestimonials.css';
import VideoTestimonial from "./VideoTestimonial";
import React from 'react';

// ✅ Import your local video + thumbnail
import blueVideo from "../assets/blue.mp4";
import testimonial1Thumb from "../assets/logo.jpeg";

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      videoSrc: blueVideo,   // <-- using your local file now
      thumbnail: testimonial1Thumb,
      name: "Sarah Johnson",
      role: "CEO at TechSolutions",
      quote: "This platform revolutionized our workflow."
    },
     {
      id: 2,
      videoSrc: blueVideo,   // <-- using your local file now
      thumbnail: testimonial1Thumb,
      name: "Sarah Johnson",
      role: "CEO at TechSolutions",
      quote: "This platform revolutionized our workflow."
    },
     {
      id: 3,
      videoSrc: blueVideo,   // <-- using your local file now
      thumbnail: testimonial1Thumb,
      name: "Sarah Johnson",
      role: "CEO at TechSolutions",
      quote: "This platform revolutionized our workflow."
    }
    
  ];

  return (
    <section className="testimonials-section">
      <header className="section-header">
        <h2>Customer Success Stories</h2>
        <p>Hear from businesses that transformed with our solution</p>
      </header>
      
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <VideoTestimonial
            key={testimonial.id}
            videoSrc={testimonial.videoSrc}
            thumbnail={testimonial.thumbnail}
            name={testimonial.name}
            role={testimonial.role}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoTestimonials;
