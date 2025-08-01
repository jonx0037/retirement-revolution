import React from 'react';
import { motion } from 'framer-motion';
import SchwabLogo from '../SchwabLogo';

const TitleSlide = () => {
  return (
    <div className="slide schwab-primary">
      <SchwabLogo size="small" position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="slide-content"
      >
        <motion.h1 
          className="slide-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Revolutionizing Retirement
        </motion.h1>
        
        <motion.h2 
          className="slide-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Integrating Alternative Assets into Charles Schwab 401(k) Plans
        </motion.h2>
        
        <motion.div 
          className="asset-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="asset-item">
            <div className="asset-symbol bitcoin">₿</div>
            <div>Bitcoin</div>
          </div>
          <div className="asset-item">
            <div className="asset-symbol ethereum">◆</div>
            <div>Ethereum</div>
          </div>
          <div className="asset-item">
            <div className="asset-symbol usdc">💵</div>
            <div>USDC</div>
          </div>
          <div className="asset-item">
            <div className="asset-symbol gold">🥇</div>
            <div>Physical Gold</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="subtitle-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          A Strategic Proposal for CEO Leadership
        </motion.div>
        
        <motion.div 
          className="footer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          SMU DS 6380 - Storytelling with Data | Final Project 2025
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TitleSlide;
