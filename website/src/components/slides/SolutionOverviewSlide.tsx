import { motion } from 'framer-motion';

const SolutionOverviewSlide = () => {
  return (
    <div className="slide schwab-primary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="slide-content"
      >
        <motion.h1 className="slide-title">
          Schwab Alternative Assets 401(k)
        </motion.h1>
        
        <motion.h2 className="slide-subtitle">
          A Revolutionary Approach to Retirement Planning
        </motion.h2>
        
        <div className="solution-grid">
          <motion.div className="solution-item" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
            <div className="solution-icon">₿</div>
            <h3>Bitcoin Integration</h3>
            <p>5-15% allocation option for long-term growth potential</p>
          </motion.div>
          
          <motion.div className="solution-item" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
            <div className="solution-icon">◆</div>
            <h3>Ethereum Access</h3>
            <p>Smart contract platform exposure for tech-forward investors</p>
          </motion.div>
          
          <motion.div className="solution-item" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
            <div className="solution-icon">🥇</div>
            <h3>Physical Gold</h3>
            <p>Traditional hedge against inflation and market volatility</p>
          </motion.div>
          
          <motion.div className="solution-item" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}>
            <div className="solution-icon">💵</div>
            <h3>USDC Stability</h3>
            <p>Dollar-pegged stablecoin for reduced volatility exposure</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionOverviewSlide;
