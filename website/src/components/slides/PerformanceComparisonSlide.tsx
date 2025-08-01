import { motion } from 'framer-motion';

const PerformanceComparisonSlide = () => {
  const performanceData = [
    { period: "YTD 2024", bitcoin: "129.0%", traditional: "18.1%", gold: "32.2%" },
    { period: "1-Year", bitcoin: "153.1%", traditional: "18.1%", gold: "34.8%" },
    { period: "5-Year", bitcoin: "1,283.6%", traditional: "9.7%", gold: "84.6%" },
    { period: "10-Year", bitcoin: "26,931.1%", traditional: "193.3%", gold: "125.8%" },
  ];

  return (
    <div className="slide schwab-secondary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="slide-content"
      >
        <motion.h1 
          className="performance-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Performance Analysis: The Opportunity
        </motion.h1>
        
        <motion.div 
          className="performance-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Historical Returns Comparison (Source: CoinGecko, Investopedia)
        </motion.div>
        
        <motion.div 
          className="performance-table"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="table-header">
            <div>Time Period</div>
            <div className="bitcoin-col">Bitcoin</div>
            <div className="traditional-col">Traditional 401(k)</div>
            <div className="gold-col">Gold</div>
          </div>
          
          {performanceData.map((row, index) => (
            <motion.div 
              key={row.period}
              className="table-row"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="period-cell">{row.period}</div>
              <div className="bitcoin-cell">{row.bitcoin}</div>
              <div className="traditional-cell">{row.traditional}</div>
              <div className="gold-cell">{row.gold}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="performance-highlights"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="highlight-item">
            <div className="highlight-icon">🚀</div>
            <div className="highlight-text">
              <strong>Bitcoin:</strong> 1,283.6% over 5 years vs. 9.7% traditional 401(k)
            </div>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">🥇</div>
            <div className="highlight-text">
              <strong>Gold:</strong> Stable store of value with 84.6% five-year returns
            </div>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">💎</div>
            <div className="highlight-text">
              <strong>USDC:</strong> Provides stability and liquidity in volatile markets
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="performance-conclusion"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Alternative assets offer significant upside potential for long-term retirement planning
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PerformanceComparisonSlide;
