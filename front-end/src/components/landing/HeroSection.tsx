import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative z-10 flex items-center justify-between px-8 py-16 max-w-7xl mx-auto gap-12">
      {/* Text Content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight mb-8">
          Send Money Around the World{' '}
          <span className="text-secondary">In Minutes.</span>
          <br />
          With Zero Hassles.
        </h1>

        <p className="text-xl text-muted-foreground mb-6">
          The fastest, most transparent way to move money from India—powered by UPI, 
          Solana blockchain, and PayBridgeX ID.
        </p>

        <p className="text-lg text-muted-foreground mb-8">
          Send INR; your loved ones receive USD instantly in their bank or PayPal.
        </p>

        <button
          onClick={onGetStarted}
          className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-all duration-300 font-bold text-lg shadow-[var(--glow-yellow)]"
        >
          Get Started
        </button>
      </div>

      {/* 3D Cards Visualization */}
      <div className="flex-1 flex items-center justify-center relative h-96">
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
            transition: 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Card 1 */}
          <div
            className="absolute w-40 h-56 bg-card rounded-2xl shadow-2xl left-1/4 top-1/4 border-2 border-primary/30"
            style={{
              transform: 'translateZ(50px) rotateY(-15deg)',
              boxShadow: 'var(--glow-purple)'
            }}
          >
            <div className="h-full flex items-center justify-center">
              <div className="w-20 h-20 bg-muted rounded-lg" />
            </div>
          </div>

          {/* Card 2 - QR Code */}
          <div
            className="absolute w-44 h-60 bg-card rounded-2xl shadow-2xl right-1/4 top-1/3 border-2 border-secondary/30"
            style={{
              transform: 'translateZ(80px) rotateY(10deg)',
              boxShadow: 'var(--glow-yellow)'
            }}
          >
            <div className="h-full flex flex-col items-center justify-center p-4">
              <div className="w-32 h-32 bg-foreground rounded-lg flex items-center justify-center">
                <div className="text-background text-4xl font-mono">QR</div>
              </div>
            </div>
          </div>

          {/* Floating Coin */}
          <div
            className="absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-orange-500"
            style={{
              transform: 'translateZ(120px)',
              animation: 'float 3s ease-in-out infinite',
              boxShadow: 'var(--glow-yellow)'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateZ(120px) translateY(0px); }
          50% { transform: translateZ(120px) translateY(-20px); }
        }
      `}</style>
    </div>
  );
};
