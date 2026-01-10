
import React from 'react';

export const PixelCharacter: React.FC = () => {
  return (
    <div className="relative w-16 h-16 animate-float">
      {/* Head */}
      <div className="absolute top-0 left-4 w-8 h-6 bg-red-600 pixel-border"></div>
      {/* Face/Skin */}
      <div className="absolute top-4 left-4 w-8 h-6 bg-orange-200"></div>
      {/* Eyes */}
      <div className="absolute top-6 left-6 w-1 h-1 bg-black"></div>
      <div className="absolute top-6 left-9 w-1 h-1 bg-black"></div>
      {/* Body */}
      <div className="absolute top-10 left-4 w-8 h-6 bg-blue-700"></div>
      {/* Hands */}
      <div className="absolute top-10 left-0 w-4 h-4 bg-red-600"></div>
      <div className="absolute top-10 left-12 w-4 h-4 bg-red-600"></div>
    </div>
  );
};
