"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DataPlayground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // start offscreen
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize random swarm points
    const initPoints = () => {
      pointsRef.current = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        originX: Math.random() * canvas.width,
        originY: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
      }));
    };
    initPoints();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      pointsRef.current.forEach((p) => {
        // Distance to mouse (centroid)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 300) {
          // Magnetism
          p.vx += dx * 0.0005;
          p.vy += dy * 0.0005;
          
          // Draw connection to centroid
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 - (dist / 300) * 0.15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          // Drift towards origin to keep them somewhat spread out
          const ox = p.originX - p.x;
          const oy = p.originY - p.y;
          p.vx += ox * 0.00005;
          p.vy += oy * 0.00005;
        }

        // Apply friction
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = dist < 300 ? "#00ffff" : "#3f3f46";
        ctx.fill();
      });

      // Draw Cursor "Centroid"
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#00ffff";
        ctx.stroke();
      }

      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      gsap.to(mouseRef.current, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-[600px] relative bg-transparent border border-[#262626] rounded-xl overflow-hidden group">
      <canvas ref={canvasRef} className="w-full h-full block cursor-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-10 transition-opacity">
        <p className="text-xl font-mono text-cyan-400 uppercase tracking-widest animate-pulse">
          Move Cursor to Establish Centroid
        </p>
      </div>
    </div>
  );
}
