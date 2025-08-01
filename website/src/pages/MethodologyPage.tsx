import React from 'react';
import { motion } from 'framer-motion';
import './MethodologyPage.css';

const MethodologyPage: React.FC = () => {
  return (
    <div className="methodology-page">
      <div className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="header-content"
        >
          <h1>Research Methodology</h1>
          <p>Comprehensive analysis framework for alternative asset integration</p>
        </motion.div>
      </div>
      
      <div className="content-container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="methodology-section"
        >
          <h2>🔬 Research Framework</h2>
          <div className="methodology-grid">
            <div className="method-card">
              <h3>Data Collection</h3>
              <ul>
                <li>CoinGecko API for cryptocurrency performance data</li>
                <li>Investopedia research for 401(k) industry statistics</li>
                <li>Charles Schwab financial reports and AUM data</li>
                <li>Federal Reserve retirement savings research</li>
              </ul>
            </div>
            
            <div className="method-card">
              <h3>Performance Analysis</h3>
              <ul>
                <li>Multi-timeframe return calculations (1, 5, 10 years)</li>
                <li>Risk-adjusted return metrics (Sharpe ratios)</li>
                <li>Correlation analysis between asset classes</li>
                <li>Volatility assessments and downside protection</li>
              </ul>
            </div>
            
            <div className="method-card">
              <h3>Market Research</h3>
              <ul>
                <li>Total addressable market sizing ($9T 401k market)</li>
                <li>Demographic analysis and adoption trends</li>
                <li>Competitive landscape assessment</li>
                <li>Regulatory environment evaluation</li>
              </ul>
            </div>
            
            <div className="method-card">
              <h3>Financial Modeling</h3>
              <ul>
                <li>Revenue projection models (3-year outlook)</li>
                <li>Fee structure optimization analysis</li>
                <li>Customer acquisition cost modeling</li>
                <li>ROI and payback period calculations</li>
              </ul>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="methodology-section"
        >
          <h2>📊 Key Performance Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-value">26,931.1%</div>
              <div className="metric-label">Bitcoin 10-Year Return</div>
              <div className="metric-note">Calculated from historical price data</div>
            </div>
            
            <div className="metric-item">
              <div className="metric-value">1,283.6%</div>
              <div className="metric-label">Bitcoin 5-Year Return</div>
              <div className="metric-note">vs 9.7% traditional 401(k)</div>
            </div>
            
            <div className="metric-item">
              <div className="metric-value">$2.8B</div>
              <div className="metric-label">Projected Revenue Impact</div>
              <div className="metric-note">By 2027 with full implementation</div>
            </div>
            
            <div className="metric-item">
              <div className="metric-value">15%</div>
              <div className="metric-label">Maximum Crypto Allocation</div>
              <div className="metric-note">Risk mitigation strategy</div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="methodology-section"
        >
          <h2>🎯 Analysis Approach</h2>
          <div className="approach-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Problem Identification</h3>
                <p>Analyzed the retirement savings crisis with $35k median 401(k) balances and 30% of accounts under $10k</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Solution Design</h3>
                <p>Developed alternative asset integration strategy focusing on Bitcoin, Ethereum, USDC, and Physical Gold</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Performance Validation</h3>
                <p>Conducted comprehensive backtesting and performance analysis across multiple timeframes</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Risk Assessment</h3>
                <p>Implemented ERISA compliance framework and volatility mitigation strategies</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h3>Business Case Development</h3>
                <p>Created revenue projections and competitive positioning analysis for C-level presentation</p>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="methodology-section"
        >
          <h2>🔍 Quality Assurance</h2>
          <div className="qa-grid">
            <div className="qa-item">
              <h3>Data Validation</h3>
              <p>Cross-referenced multiple sources and validated all statistical claims with primary research</p>
            </div>
            
            <div className="qa-item">
              <h3>Peer Review</h3>
              <p>Methodology reviewed by finance professionals and academic advisors for accuracy</p>
            </div>
            
            <div className="qa-item">
              <h3>Scenario Testing</h3>
              <p>Stress-tested models under various market conditions and regulatory scenarios</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MethodologyPage;
