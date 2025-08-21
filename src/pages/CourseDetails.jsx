import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CourseDetails.css"; // ✅ import new CSS

const API_URL = "http://localhost:8080/api/payments";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseById();
  }, [id]);

  const fetchCourseById = async () => {
    try {
      const response = await axios.get(`${API_URL}/get/course/${id}`);
      setCourse(response.data);
    } catch (error) {
      console.error("Course not found", error);
    }
  };

  if (!course) return <p>Loading course...</p>;

  return (
    <div className="course-details-container">
      <div className="course-details-card">
        <h2>Course Details</h2>
        <p><strong>Code:</strong> {course.courseCode}</p>
        <p><strong>Title:</strong> {course.courseTitle}</p>
        <p><strong>Category:</strong> {course.category}</p>
        <p><strong>Duration:</strong> {course.duration}</p>

        <div className="course-links">
          <Link to="/course/list">⬅ Back to Courses</Link>
          <Link to="/form/payment">📝 Apply for this Course</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
