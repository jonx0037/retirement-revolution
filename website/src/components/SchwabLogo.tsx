import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  className?: string;
}

const SchwabLogo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  position = 'top-right',
  className = '' 
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { width: '80px', height: '80px' };
      case 'large':
        return { width: '150px', height: '150px' };
      default:
        return { width: '100px', height: '100px' };
    }
  };

  const getPositionStyles = () => {
    const baseStyles = {
      position: 'absolute' as const,
      zIndex: 1000,
    };

    switch (position) {
      case 'top-left':
        return { ...baseStyles, top: '20px', left: '20px' };
      case 'top-right':
        return { ...baseStyles, top: '20px', right: '20px' };
      case 'bottom-left':
        return { ...baseStyles, bottom: '20px', left: '20px' };
      case 'bottom-right':
        return { ...baseStyles, bottom: '20px', right: '20px' };
      case 'center':
        return { ...baseStyles, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      default:
        return { ...baseStyles, top: '20px', right: '20px' };
    }
  };

  return (
    <div 
      className={`schwab-logo ${className}`}
      style={{
        ...getSizeStyles(),
        ...getPositionStyles(),
        opacity: 0.9,
      }}
    >
      <svg 
        viewBox="0 0 250 250" 
        width="100%" 
        height="100%"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        <rect width="250" height="250" fill="transparent"/>
        <text 
          x="125" 
          y="130" 
          fontFamily="Arial, sans-serif" 
          fontSize="32" 
          fontWeight="bold" 
          textAnchor="middle" 
          fill="#0066CC"
        >
          Charles Schwab
        </text>
        <text 
          x="125" 
          y="160" 
          fontFamily="Arial, sans-serif" 
          fontSize="16" 
          textAnchor="middle" 
          fill="#0066CC"
        >
          CORPORATION
        </text>
      </svg>
    </div>
  );
};

export default SchwabLogo;
