import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="header-content"
        >
          <h1>About the Project</h1>
          <p>SMU DS 6380 - Storytelling with Data Final Project</p>
        </motion.div>
      </div>
      
      <div className="content-container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="about-section"
        >
          <h2>🎯 Project Overview</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p>
                The <strong>"Retirement Revolution"</strong> project represents a comprehensive strategic analysis 
                for transforming Charles Schwab's 401(k) offerings through the integration of alternative assets. 
                This project was developed as the capstone deliverable for SMU's DS 6380 - Storytelling with Data course.
              </p>
              <p>
                The project addresses the critical retirement savings crisis in America, where the median 401(k) 
                balance stands at just $35,000, with 30% of accounts holding less than $10,000. Through data-driven 
                analysis and strategic planning, this project proposes a revolutionary approach to retirement investing.
              </p>
              <div className="project-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">📊</span>
                  <span className="highlight-text">Interactive 10-slide presentation</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💰</span>
                  <span className="highlight-text">$2.8B revenue projection</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🔬</span>
                  <span className="highlight-text">Comprehensive market analysis</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⚡</span>
                  <span className="highlight-text">Real-time financial data</span>
                </div>
              </div>
            </div>
            <div className="overview-visual">
              <div className="project-stats">
                <div className="stat-circle">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Project Grade</div>
                </div>
                <div className="stat-circle">
                  <div className="stat-number">10</div>
                  <div className="stat-label">Slides</div>
                </div>
                <div className="stat-circle">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Asset Classes</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="about-section"
        >
          <h2>🏫 Academic Context</h2>
          <div className="academic-grid">
            <div className="academic-card">
              <h3>Course Information</h3>
              <ul>
                <li><strong>Course:</strong> DS 6380 - Storytelling with Data</li>
                <li><strong>Institution:</strong> Southern Methodist University (SMU)</li>
                <li><strong>Semester:</strong> Summer 2025</li>
                <li><strong>Due Date:</strong> July 31, 2025</li>
              </ul>
            </div>
            
            <div className="academic-card">
              <h3>Project Requirements</h3>
              <ul>
                <li>4-5 minute video presentation</li>
                <li>10-slide interactive presentation</li>
                <li>Tableau dashboard (optional enhancement)</li>
                <li>C-level executive audience focus</li>
              </ul>
            </div>
            
            <div className="academic-card">
              <h3>Learning Objectives</h3>
              <ul>
                <li>Clear, persuasive, and appealing communication</li>
                <li>Memorable takeaway development</li>
                <li>Audience-appropriate content creation</li>
                <li>Creative thinking demonstration</li>
              </ul>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="about-section"
        >
          <h2>🛠️ Technical Implementation</h2>
          <div className="tech-details">
            <div className="tech-category">
              <h3>Frontend Technologies</h3>
              <div className="tech-tags">
                <span className="tech-tag">React 18</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">Framer Motion</span>
                <span className="tech-tag">React Router</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Data Visualization</h3>
              <div className="tech-tags">
                <span className="tech-tag">Chart.js</span>
                <span className="tech-tag">React Chart.js 2</span>
                <span className="tech-tag">Lucide React Icons</span>
                <span className="tech-tag">Custom CSS Animations</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Deployment & DevOps</h3>
              <div className="tech-tags">
                <span className="tech-tag">GitHub Pages</span>
                <span className="tech-tag">GitHub Actions</span>
                <span className="tech-tag">Automated CI/CD</span>
                <span className="tech-tag">ESLint</span>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="about-section"
        >
          <h2>📈 Strategic Innovation</h2>
          <div className="innovation-content">
            <div className="innovation-points">
              <div className="innovation-item">
                <div className="innovation-icon">🚀</div>
                <div className="innovation-text">
                  <h3>First-of-Its-Kind Analysis</h3>
                  <p>Comprehensive alternative assets integration strategy for traditional 401(k) platforms</p>
                </div>
              </div>
              
              <div className="innovation-item">
                <div className="innovation-icon">📊</div>
                <div className="innovation-text">
                  <h3>Real Financial Data</h3>
                  <p>Integration of live cryptocurrency and traditional market data for accurate projections</p>
                </div>
              </div>
              
              <div className="innovation-item">
                <div className="innovation-icon">🎯</div>
                <div className="innovation-text">
                  <h3>Executive-Ready Presentation</h3>
                  <p>C-level focused content with clear business case and actionable recommendations</p>
                </div>
              </div>
              
              <div className="innovation-item">
                <div className="innovation-icon">⚡</div>
                <div className="innovation-text">
                  <h3>Interactive Experience</h3>
                  <p>Modern web-based presentation with smooth animations and professional design</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="about-section"
        >
          <h2>🏆 Project Impact</h2>
          <div className="impact-metrics">
            <div className="impact-card">
              <div className="impact-value">$9T</div>
              <div className="impact-label">Market Opportunity Analyzed</div>
            </div>
            
            <div className="impact-card">
              <div className="impact-value">26,931%</div>
              <div className="impact-label">Bitcoin Performance Highlighted</div>
            </div>
            
            <div className="impact-card">
              <div className="impact-value">4</div>
              <div className="impact-label">Alternative Assets Evaluated</div>
            </div>
            
            <div className="impact-card">
              <div className="impact-value">15%</div>
              <div className="impact-label">Recommended Max Allocation</div>
            </div>
          </div>
          
          <div className="project-conclusion">
            <p>
              This project demonstrates the power of data storytelling to communicate complex financial 
              strategies and drive executive decision-making. Through careful research, analysis, and 
              presentation design, the "Retirement Revolution" project successfully earned a 100% grade 
              and showcases the potential for alternative assets to transform retirement investing.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
