import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TeamBuilder.css";
import logo from "../assets/images/logo.jpg";

const API_URL = "http://localhost:8080/api/team"; // replace with your API endpoint

const TeamBuilder = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${API_URL}/get/all`);
      if (Array.isArray(response.data) && response.data.length > 0) {
        setTeamMembers(response.data);
      } else {
        // fallback dummy data if API returns empty array
        setTeamMembers(dummyTeamData);
      }
    } catch (error) {
      console.error("Error fetching team members:", error);
      // fallback dummy data on error
      setTeamMembers(dummyTeamData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      {loading ? (
        <p>Loading team members...</p>
      ) : (
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img
                src={member.photoUrl}
                alt={member.name}
                className="team-photo"
              />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Dummy data fallback
const dummyTeamData = [
  {
    id: 1,
    name: "John Doe",
    role: "Manager",
    email: "john@example.com",
    photoUrl: logo,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Developer",
    email: "jane@example.com",
    photoUrl: logo,
  },
  {
    id: 3,
    name: "Mark Wilson",
    role: "Designer",
    email: "mark@example.com",
    photoUrl: logo,
  },
];

export default TeamBuilder;
