import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/presentation', label: 'Presentation', icon: '📊' },
    { path: '/methodology', label: 'Methodology', icon: '🔬' },
    { path: '/data-sources', label: 'Data Sources', icon: '📈' },
    { path: '/about', label: 'About', icon: 'ℹ️' }
  ];

  return (
    <nav className="main-navigation">
      <div className="nav-brand">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="brand-logo"
          >
            <span className="brand-icon">💰</span>
            <span className="brand-text">Retirement Revolution</span>
          </motion.div>
        </Link>
      </div>
      
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="nav-item"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
