'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: Math.random(),
    size: Math.random() * 4 + 2, // Particle size between 2 and 6 px
    x: Math.random() * 100 - 1, // X position (percentage of screen width)
    y: Math.random() * 100, // Y position (percentage of screen height)
    opacity: Math.random() * 0.6 + 0.2, // Opacity between 0.2 and 0.8
    duration: Math.random() * 6 + 4, // Float duration (4-10s)
    driftX: Math.random() * 4 - 200, 
    driftY: Math.random() * 4 - 200, 
  }));
};

const Particles = ({ count = 50 }) => {
  const [particles, setParticles] = useState<{ id: number; size: number; x: number; y: number; opacity: number; duration: number; driftX: number; driftY: number; }[]>([]);

  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  return (
    <div>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            opacity: particle.opacity,
            x: [`${particle.x}%`, `${particle.x + particle.driftX}%`, `${particle.x}%`], // Small horizontal drift
            y: [`${particle.y}%`, `${particle.y + particle.driftY}%`, `${particle.y}%`], // Small vertical drift
            transition: {
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          className="absolute bg-white rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
