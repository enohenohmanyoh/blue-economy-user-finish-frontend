import React from 'react';
import './Courses.css';
import CourseCard from './CourseCard';
import { useNavigate } from 'react-router-dom';

// Images
import imgBluePurpose from '../assets/1.jpg';
import imgClimateResilience from '../assets/2.jpg';
import imgSpatialPlanning from '../assets/3.jpg';
import imgClimateFinance from '../assets/4.jpg';
import imgEnvManagement from '../assets/5.jpg';
import imgSustainabilityLeadership from '../assets/6.jpg';
import imgSustainabilityMarketing from '../assets/7.jpg';

import imgStrategy from '../assets/8.jpg';
import imgStrategyReview from '../assets/9.jpg';
import imgBlueFinance from '../assets/10.jpg';
import imgFisheries from '../assets/11.jpg';
import imgShipping from '../assets/12.jpg';
import imgOilGas from '../assets/13.jpg';
import imgMarineEnergy from '../assets/12.jpg';
import imgBlueProduct from '../assets/15.jpg';
import imgTourism from '../assets/16.jpg';

import imgMaritimeLaw from '../assets/26.jpg';
import imgPolicyDesign from '../assets/18.jpg';
import imgPolicyAnalysis from '../assets/7.jpg';
import imgSafetyCompliance from '../assets/20.jpg';
import imgCyberSecurity from '../assets/21.jpg';
import imgSafetySecurity from '../assets/23.jpg';
import imgAdvisory from '../assets/24.jpg';
import imgStakeholder from '../assets/25.jpg';

import imgPartnerships from '../assets/26.jpg';
import imgLeadership from '../assets/27.jpg';
import imgDiplomacy from '../assets/28.jpg';
import imgCoDesign from '../assets/1.jpg';
import imgExchange from '../assets/2.jpg';
import imgProjects from '../assets/3.jpg';

const Courses = () => {
  const navigate = useNavigate();

  const courseCategories = [
    {
      category: "Balancing Economic Growth with Conservancy",
      courses: [
        { code: "ES001", title: "Unpacking the ultimate and peculiar purpose of blue economy development", duration: "5 Days", image: imgBluePurpose },
        { code: "ES002", title: "Blue economy resilience and climate change mitigation and adaptation", duration: "5 Days", image: imgClimateResilience },
        { code: "ES003", title: "Maritime Spatial Planning", duration: "5 Days", image: imgSpatialPlanning },
        { code: "ES004", title: "Climate finance for blue economy development", duration: "5 Days", image: imgClimateFinance },
        { code: "ES005", title: "Maritime environmental management systems", duration: "5 Days", image: imgEnvManagement },
        { code: "ES007", title: "Sustainability leadership for blue economy development", duration: "5 Days", image: imgSustainabilityLeadership },
        { code: "ES008", title: "Sustainability marketing for blue economy development", duration: "5 Days", image: imgSustainabilityMarketing },
      ]
    },
    {
      category: "Training and Capacity Building",
      courses: [
        { code: "TCB001", title: "Blue economy development strategy", duration: "5 Days", image: imgStrategy },
        { code: "TCB002", title: "Blue economy development strategy reviews", duration: "5 Days", image: imgStrategyReview },
        { code: "TCB003", title: "Blue Finance (blue economy development financing models)", duration: "5 Days", image: imgBlueFinance },
        { code: "TCB004", title: "Fisheries management and aquaculture value chain", duration: "5 Days", image: imgFisheries },
        { code: "TCB005", title: "Shipping and maritime transport management", duration: "5 Days", image: imgShipping },
        { code: "TCB006", title: "Oil and gas", duration: "5 Days", image: imgOilGas },
        { code: "TCB007", title: "Marine renewable energy", duration: "5 Days", image: imgMarineEnergy },
        { code: "TCB007B", title: "Blue product development", duration: "5 Days", image: imgBlueProduct },
        { code: "TCB008", title: "Coastal and marine tourism", duration: "5 Days", image: imgTourism },
      ]
    },
    {
      category: "Policy and Governance Support",
      courses: [
        { code: "PGS001", title: "Maximising international maritime law for blue economy development", duration: "5 Days", image: imgMaritimeLaw },
        { code: "PGS002", title: "Policy design and development", duration: "5 Days", image: imgPolicyDesign },
        { code: "PGS003", title: "Policy analysis and impact assessment", duration: "5 Days", image: imgPolicyAnalysis },
        { code: "PGS004", title: "Maritime safety, security and compliance", duration: "5 Days", image: imgSafetyCompliance },
        { code: "PGS005", title: "Maritime cyber security", duration: "5 Days", image: imgCyberSecurity },
        { code: "PGS006", title: "Maritime safety and security", duration: "5 Days", image: imgSafetySecurity },
        { code: "PGS007", title: "Advisory services for national and regional bodies", duration: "5 Days", image: imgAdvisory },
        { code: "PGS008", title: "Maritime stakeholder management and governance frameworks", duration: "5 Days", image: imgStakeholder },
      ]
    },
    {
      category: "Partnerships, Regional & International Cooperation",
      courses: [
        { code: "P001", title: "Multi-stakeholder partnerships for blue economy development", duration: "5 Days", image: imgPartnerships },
        { code: "P002", title: "Leadership in multi-stakeholder Partnership for blue economy development", duration: "5 Days", image: imgLeadership },
        { code: "P003", title: "Maritime (blue economy) diplomacy", duration: "5 Days", image: imgDiplomacy },
        { code: "P004", title: "Co-design and co-delivery with partners", duration: "5 Days", image: imgCoDesign },
        { code: "P005", title: "Exchange programs", duration: "5 Days", image: imgExchange },
        { code: "P006", title: "Joint projects with regional bodies", duration: "5 Days", image: imgProjects },
      ]
    }
  ];

  // flatten list
  const allCourses = courseCategories.flatMap(({ category, courses }) =>
    courses.map(c => ({ ...c, category }))
  );

  const handleCourseClick = (courseTitle) => {
    navigate("/book-course", { state: { selectedCourse: courseTitle } });
  };

  return (
    <div className="courses-page">
      {/* Header */}
      <section className="courses-header">
        <h1>Blue Economy Courses</h1>
        <p>Comprehensive training for sustainable ocean development</p>
      </section>

      {/* Grid */}
      <section className="courses-list">
        <div className="courses-grid two-cols-tight">
          {allCourses.map((course, idx) => (
            <div key={`${course.code}-${idx}`} className="course-cell">
              <CourseCard
                course={{
                  id: course.code,
                  title: `${course.code} - ${course.title}`,
                  description: course.category,
                  duration: course.duration,
                  level: "All Levels",
                  image: course.image
                }}
                onBook={(selectedCourse) => handleCourseClick(selectedCourse.title)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
