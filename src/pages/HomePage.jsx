import React from 'react';
import { Carousel, Card, Button, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './HomePage.css';
import logo from "../assets/images/logo.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg" className="sticky-top navbar">
        <div className="section-content d-flex w-100">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="African Training Institute" className="logo" />
            <span className="fw-bold">African Training Institute</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#login" className="btn btn-primary text-white ms-2">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Hero Carousel */}
      <Carousel fade className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Quality Training for African Professionals</h1>
            <p>Advance your career with our accredited courses</p>
            <Button variant="primary" size="lg">Browse Courses</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slide2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Flexible Learning Options</h1>
            <p>Online and in-person training available</p>
            <Button variant="primary" size="lg">Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Quick Links Section */}
      <section className="quick-links py-5 bg-light">
        <div className="section-content">
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
                  <Card.Title>Our Courses</Card.Title>
                  <Card.Text>
                    Browse our wide range of accredited training programs
                  </Card.Text>
                  <Button variant="outline-primary">View Courses</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className="fas fa-calendar-alt fa-3x mb-3 text-primary"></i>
                  <Card.Title>Upcoming Events</Card.Title>
                  <Card.Text>
                    Join our workshops and training sessions
                  </Card.Text>
                  <Button variant="outline-primary">View Calendar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className="fas fa-chalkboard-teacher fa-3x mb-3 text-primary"></i>
                  <Card.Title>Become a Trainer</Card.Title>
                  <Card.Text>
                    Share your expertise with our community
                  </Card.Text>
                  <Button variant="outline-primary">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses py-5">
        <div className="section-content">
          <h2 className="text-center mb-5">Featured Courses</h2>
          <Row className="g-4">
            {[1, 2, 3, 4].map((item) => (
              <Col lg={3} md={6} key={item}>
                <Card className="h-100 course-card">
                  <Card.Img variant="top" src={`/course${item}.jpg`} />
                  <Card.Body>
                    <Card.Title>Course Title {item}</Card.Title>
                    <Card.Text>
                      Brief description of the course content and objectives.
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary fw-bold">R2,500</span>
                      <Button variant="primary" size="sm">Enroll Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="outline-primary">View All Courses</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5 bg-light">
        <div className="section-content">
          <h2 className="text-center mb-5">What Our Students Say</h2>
          <Row>
            <Col md={8} className="mx-auto">
              <Carousel indicators={false}>
                {[1, 2, 3].map((item) => (
                  <Carousel.Item key={item}>
                    <div className="testimonial-item text-center">
                      <img 
                        src={`/student${item}.jpg`} 
                        alt={`Student ${item}`}
                        className="rounded-circle mb-3"
                        width="100"
                      />
                      <p className="lead mb-3">
                        "The training I received was exceptional and has helped me advance in my career."
                      </p>
                      <h5>Student Name {item}</h5>
                      <p className="text-muted">Course Taken</p>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners py-4">
        <div className="section-content">
          <h4 className="text-center mb-4">Trusted By</h4>
          <Row className="align-items-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <Col key={item} className="text-center">
                <img 
                  src={`/partner${item}.png`} 
                  alt={`Partner ${item}`}
                  className="img-fluid partner-logo"
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="section-content">
          <Row>
            <Col md={4}>
              <h5>African Training Institute</h5>
              <p>
                Providing quality training and skills development across Africa.
              </p>
              <div className="social-icons">
                <a href="#facebook" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
                <a href="#twitter" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                <a href="#linkedin" className="text-white me-2"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </Col>
            <Col md={2}>
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-white">Home</a></li>
                <li><a href="#about" className="text-white">About Us</a></li>
                <li><a href="#courses" className="text-white">Courses</a></li>
                <li><a href="#contact" className="text-white">Contact</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Contact Us</h6>
              <ul className="list-unstyled">
                <li><i className="fas fa-map-marker-alt me-2"></i> Address Line</li>
                <li><i className="fas fa-phone me-2"></i> +27 12 345 6789</li>
                <li><i className="fas fa-envelope me-2"></i> info@africantraining.co.za</li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Newsletter</h6>
              <p>Subscribe to our newsletter for updates</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} African Training Institute. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
