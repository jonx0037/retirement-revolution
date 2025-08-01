import React from 'react';
import { motion } from 'framer-motion';
import './DataSourcesPage.css';

const DataSourcesPage: React.FC = () => {
  return (
    <div className="data-sources-page">
      <div className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="header-content"
        >
          <h1>Data Sources & Research</h1>
          <p>Comprehensive data foundation for the retirement revolution analysis</p>
        </motion.div>
      </div>
      
      <div className="content-container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="data-section"
        >
          <h2>📈 Primary Data Sources</h2>
          <div className="sources-grid">
            <div className="source-card primary">
              <div className="source-header">
                <h3>CoinGecko API</h3>
                <span className="source-type">Cryptocurrency Data</span>
              </div>
              <div className="source-content">
                <p><strong>Purpose:</strong> Historical price and performance data for Bitcoin, Ethereum, and other cryptocurrencies</p>
                <ul>
                  <li>Daily, weekly, and monthly price data</li>
                  <li>Volume and market capitalization metrics</li>
                  <li>Historical returns across multiple timeframes</li>
                  <li>Real-time and historical exchange rates</li>
                </ul>
                <div className="data-reliability">
                  <span className="reliability-score">Reliability: 95%</span>
                  <span className="update-frequency">Updated: Real-time</span>
                </div>
              </div>
            </div>
            
            <div className="source-card primary">
              <div className="source-header">
                <h3>Investopedia Research</h3>
                <span className="source-type">401(k) Industry Data</span>
              </div>
              <div className="source-content">
                <p><strong>Purpose:</strong> Traditional retirement account performance and industry statistics</p>
                <ul>
                  <li>Average 401(k) returns by timeframe</li>
                  <li>Median account balance data</li>
                  <li>Industry benchmarks and standards</li>
                  <li>Regulatory compliance information</li>
                </ul>
                <div className="data-reliability">
                  <span className="reliability-score">Reliability: 98%</span>
                  <span className="update-frequency">Updated: Quarterly</span>
                </div>
              </div>
            </div>
            
            <div className="source-card primary">
              <div className="source-header">
                <h3>Charles Schwab Financials</h3>
                <span className="source-type">Company Data</span>
              </div>
              <div className="source-content">
                <p><strong>Purpose:</strong> Company performance metrics and assets under management</p>
                <ul>
                  <li>Quarterly revenue and profit data</li>
                  <li>Assets under management (AUM)</li>
                  <li>Fee structure and pricing models</li>
                  <li>Client acquisition and retention metrics</li>
                </ul>
                <div className="data-reliability">
                  <span className="reliability-score">Reliability: 100%</span>
                  <span className="update-frequency">Updated: Quarterly</span>
                </div>
              </div>
            </div>
            
            <div className="source-card primary">
              <div className="source-header">
                <h3>Federal Reserve Data</h3>
                <span className="source-type">Economic Research</span>
              </div>
              <div className="source-content">
                <p><strong>Purpose:</strong> Macroeconomic trends and retirement savings analysis</p>
                <ul>
                  <li>Consumer finance survey data</li>
                  <li>Retirement savings crisis statistics</li>
                  <li>Interest rate and inflation data</li>
                  <li>Economic outlook and projections</li>
                </ul>
                <div className="data-reliability">
                  <span className="reliability-score">Reliability: 100%</span>
                  <span className="update-frequency">Updated: Monthly</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="data-section"
        >
          <h2>🔍 Key Statistics Used</h2>
          <div className="stats-showcase">
            <div className="stat-category">
              <h3>Cryptocurrency Performance</h3>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-value">26,931.1%</span>
                  <span className="stat-desc">Bitcoin 10-year return</span>
                  <span className="stat-source">Source: CoinGecko</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">1,283.6%</span>
                  <span className="stat-desc">Bitcoin 5-year return</span>
                  <span className="stat-source">Source: CoinGecko</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">892.4%</span>
                  <span className="stat-desc">Ethereum 5-year return</span>
                  <span className="stat-source">Source: CoinGecko</span>
                </div>
              </div>
            </div>
            
            <div className="stat-category">
              <h3>Traditional 401(k) Data</h3>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-value">$35,000</span>
                  <span className="stat-desc">Median 401(k) balance</span>
                  <span className="stat-source">Source: Investopedia</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">9.7%</span>
                  <span className="stat-desc">Average 5-year return</span>
                  <span className="stat-source">Source: Investopedia</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">30%</span>
                  <span className="stat-desc">Accounts under $10k</span>
                  <span className="stat-source">Source: Fed Research</span>
                </div>
              </div>
            </div>
            
            <div className="stat-category">
              <h3>Market Opportunity</h3>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-value">$9T</span>
                  <span className="stat-desc">Total 401(k) market</span>
                  <span className="stat-source">Source: Fed Data</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">$5.6B</span>
                  <span className="stat-desc">Schwab Q1 2025 revenue</span>
                  <span className="stat-source">Source: Schwab Financials</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">$2.8B</span>
                  <span className="stat-desc">Projected additional revenue</span>
                  <span className="stat-source">Source: Analysis Model</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="data-section"
        >
          <h2>📊 Data Processing & Validation</h2>
          <div className="process-flow">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Data Collection</h3>
                <p>Automated API calls and manual research compilation from verified sources</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Data Cleaning</h3>
                <p>Removal of outliers, handling missing values, and standardization of formats</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Cross-Validation</h3>
                <p>Verification against multiple sources and statistical significance testing</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Analysis & Modeling</h3>
                <p>Application of financial models and statistical analysis techniques</p>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="data-section"
        >
          <h2>⚠️ Data Limitations & Disclaimers</h2>
          <div className="disclaimers">
            <div className="disclaimer-item">
              <h3>Historical Performance</h3>
              <p>Past performance does not guarantee future results. Cryptocurrency markets are highly volatile and speculative.</p>
            </div>
            
            <div className="disclaimer-item">
              <h3>Market Projections</h3>
              <p>Revenue projections are estimates based on current market conditions and may vary significantly based on regulatory changes and market adoption.</p>
            </div>
            
            <div className="disclaimer-item">
              <h3>Regulatory Environment</h3>
              <p>Cryptocurrency regulations are evolving and may impact the feasibility of proposed strategies.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DataSourcesPage;
