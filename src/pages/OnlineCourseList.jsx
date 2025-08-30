import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CourseList.css";

const API_URL = "http://localhost:8080/api/payments";

const OnlineCourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API_URL}/get/all/online/course`);
      setCourses(response.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  return (
    <div className="course-container">
      <h2 className="section-title">All Online Courses</h2>

      {courses.length === 0 ? (
        <p className="no-courses">No online courses available.</p>
      ) : (
        <div className="course-list">
          {courses.map((c) => (
            <div className="course-card" key={c.id}>
              <div className="course-info">
                <h3>{c.courseTitle}</h3>
                <p><strong>Code:</strong> {c.courseCode}</p>
                <p><strong>Category:</strong> {c.category}</p>
                <p><strong>Instructor:</strong> {c.instructorName}</p>
                <p><strong>Duration:</strong> {c.duration}</p>
              </div>
              <Link className="details-link" to={`/course/detail/${c.id}`}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OnlineCourseList;
