import React from 'react';
import './OnlineCourses.css';
import CourseCard from './CourseCard';
import onlineHeroImage from '../assets/blue-contact.webp'; 
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo.jpeg';

// Import benefit icons
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.jpg';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.jpg';

const OnlineCourses = () => {
  const navigate = useNavigate();

  const onlineCourses = [
    {
      id: 1,
      title: "Introduction to Blue Economy",
      description: "Foundational concepts of sustainable ocean resource use.",
      duration: "4 weeks",
      level: "Beginner",
      format: "Self-paced"
    },
    {
      id: 2,
      title: "Marine Pollution Solutions",
      description: "Innovative approaches to reducing ocean pollution.",
      duration: "6 weeks",
      level: "Intermediate",
      format: "Instructor-led"
    },
    {
      id: 3,
      title: "Ocean Data Analysis",
      description: "Using data science for marine conservation.",
      duration: "8 weeks",
      level: "Advanced",
      format: "Instructor-led"
    },
    {
      id: 4,
      title: "Sustainable Coastal Tourism",
      description: "Balancing tourism development with ecosystem protection.",
      duration: "5 weeks",
      level: "Intermediate",
      format: "Self-paced"
    },
    {
      id: 5,
      title: "Introduction to Blue Economy (Advanced)",
      description: "In-depth concepts of sustainable ocean resource use.",
      duration: "4 weeks",
      level: "Beginner",
      format: "Self-paced"
    },
    {
      id: 6,
      title: "Advanced Ocean Data Analysis",
      description: "Using data science for advanced marine conservation.",
      duration: "8 weeks",
      level: "Advanced",
      format: "Instructor-led"
    },
    {
      id: 7,
      title: "Marine Renewable Energy",
      description: "Exploring sustainable energy solutions from ocean resources.",
      duration: "6 weeks",
      level: "Intermediate",
      format: "Instructor-led"
    },
    {
      id: 8,
      title: "Aquaculture Sustainability",
      description: "Best practices for environmentally-friendly fish farming.",
      duration: "5 weeks",
      level: "Intermediate",
      format: "Self-paced"
    }
  ];

  const benefits = [
    {
      title: "Flexible Learning",
      desc: "Study at your own pace with self-paced or live sessions.",
      icon: icon1
    },
    {
      title: "Expert Instructors",
      desc: "Learn from leading blue economy practitioners and researchers.",
      icon: icon2
    },
    {
      title: "Interactive Content",
      desc: "Engaging videos, case studies, and hands-on projects.",
      icon: icon3
    },
    {
      title: "Global Community",
      desc: "Connect with professionals worldwide through our learning platform.",
      icon: icon4
    },
    {
      title: "Career Growth",
      desc: "Boost your skills and advance in the blue economy sector.",
      icon: icon5
    }
  ];

  const handleBookCourse = (courseTitle) => {
    navigate("/book-course", { state: { courseTitle } });
  };

  return (
    <div className="online-courses-page">
      {/* Hero Section with Image Left and Logo Right */}
      <section className="online-hero-container">
        <div className="hero-image-section">
          <img src={onlineHeroImage} alt="Blue Economy" className="hero-image" />
        </div>
        <div className="hero-content-section">
          <div className="hero-text-content">
            <h1>Online Blue Economy Courses</h1>
            <p>Learn about sustainable ocean development from anywhere in the world</p>
          </div>
          <div className="hero-logo-container">
            <img src={logoImage} alt="AIMS Logo" className="hero-logo" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="online-benefits">
        <h2>Why Learn Online With Us?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="online-courses-list">
        <h2>Available Online Courses</h2>
        <div className="courses-grid">
          {onlineCourses.map(course => (
            <div key={course.id} className="online-course-card">
              <CourseCard 
                course={course} 
                onBook={() => handleBookCourse(course.title)}
              />
              <div className="course-format">
                <span className={`format-tag ${course.format.toLowerCase().replace(' ', '-')}`}>
                  {course.format}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OnlineCourses;