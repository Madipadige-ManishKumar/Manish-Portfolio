
import React from 'react';

interface PixelBlockProps {
  children: React.ReactNode;
  className?: string;
  type?: 'brick' | 'question' | 'floor';
}

export const PixelBlock: React.FC<PixelBlockProps> = ({ children, className = '', type = 'brick' }) => {
  const getBgColor = () => {
    switch(type) {
      case 'question': return 'bg-[#3d3e51]';
      case 'floor': return 'bg-[#323949]';
      default: return 'bg-[#40445a]';
    }
  };

  return (
    <div className={`p-6 pixel-border ${getBgColor()} ${className}`}>
      {children}
    </div>
  );
};
