import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TitleSlide from './components/slides/TitleSlide';
import ProblemSlide from './components/slides/ProblemSlide';
import SolutionOverviewSlide from './components/slides/SolutionOverviewSlide';
import PerformanceComparisonSlide from './components/slides/PerformanceComparisonSlide';
import DashboardSlide from './components/slides/DashboardSlide';
import RiskAnalysisSlide from './components/slides/RiskAnalysisSlide';
import MarketOpportunitySlide from './components/slides/MarketOpportunitySlide';
import ImplementationSlide from './components/slides/ImplementationSlide';
import RevenueProjectionSlide from './components/slides/RevenueProjectionSlide';
import CompetitiveAdvantageSlide from './components/slides/CompetitiveAdvantageSlide';
import CallToActionSlide from './components/slides/CallToActionSlide';

const slides = [
  { id: 1, component: TitleSlide, title: "Title" },
  { id: 2, component: ProblemSlide, title: "The Problem" },
  { id: 3, component: SolutionOverviewSlide, title: "Solution Overview" },
  { id: 4, component: PerformanceComparisonSlide, title: "Performance Analysis" },
  { id: 5, component: DashboardSlide, title: "Executive Dashboard" },
  { id: 6, component: RiskAnalysisSlide, title: "Risk Assessment" },
  { id: 7, component: MarketOpportunitySlide, title: "Market Opportunity" },
  { id: 8, component: ImplementationSlide, title: "Implementation" },
  { id: 9, component: RevenueProjectionSlide, title: "Revenue Impact" },
  { id: 10, component: CompetitiveAdvantageSlide, title: "Competitive Edge" },
  { id: 11, component: CallToActionSlide, title: "Next Steps" }
];

function PresentationApp() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="presentation">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slide"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="slide-navigation">
        <button 
          onClick={prevSlide} 
          className="nav-button"
          disabled={currentSlide === 0}
        >
          ←
        </button>
        
        <span className="nav-button" style={{ background: '#666', cursor: 'default' }}>
          {currentSlide + 1} / {slides.length}
        </span>
        
        <button 
          onClick={nextSlide} 
          className="nav-button"
          disabled={currentSlide === slides.length - 1}
        >
          →
        </button>
      </div>

      {/* Slide indicators */}
      <div style={{ 
        position: 'fixed', 
        bottom: '1rem', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 1000
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? '#0066CC' : '#ccc',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PresentationApp;
