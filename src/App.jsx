import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BookCourse from './components/BookCourse';
import Courses from './pages/Courses';
import OnlineCourses from './pages/OnlineCourses';
import Contact from './pages/Contact';
import Testimonials from './testimonails/Testimonials';
import VideoTestimonials from './testimonails/VideoTestimonials';
import EventsCalendar from './layout/EventsCalendar';
import ImageGallery from './layout/ImageGallery';
import PaymentPage from './payment/PaymentPage';





function App() {
  return (
  
      <div className="app">
        <Header />
        <SecondHeader />

       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
           
              <Route path="/courses" element={<Courses/>} />
                 <Route path="/online-courses" element={<OnlineCourses/>} />
                 <Route path="/contact" element={<Contact/>} />
                  <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/videos" element={<VideoTestimonials/>} />
                <Route path="/events" element={<EventsCalendar/>} />
                   <Route path="/gallery" element={<ImageGallery/>} />
                <Route path="/book-course" element={<BookCourse/>} />
               <Route path="/payment" element={<PaymentPage/>} />
            
                    
                   
          </Routes>
    
        <Footer />
      </div>

  );
}

export default App;


// <Route path="/payments" element={<PaymentPage/>} />
// <Route path="/book-course" element={<BookCourse/>} />