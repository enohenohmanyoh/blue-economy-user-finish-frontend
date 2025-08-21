import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./EventDetails.css";

const API_URL = "http://localhost:8080/api/payments";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // reset loading when id changes
    fetchEventById();
  }, [id]);

  const fetchEventById = async () => {
    try {
      const response = await axios.get(`${API_URL}/get/event/${id}`);

      // Make sure eventData is always an object
      const eventData = response.data && response.data.length ? response.data[0] : response.data;

      setEvent(eventData || null);
    } catch (error) {
      console.error("Event not found", error);
      setEvent(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading event...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="event-details-container">
      <div className="event-details-card">
        <h2>Event Details</h2>
        <p><strong>Title:</strong> {event.title}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>
          <strong>Start Date:</strong>{" "}
          {event.startDate ? new Date(event.startDate).toLocaleString() : "N/A"}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {event.endDate ? new Date(event.endDate).toLocaleString() : "N/A"}
        </p>

        <div className="event-links">
          <Link to="/event/list">⬅ Back to Events</Link>
          <Link to="/event/register">📝 Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
