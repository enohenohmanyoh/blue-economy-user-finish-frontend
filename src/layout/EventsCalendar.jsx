import React, { useState } from 'react';
import './EventsCalendar.css';

const EventsCalendar = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Sample event data - in a real app, this would come from an API
  const events = [
    {
      id: 1,
      title: "Leadership Development Programme",
      date: new Date(2023, 10, 15),
      location: "Johannesburg, South Africa",
      type: "classroom",
      category: "upcoming"
    },
    {
      id: 2,
      title: "Digital Transformation Workshop",
      date: new Date(2023, 9, 20),
      location: "Online",
      type: "online",
      category: "upcoming"
    },
    {
      id: 3,
      title: "Project Management Fundamentals",
      date: new Date(2023, 8, 5),
      location: "Cape Town, South Africa",
      type: "classroom",
      category: "past"
    },
    {
      id: 4,
      title: "Advanced Data Analytics",
      date: new Date(2023, 11, 10),
      location: "Online",
      type: "online",
      category: "upcoming"
    },
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = [2022, 2023, 2024];

  const filteredEvents = events.filter(event => {
    if (activeTab === 'upcoming') {
      return event.category === 'upcoming' && event.date >= new Date();
    } else if (activeTab === 'past') {
      return event.category === 'past' || event.date < new Date();
    } else if (activeTab === 'month') {
      return event.date.getMonth() === selectedMonth && 
             event.date.getFullYear() === selectedYear;
    }
    return true;
  });

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  return (
    <div className="events-calendar">
      <h2 className="section-title">Events Calendar</h2>
      
      <div className="calendar-tabs">
        <button 
          className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Events
        </button>
        <button 
          className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Events
        </button>
        <button 
          className={`tab-btn ${activeTab === 'month' ? 'active' : ''}`}
          onClick={() => setActiveTab('month')}
        >
          Browse by Month
        </button>
      </div>

      {activeTab === 'month' && (
        <div className="month-selector">
          <select value={selectedMonth} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <option key={month} value={index}>{month}</option>
            ))}
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      )}

      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="day">{event.date.getDate()}</span>
                <span className="month">{months[event.date.getMonth()].substring(0, 3)}</span>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <span className={`event-type ${event.type}`}>
                    {event.type === 'online' ? 'Online' : 'Classroom'}
                  </span>
                  <span className="event-location">{event.location}</span>
                </div>
                <button className="register-btn">Register Now</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No events found for the selected criteria.</p>
        )}
      </div>

      <div className="calendar-footer">
        <button className="view-all-btn">View All Events</button>
      </div>
    </div>
  );
};

export default EventsCalendar;