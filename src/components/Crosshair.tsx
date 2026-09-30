import React from 'react';

interface CrosshairProps {
  className?: string;
  size?: number;
  color?: string;
}

export const Crosshair: React.FC<CrosshairProps> = ({ 
  className = '', 
  size = 14, 
  color = '#8CA3C4' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <line x1="7" y1="0" x2="7" y2="14" stroke={color} strokeWidth="1.2" />
      <line x1="0" y1="7" x2="14" y2="7" stroke={color} strokeWidth="1.2" />
    </svg>
  );
};
