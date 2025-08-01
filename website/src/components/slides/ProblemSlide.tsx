import { motion } from 'framer-motion';

const ProblemSlide = () => {
  return (
    <div className="slide schwab-secondary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="slide-content"
      >
        <motion.h1 
          className="problem-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Retirement Crisis
        </motion.h1>
        
        <motion.div 
          className="problem-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="stat-item">
            <div className="stat-number">$35,000</div>
            <div className="stat-label">Median 401(k) Balance</div>
            <div className="stat-subtext">Far below retirement needs</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">30%</div>
            <div className="stat-label">Have Under $10,000</div>
            <div className="stat-subtext">Inadequate savings crisis</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="problem-box"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="problem-box-title">Traditional 401(k) Limitations:</h3>
          <ul className="problem-list">
            <li>• Limited to traditional stocks, bonds, and target-date funds</li>
            <li>• Average 5-year returns of 9.7% annually</li>
            <li>• Exposed to inflation risk and market correlation</li>
            <li>• Missing opportunities in the fastest-growing asset classes</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="problem-conclusion"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          It's time for a transformational approach to retirement investing
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;
