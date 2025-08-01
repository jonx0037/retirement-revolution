import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Retirement Revolution
            <span className="hero-subtitle">Transforming 401(k) with Alternative Assets</span>
          </h1>
          
          <div className="hero-icons">
            <span className="asset-icon">₿</span>
            <span className="asset-icon">◆</span>
            <span className="asset-icon">🥇</span>
            <span className="asset-icon">💵</span>
          </div>
          
          <p className="hero-description">
            A comprehensive analysis and strategic proposal for integrating Bitcoin, Ethereum, 
            Physical Gold, and USDC into Charles Schwab's 401(k) offerings to address the 
            retirement savings crisis and capture new market opportunities.
          </p>
          
          <div className="hero-actions">
            <Link to="/presentation" className="cta-primary">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View Presentation →
              </motion.button>
            </Link>
            
            <Link to="/methodology" className="cta-secondary">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Learn Methodology
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="section-title"
          >
            Project Highlights
          </motion.h2>
          
          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="feature-card"
            >
              <div className="feature-icon">📊</div>
              <h3>Interactive Presentation</h3>
              <p>10-slide interactive web presentation with real financial data and smooth animations</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="feature-card"
            >
              <div className="feature-icon">🎯</div>
              <h3>Data-Driven Analysis</h3>
              <p>Comprehensive performance analysis showing Bitcoin's 1,283.6% vs 9.7% traditional returns</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="feature-card"
            >
              <div className="feature-icon">💰</div>
              <h3>Revenue Projections</h3>
              <p>$2.8B additional revenue projection by 2027 through strategic alternative asset integration</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">$9T</div>
              <div className="stat-label">Total 401(k) Market</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">26,931%</div>
              <div className="stat-label">Bitcoin 10-Year Return</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$35k</div>
              <div className="stat-label">Median 401(k) Balance</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15%</div>
              <div className="stat-label">Max Crypto Allocation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
