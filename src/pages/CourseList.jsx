import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CourseList.css";

const API_URL = "http://localhost:8080/api/payments";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const response = await axios.get(`${API_URL}/get/all-courses`);
    setCourses(response.data);
  };

  return (
    <div className="course-container">
      <h2>All Courses</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Code</th>
            <th>Title</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Created At</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.courseCode}</td>
              <td>{c.courseTitle}</td>
              <td>{c.category}</td>
              <td>{c.duration}</td>
              <td>{new Date(c.createdAt).toLocaleString()}</td>
              <td>
                <Link to={`/details/${c.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
