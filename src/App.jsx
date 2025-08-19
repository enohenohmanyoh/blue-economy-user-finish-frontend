import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/CourseDetails';
import Forms from './forms/forms';
import PaymentPage from './forms/PaymentPage';
import EventsCalendar from './layout/EventsCalendar';
import Testimonials from './testimonails/Testimonials';
import VideoTestimonials from './testimonails/VideoTestimonials';



function App() {
  return (
  
      <div className="app">
        <Header />
        <SecondHeader />

       
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />

                <Route path="/list" element={<CourseList/>} />
                <Route path="/details/:id" element={<CourseDetails/>} />

               <Route path="/events" element={<EventsCalendar/>} />
                <Route path="/forms-payment" element={<Forms/>} />


                  <Route path="/testimonials" element={<Testimonials/>} />
                  <Route path="/videos" element={<VideoTestimonials/>} />
          
   <Route path="/payment" element={<PaymentPage/>} />
            </Routes>
    
        <Footer />
      </div>

  );
}

export default App;


// <Route path="/payments" element={<PaymentPage/>} />
// <Route path="/book-course" element={<BookCourse/>} />
//  <Route path="/stripe" element={<PaymentPage/>} />
  // <Route path="/list" element={<CourseList/>} />
         //     
            // <Route path="/about" element={<About/>} />
              
        
               // 
                //<Route path="/testimonials" element={<Testimonials/>} />
                //<Route path="/videos" element={<VideoTestimonials/>} />
                //<Route path="/events" element={<EventsCalendar/>} />
                //<Route path="/gallery" element={<ImageGallery/>} />
                 // <Route path="/forms" element={<Forms/>} />