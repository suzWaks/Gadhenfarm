import React, { useEffect, useState } from 'react';

interface ParticlesBackgroundProps {
  className?: string;
}

export function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const [lines, setLines] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    // Generate particles
    const particlesArray = Array(30).fill(0).map((_, index) => (
      <div 
        key={`particle-${index}`}
        className="particle"
        style={{
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.1,
          animationDuration: `${Math.random() * 100 + 20}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ));
    
    // Generate lines
    const linesArray = Array(15).fill(0).map((_, index) => (
      <div 
        key={`line-${index}`}
        className="line"
        style={{
          width: `${Math.random() * 150 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.15 + 0.05,
          transform: `rotate(${Math.random() * 360}deg)`,
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