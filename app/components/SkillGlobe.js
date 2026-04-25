"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const SKILLS = [
  { label: "Javascript basics",               color: "#00ffff" },
  { label: "C",                    color: "#00ffff" },
  { label: "Verilog VHDL",        color: "#67e8f9" },
  { label: "Artix-7 FPGA",        color: "#67e8f9" },
  { label: "React",                color: "#00ffff" },
  { label: "Django",               color: "#67e8f9" },
  { label: "FastAPI",              color: "#00ffff" },
  { label: "Scikit-learn",         color: "#67e8f9" },
  { label: "NumPy",                color: "#67e8f9" },
  { label: "Pandas",               color: "#67e8f9" },
  { label: "NLP",                  color: "#00ffff" },
  { label: "Computer Vision",      color: "#00ffff" },
  { label: "Reinforcement Learning", color: "#67e8f9" },
  { label: "Git",                  color: "#9ca3af" },
  { label: "MYSQL",                color: "#9ca3af" },
  { label: "Python",           color: "#00ffff" },
];

// Distribute points evenly on a unit sphere via Fibonacci lattice
function fibonacciSphere(n) {
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return pts;
}

const BASE_POSITIONS = fibonacciSphere(SKILLS.length);
const RADIUS = 130; // px

// Rotate a point around Y axis by angle θ
function rotateY(p, theta) {
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  return {
    x: p.x * cosT + p.z * sinT,
    y: p.y,
    z: -p.x * sinT + p.z * cosT,
  };
}

// Rotate a point around X axis by angle φ
function rotateX(p, phi) {
  const cosP = Math.cos(phi);
  const sinP = Math.sin(phi);
  return {
    x: p.x,
    y: p.y * cosP - p.z * sinP,
    z: p.y * sinP + p.z * cosP,
  };
}

export default function SkillGlobe() {
  const containerRef = useRef(null);
  const angleRef = useRef({ y: 0, x: 0 });        // current rotation
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const velocityRef = useRef({ y: 0.004, x: 0 }); // momentum

  const [tags, setTags] = useState(() =>
    BASE_POSITIONS.map((p, i) => ({
      ...SKILLS[i],
      tx: p.x * RADIUS,
      ty: p.y * RADIUS,
      tz: p.z * RADIUS,
      depth: p.z,
    }))
  );

  // Animate loop using requestAnimationFrame via Framer
  useAnimationFrame(() => {
    if (!dragRef.current.active) {
      // Auto-rotate + dampen velocity toward auto-speed
      velocityRef.current.y += (0.004 - velocityRef.current.y) * 0.02;
      velocityRef.current.x += (0 - velocityRef.current.x) * 0.02;
    }
    angleRef.current.y += velocityRef.current.y;
    angleRef.current.x += velocityRef.current.x;

    // Clamp X tilt so it doesn't flip
    angleRef.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, angleRef.current.x));

    setTags(
      BASE_POSITIONS.map((p, i) => {
        const rY = rotateY(p, angleRef.current.y);
        const rXY = rotateX(rY, angleRef.current.x);
        const depth = rXY.z; // -1 (back) to +1 (front)
        return {
          ...SKILLS[i],
          tx: rXY.x * RADIUS,
          ty: rXY.y * RADIUS,
          tz: depth * RADIUS,
          depth,
        };
      })
    );
  });

  // Pointer drag handlers
  const onPointerDown = (e) => {
    dragRef.current = { active: true, lastX: e.clientX, lastY: e.clientY };
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.lastX;
    const dy = e.clientY - dragRef.current.lastY;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    velocityRef.current.y = dx * 0.003;
    velocityRef.current.x = dy * 0.003;
  };

  const onPointerUp = () => {
    dragRef.current.active = false;
  };

  // Sort tags back-to-front for correct painter's algorithm
  const sortedTags = useMemo(
    () => [...tags].sort((a, b) => a.depth - b.depth),
    [tags]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center select-none"
      style={{ width: "100%", height: "340px", cursor: "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Nucleus */}
      <div className="absolute pointer-events-none z-10" style={{ transform: "translateZ(0)" }}>
        {/* Glow ring */}
        <div
          className="absolute rounded-full border border-cyan-400/30"
          style={{
            width: 90, height: 90,
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            boxShadow: "0 0 30px rgba(0,255,255,0.15), inset 0 0 20px rgba(0,255,255,0.05)",
            background: "radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Stats */}
        <div className="text-center" style={{ position: "relative" }}>
          <div
            className="text-[15px] font-mono font-bold"
            style={{ color: "#00ffff", textShadow: "0 0 14px #00ffff" }}
          >
            9.789
          </div>
          <div className="text-[8px] font-mono uppercase tracking-widest text-cyan-300/70">
            CGPA
          </div>
          <div className="mt-1 text-[12px] font-mono font-semibold text-white/90"
            style={{ textShadow: "0 0 8px rgba(0,255,255,0.4)" }}>
            100<span className="text-zinc-500 text-[9px]">/100</span>
          </div>
          <div className="text-[7px] font-mono uppercase tracking-widest text-cyan-300/60">
            AI Score
          </div>
        </div>
      </div>

      {/* Skill Tags */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "600px" }}
      >
        {sortedTags.map((tag) => {
          // depth: -1 (back) → +1 (front)
          const norm = (tag.depth + 1) / 2; // 0..1
          const opacity = 0.2 + norm * 0.8;
          const scale = 0.7 + norm * 0.45;
          const blur = norm > 0.5 ? 0 : (1 - norm * 2) * 1.5;

          return (
            <div
              key={tag.label}
              className="absolute font-mono text-xs whitespace-nowrap pointer-events-none transition-none"
              style={{
                transform: `translate3d(${tag.tx}px, ${tag.ty}px, ${tag.tz}px) scale(${scale})`,
                opacity,
                color: tag.color,
                textShadow:
                  norm > 0.6
                    ? `0 0 ${8 * norm}px ${tag.color}`
                    : "none",
                filter: blur > 0 ? `blur(${blur}px)` : "none",
                fontSize: "11px",
                letterSpacing: "0.05em",
              }}
            >
              {tag.label}
            </div>
          );
        })}
      </div>

      {/* Drag hint */}
      <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-widest text-zinc-600 pointer-events-none select-none">
        drag to rotate
      </p>
    </div>
  );
}
