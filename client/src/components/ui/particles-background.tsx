import React, { useEffect, useState } from 'react';

interface ParticlesBackgroundProps {
  className?: string;
}

export function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const [lines, setLines] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    // Generate particles
    const particlesArray = Array(60).fill(0).map((_, index) => {
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 60 + 40;
      return (
        <div 
          key={`particle-${index}`}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.2,
            animationDuration: `${duration}s`,
            animationDelay: `${Math.random() * 10}s`,
            backgroundColor: Math.random() > 0.8 ? '#ffffff' : '#B1D931',
          }}
        />
      );
    });
    
    // Generate lines
    const linesArray = Array(25).fill(0).map((_, index) => (
      <div 
        key={`line-${index}`}
        className="line"
        style={{
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() > 0.7 ? '2px' : '1px'}`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.25 + 0.1,
          transform: `rotate(${Math.random() * 360}deg)`,
          backgroundColor: Math.random() > 0.7 ? '#ffffff' : '#B1D931',
        }}
      />
    ));
    
    setParticles(particlesArray);
    setLines(linesArray);
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full -z-10 ${className || ''} overflow-hidden`}>
      <div className="particles-container">
        {particles}
      </div>
      <div className="lines-container">
        {lines}
      </div>
    </div>
  );
}