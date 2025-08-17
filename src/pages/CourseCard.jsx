import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onBook }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <p className="course-duration">{course.duration || "5 Days"}</p>

        <button className="book-btn" onClick={() => onBook?.(course)}>
          Book a Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
