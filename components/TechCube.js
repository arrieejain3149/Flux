"use client";
import { motion } from "framer-motion";

export const TechCube = () => {
  return (
    <div className="relative w-48 h-48 [perspective:1000px] flex items-center justify-center">
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative w-32 h-32 [transform-style:preserve-3d]"
      >
        {/* Wireframe Faces with CRED-style glow */}
        {[0, 90, 180, 270].map((deg, i) => (
          <div
            key={i}
            className="absolute inset-0 border-[0.5px] border-white/20 bg-white/[0.02] backdrop-blur-sm"
            style={{ transform: `rotateY(${deg}deg) translateZ(64px)` }}
          />
        ))}
        <div className="absolute inset-0 border-[0.5px] border-white/20 bg-white/[0.02]" style={{ transform: "rotateX(90deg) translateZ(64px)" }} />
        <div className="absolute inset-0 border-[0.5px] border-white/20 bg-white/[0.02]" style={{ transform: "rotateX(-90deg) translateZ(64px)" }} />
      </motion.div>
    </div>
  );
};