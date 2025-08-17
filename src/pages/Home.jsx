import React from "react"; 
import './Home.css';

import CourseCard from "./CourseCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

// ✅ Import images & video
import courseImg from "../assets/p1.jpg";
import aboutImage from '../assets/p4.webp';
import p5 from '../assets/p5.webp';
import p6 from '../assets/p6.png';
import logoImage from '../assets/logo.jpeg';

import blueVideo from "../assets/blue.mp4";

const Home = () => {
  const navigate = useNavigate();

  const featuredCourses = [
    {
      id: 1,
      title: "Marine Renewable Energy",
      description: "Explore sustainable energy solutions from our oceans.",
      image: courseImg,
      duration: "5 Days",
    },
    {
      id: 2,
      title: "Sustainable Fisheries",
      description: "Learn about responsible fishing practices.",
      image: p5,
      duration: "3 Days",
    },
    {
      id: 3,
      title: "Ocean Conservation",
      description: "Protecting marine ecosystems for future generations.",
      image: p6,
      duration: "4 Days",
    },
  ];

  const sliderImages = [
    { id: 1, src: courseImg, alt: "Maritime Studies" },
    { id: 2, src: aboutImage, alt: "Blue Economy" },
    { id: 3, src: p5, alt: "Maritime Studies" },
    { id: 4, src: aboutImage, alt: "Blue Economy" },
    { id: 5, src: p6, alt: "Blue Economy" },
  ];

  // ✅ handle "Book a Course" click
  const handleBookCourse = (courseTitle) => {
    navigate("/book-course", { state: { courseTitle } });
  };

  return (
    <div className="home-page">
      {/* Logo and Image Slider Side by Side */}
      <div className="logo-slider-container">
        {/* Logo on the right */}
        <div className="logo-container">
          <img 
            src={logoImage} 
            alt="African Institute of Maritime Studies Logo" 
            className="institute-logo"
          />
        </div>
        
        {/* Image Slider with Overlay Text on the left */}
        <div className="image-slider-container relative">
          <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg bg-black/50 px-6 py-4 rounded-2xl">
              Welcome to African Institute of Maritime Studies
            </h3>
            
   
          </div>

          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={5000}
            showArrows={true}
            showIndicators={true}
          >
            {sliderImages.map((image) => (
              <div key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="slider-image"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Welcome / Intro Section */}
      <div className="welcome-message">
        <div className="welcome-box">
          <p>
            The <span className="highlight-yellow">African Institute of Maritime Studies (AIMS) </span> 
            is the central hub dedicated to building capacity to harness the economic 
            opportunities of Africa's <span className="highlight-cyan">blue economy</span>.
          </p>
          <p>
            Our approach combines robust academic programs, practical research, and 
            experiential learning through collaborative program design with stakeholders.
          </p>
          <p>
            This enables us to cultivate the necessary skills to support both economic 
            development and the preservation of Africa's marine ecosystems, resources, 
            and biodiversity.
          </p>
        </div>
      </div>

      {/* Blue Economy Section */}
      <section className="blue-economy-intro">
        <div className="intro-content">
          <h2>What is Blue Economy?</h2>
          <p>
            The Blue Economy refers to the sustainable use of ocean resources
            for economic growth, improved livelihoods, and jobs while preserving
            the health of ocean ecosystems.
          </p>
          <div className="video-container">
            <video
              src={blueVideo}
              controls
              className="blue-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <h2>COMING COURSES|TRAINING</h2>
        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onBook={(selectedCourse) => handleBookCourse(selectedCourse.title)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;