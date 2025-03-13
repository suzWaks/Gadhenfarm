import React from 'react';

interface ParticlesBackgroundProps {
  className?: string;
}

export function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  return (
    <div className={`absolute inset-0 w-full h-full -z-10 ${className || ''} overflow-hidden`}>
      {/* Static particle effect using CSS */}
      <div className="particles-container">
        {Array(30).fill(0).map((_, index) => (
          <div 
            key={index}
            className="particle"
            style={{
              '--size': `${Math.random() * 2 + 1}px`,
              '--left': `${Math.random() * 100}%`,
              '--top': `${Math.random() * 100}%`,
              '--opacity': `${Math.random() * 0.5 + 0.1}`,
              '--duration': `${Math.random() * 100 + 20}s`,
              '--delay': `${Math.random() * 5}s`,
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
      
      {/* Add lines as divs */}
      <div className="lines-container">
        {Array(15).fill(0).map((_, index) => (
          <div 
            key={index}
            className="line"
            style={{
              '--width': `${Math.random() * 150 + 50}px`,
              '--left': `${Math.random() * 100}%`,
              '--top': `${Math.random() * 100}%`,
              '--opacity': `${Math.random() * 0.15 + 0.05}`,
              '--rotation': `${Math.random() * 360}deg`,
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background-color: #B1D931;
          border-radius: 50%;
          left: var(--left);
          top: var(--top);
          opacity: var(--opacity);
          animation: float var(--duration) infinite linear;
          animation-delay: var(--delay);
        }
        
        .lines-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .line {
          position: absolute;
          width: var(--width);
          height: 1px;
          background-color: #B1D931;
          left: var(--left);
          top: var(--top);
          opacity: var(--opacity);
          transform: rotate(var(--rotation));
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}