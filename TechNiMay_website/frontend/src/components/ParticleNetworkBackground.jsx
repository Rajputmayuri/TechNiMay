import React, { useEffect, useRef } from 'react';

export const ParticleNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracker
    const mouse = {
      x: null,
      y: null,
      radius: 180,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 2 + 1.2;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.baseAlpha = Math.random() * 0.4 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 71, 251, ${this.baseAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(20, 71, 251, 0.6)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let particles = [];
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 14000);
      const count = Math.min(Math.max(particleCount, 40), 90);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Connect particles with faint blue lines
    const connect = () => {
      const maxDistance = 140;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = `rgba(20, 71, 251, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse connection effect
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = particles[a].x - mouse.x;
          const mdy = particles[a].y - mouse.y;
          const mDistance = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDistance < mouse.radius) {
            const mOpacity = (1 - mDistance / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(20, 71, 251, ${mOpacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 0.8px, transparent 0.8px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* HTML5 Canvas for connected particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ParticleNetworkBackground;
