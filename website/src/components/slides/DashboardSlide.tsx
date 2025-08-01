import { motion } from 'framer-motion';
import SchwabLogo from '../SchwabLogo';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { performanceData } from '../../data/financialData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const DashboardSlide = () => {
  // Performance comparison chart data
  const performanceChartData = {
    labels: ['YTD 2024', '1-Year', '3-Year', '5-Year', '10-Year'],
    datasets: [
      {
        label: 'Bitcoin',
        data: [129.0, 153.1, 79.0, 1283.6, 26931.1],
        backgroundColor: 'rgba(247, 147, 26, 0.8)',
        borderColor: 'rgba(247, 147, 26, 1)',
        borderWidth: 2,
      },
      {
        label: 'Traditional 401(k)',
        data: [18.1, 18.1, 9.7, 9.7, 8.0],
        backgroundColor: 'rgba(0, 102, 204, 0.8)',
        borderColor: 'rgba(0, 102, 204, 1)',
        borderWidth: 2,
      },
      {
        label: 'Gold',
        data: [32.2, 34.8, 53.1, 84.6, 125.8],
        backgroundColor: 'rgba(255, 215, 0, 0.8)',
        borderColor: 'rgba(255, 215, 0, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold' as const,
          },
        },
      },
      title: {
        display: true,
        text: 'Asset Performance Comparison (%)',
        color: '#0066CC',
        font: {
          size: 18,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#666',
          callback: function(value: any) {
            return value + '%';
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#666',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return (
    <div className="slide schwab-secondary">
      <SchwabLogo size="small" position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="slide-content"
      >
        <motion.h1 
          style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066CC' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Executive Dashboard
        </motion.h1>
        
        <motion.div 
          style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Alternative Assets vs Traditional 401(k) Performance
        </motion.div>
        
        <motion.div 
          className="chart-container"
          style={{ height: '500px', marginBottom: '2rem' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Bar data={performanceChartData} options={chartOptions} />
        </motion.div>
        
        <motion.div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr', 
            gap: '2rem',
            marginTop: '2rem' 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f7931a' }}>₿</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0066CC' }}>26,931%</div>
            <div>Bitcoin 10-Year Return</div>
          </div>
          
          <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffd700' }}>🥇</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0066CC' }}>125.8%</div>
            <div>Gold 10-Year Return</div>
          </div>
          
          <div style={{ textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0066CC' }}>📊</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545' }}>8.0%</div>
            <div>Traditional 401(k) 10-Year</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardSlide;
