import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/CourseDetails';

import Forms from './forms/forms';
import EventsCalendar from './layout/EventsCalendar';
import EventDetails from './layout/EventDetails';
import EventRegister from './layout/EventRegister';

import CustomChatBox from './ai/CustomeChatBox';
import OpenAIChat from './ai/OpenAIChat';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './user/Dashboard';

import WorkshopGallery from './layout/WorkShopGallery';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import { PretoriaTrainingCenter } from './components/PretoriaTrainingCenter';
import { SantonTrainingCenter } from './components/SantonTrainingCenter.';
import { DurbanTrainingCenter } from './components/DurbanTrainingCenter';
import { CapetownTrainingCenter } from './components/CapetownTrainingCenter';
import { ForgotPassword } from './auth/ForgotPassword'
import { ResetPassword } from './auth/ResetPassword';
import OnlineCourseList from './pages/OnlineCourseList';
import TeamBuilder from './layout/TeamBuilder';




function App() {
  return (
    <div className="app">
    <Header/>
      <SecondHeader />

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          
          
          <Route path="/course/list" element={<CourseList/>} />
          <Route path="/course/detail/:id" element={<CourseDetails/>} />
           <Route path="/online/course" element={<OnlineCourseList/>} />
         

         
         
          <Route path="/event/list" element={<EventsCalendar/>} />
          <Route path="/event/detail/:id" element={<EventDetails/>} />
          <Route path="/event/register" element={<EventRegister/>} />
        
        
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgot/password" element={<ForgotPassword/>} />
           <Route path="/reset/password" element={<ResetPassword/>} />
          


          <Route path="/form/payment" element={<Forms/>} />
          
        
          
          
          <Route path="/gallery" element={<WorkshopGallery/>} />
                 <Route path="/team/builder" element={<TeamBuilder/>} />
        
         
         
          <Route path="/user/dashboard/:id" element={<Dashboard/>} />

           <Route path="/center/pretoria" element={<PretoriaTrainingCenter/>} />
            <Route path="/center/durban" element={<DurbanTrainingCenter/>} />
          <Route path="/center/santon" element={<SantonTrainingCenter/>} />
            <Route path="/center/capetown" element={<CapetownTrainingCenter/>} />






        </Routes>
      </main>

      <div style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 1000 }}>
        <CustomChatBox />
      </div>

      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
        <OpenAIChat />
      </div>
      < Footer/>
    </div>
  );
}


export default App;

//<Route path="/forgot/password" element={<ForgotPassword/>} />
      //    <Route path="/reset/password" element={<ResetPassword/>} />
          