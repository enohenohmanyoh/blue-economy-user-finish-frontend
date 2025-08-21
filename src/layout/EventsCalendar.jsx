import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ React Router for navigation
import axios from "axios";
import "./EventsCalendar.css";

const API_URL = "http://localhost:8080/api/payments/get/all/event";

const EventsCalendar = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = [2023, 2024, 2025];

  // ✅ Fetch all events from backend
  const fetchEvents = async () => {
    try {
      const res = await axios.get(API_URL);
      const formattedEvents = res.data.map((event) => ({
        id: event.id,
        title: event.title,
        date: new Date(event.startDate),
        location: event.location,
        type: event.allDay ? "all-day" : "classroom",
        category: new Date(event.startDate) >= new Date() ? "upcoming" : "past",
      }));
      setEvents(formattedEvents);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    if (activeTab === "upcoming") return event.category === "upcoming" && event.date >= new Date();
    if (activeTab === "past") return event.category === "past" || event.date < new Date();
    if (activeTab === "month") return event.date.getMonth() === selectedMonth && event.date.getFullYear() === selectedYear;
    return true;
  });

  const handleMonthChange = (e) => setSelectedMonth(parseInt(e.target.value));
  const handleYearChange = (e) => setSelectedYear(parseInt(e.target.value));

  if (loading) return <p>Loading events...</p>;

  return (
    <div className="events-calendar">
      <h2 className="section-title">Events Calendar</h2>

      {/* Tabs */}
      <div className="calendar-tabs">
        <button
          className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={`tab-btn ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
        <button
          className={`tab-btn ${activeTab === "month" ? "active" : ""}`}
          onClick={() => setActiveTab("month")}
        >
          Browse by Month
        </button>
      </div>

      {/* Month Selector */}
      {activeTab === "month" && (
        <div className="month-selector">
          <select value={selectedMonth} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <option key={month} value={index}>{month}</option>
            ))}
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      )}

      {/* Events List */}
      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="day">{event.date.getDate()}</span>
                <span className="month">{months[event.date.getMonth()].substring(0, 3)}</span>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span className={`event-type ${event.type}`}>
                    {event.type === "online"
                      ? "Online"
                      : event.type === "all-day"
                      ? "All Day"
                      : "Classroom"}
                  </span>
                  <span className="event-location">{event.location}</span>
                </div>

                {/* ✅ View Details Link */}
                <Link to={`/event/detail/${event.id}`} className="register-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No events found for the selected criteria.</p>
        )}
      </div>

      <div className="calendar-footer">
        <Link to="/event/list" className="view-all-btn">View All Events</Link>
      </div>
    </div>
  );
};

export default EventsCalendar;
