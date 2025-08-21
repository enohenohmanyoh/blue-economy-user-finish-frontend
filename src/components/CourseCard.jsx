import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default CourseCard;