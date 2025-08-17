
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Marine Biologist",
      role: "Ocean Conservationist",
      content: "This platform transformed my understanding of sustainable fisheries management.",
      avatar: "/path-to-avatar.jpg"
    },
    {
      id: 2,
      name: "Sustainable Entrepreneur",
      role: "Blue Tech Founder",
      content: "The courses helped me launch my ocean renewable energy startup successfully.",
      avatar: "/path-to-avatar.jpg"
    },
    {
      id: 3,
      name: "Policy Maker",
      role: "Government Official",
      content: "Essential knowledge for developing effective marine policies and regulations.",
      avatar: "/path-to-avatar.jpg"
    }
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Community Says</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonial.content}"</p>
            </div>
            <div className="testimonial-author">
              <div className="avatar-placeholder">
                {/* Replace with actual avatar img */}
                [Avatar]
              </div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;