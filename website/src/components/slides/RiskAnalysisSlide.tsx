import { motion } from 'framer-motion';

const RiskAnalysisSlide = () => {
  return (
    <div className="slide schwab-secondary">
      <div className="slide-content">
        <h1 className="slide-title" style={{ color: '#0066CC' }}>Risk Assessment & Mitigation</h1>
        
        <div className="risk-content">
          <div className="risk-section">
            <h3>Volatility Management</h3>
            <ul>
              <li>Maximum 15% allocation to crypto assets</li>
              <li>USDC provides stability within crypto allocation</li>
              <li>Gold serves as traditional hedge</li>
            </ul>
          </div>
          
          <div className="risk-section">
            <h3>Regulatory Compliance</h3>
            <ul>
              <li>Work with ERISA specialists</li>
              <li>Follow fiduciary duty guidelines</li>
              <li>Implement proper custody solutions</li>
            </ul>
          </div>
          
          <div className="risk-section">
            <h3>Diversification Benefits</h3>
            <ul>
              <li>Low correlation with traditional assets</li>
              <li>Inflation hedge capabilities</li>
              <li>Exposure to digital transformation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysisSlide;
