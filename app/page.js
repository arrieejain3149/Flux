"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import SmoothScroll from "./components/SmoothScroll";
import Sidebar from "./components/Sidebar";
import HeroAtom from "./components/HeroAtom";
import ParticlesBackground from "./components/ParticlesBackground";
import SystemStatus from "./components/SystemStatus";
import DataPlayground from "./components/DataPlayground";
import DomainCloud from "./components/DomainCloud";

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <main className="bg-black text-white font-mono selection:bg-cyan-900/50 selection:text-white min-h-screen">
        
        {!showSplash && <Sidebar />}
        {!showSplash && <SystemStatus />}

        <AnimatePresence mode="wait">
          {showSplash ? (
            <motion.div 
              key="splash"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.p 
                className="text-lg md:text-2xl font-mono font-normal leading-relaxed max-w-4xl text-zinc-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great."
                <span className="block mt-6 text-sm text-cyan-400/80 uppercase tracking-widest">— Dr. A.P.J. Abdul Kalam</span>
              </motion.p>
            </motion.div>
          ) : (
            <motion.div 
              key="main"
              className="relative w-full ml-0 md:ml-24 transition-all duration-300 bg-black min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              
              {/* --- HERO SECTION --- */}
              <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pl-0 md:pl-8 bg-black">
                
                {/* Layer 1: Particles (z-index 10) */}
                <div className="absolute inset-0 z-10 mix-blend-screen pointer-events-none">
                  <ParticlesBackground />
                </div>
                
                {/* Layer 2: 3D Atom (z-index 10) */}
                <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-50">
                  <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <HeroAtom />
                  </Canvas>
                </div>

                {/* Layer 3: Massive Name (z-index 30) */}
                <div className="relative z-30 pointer-events-none w-full flex flex-col items-center justify-center">
                  <h1 className="text-[14vw] font-mono font-normal tracking-tighter leading-none whitespace-nowrap text-white text-center">
                    ARIHANT JAIN
                  </h1>
                </div>
                
              </section>

              <div className="pl-0 md:pl-20 max-w-6xl mx-auto px-6 md:px-12 pb-32">
                
                {/* --- ABOUT SECTION --- */}
                <section id="about" className="min-h-screen py-24 flex flex-col justify-center border-b border-[#262626]">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-normal tracking-tight mb-4 text-white uppercase">Identity & Logic</h2>
                    <p className="text-sm text-zinc-500 tracking-widest uppercase mb-12">Personal Architecture</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-lg font-normal text-white mb-6 uppercase tracking-widest border-b border-[#262626] pb-2">Education</h3>
                        <div className="space-y-6">
                          <div>
                            <p className="text-cyan-400 font-normal">JK Lakshmipat University (JKLU)</p>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">B.Tech CSE-AI</p>
                          </div>
                          <div>
                            <p className="text-white font-normal">Mahaveer Public School</p>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Class X & XII (CBSE)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-normal text-white mb-6 uppercase tracking-widest border-b border-[#262626] pb-2">Contact & Links</h3>
                        <div className="space-y-4">
                          <p className="text-sm text-zinc-400 flex items-center gap-3">
                            <span className="text-zinc-600 uppercase w-24 flex-shrink-0">Phone</span> +91-6367045695
                          </p>
                          <p className="text-sm text-zinc-400 flex items-center gap-3">
                            <span className="text-zinc-600 uppercase w-24 flex-shrink-0">Email</span> <a href="mailto:arihantjain17052007@gmail.com" className="hover:text-cyan-400 transition-colors break-all">arihantjain17052007@gmail.com</a>
                          </p>
                          <p className="text-sm text-zinc-400 flex items-center gap-3">
                            <span className="text-zinc-600 uppercase w-24 flex-shrink-0">JKLU Mail</span> <a href="mailto:arihantjain2025@jklu.edu.in" className="hover:text-cyan-400 transition-colors break-all">arihantjain2025@jklu.edu.in</a>
                          </p>
                          <p className="text-sm text-zinc-400 flex items-center gap-3">
                            <span className="text-zinc-600 uppercase w-24 flex-shrink-0">LinkedIn</span> <a href="https://www.linkedin.com/in/arihant-jain-0a2503383" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors break-all">linkedin.com/in/arihant-jain-0a2503383</a>
                          </p>
                          <p className="text-sm text-zinc-400 flex items-center gap-3">
                            <span className="text-zinc-600 uppercase w-24 flex-shrink-0">GitHub</span> <a href="https://github.com/arrieejain3149" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors break-all">github.com/arrieejain3149</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>
                
                {/* --- BLOCKCHAIN & WEB APPS --- */}
                <section id="projects" className="min-h-screen py-24 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-normal tracking-tight mb-4 text-white uppercase">Engineered Systems</h2>
                    <p className="text-sm text-zinc-500 tracking-widest uppercase mb-12">Blockchain & Web Architectures</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      
                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group">
                        <h3 className="text-xl font-normal text-white mb-3">Geminus</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                          Privacy-preserving AI Digital Twin built with FastAPI and Ollama for highly secure personal productivity automation.
                        </p>
                        <div className="mt-auto">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#111] px-3 py-1 rounded border border-[#262626]">FastAPI • Ollama</span>
                        </div>
                      </div>

                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group">
                        <h3 className="text-xl font-normal text-white mb-3">Pricetator</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                          Full-stack e-commerce price comparison engine built on React and Django.
                        </p>
                        <div className="mt-auto">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#111] px-3 py-1 rounded border border-[#262626]">React • Django</span>
                        </div>
                      </div>

                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group">
                        <h3 className="text-xl font-normal text-white mb-3">FPGA Logic Design</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                          Sequential logic gates and adder circuits implemented on Artix-7 boards using Verilog HDL.
                        </p>
                        <div className="mt-auto">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#111] px-3 py-1 rounded border border-[#262626]">Verilog • Artix-7</span>
                        </div>
                      </div>

                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group">
                        <h3 className="text-xl font-normal text-white mb-3">Weather Analytics</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                          Data analytics tool to process, analyze, and visualize complex meteorological datasets dynamically.
                        </p>
                        <div className="mt-auto">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#111] px-3 py-1 rounded border border-[#262626]">Python • Pandas</span>
                        </div>
                      </div>

                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group">
                        <h3 className="text-xl font-normal text-white mb-3">K-Means Explorer</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                          Visually outputs clustering data, applying foundational machine learning concepts for spatial awareness.
                        </p>
                        <div className="mt-auto">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#111] px-3 py-1 rounded border border-[#262626]">Scikit-learn</span>
                        </div>
                      </div>
                      
                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group">
                        <h3 className="text-xl font-normal text-white mb-3">Rupayatrace</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                          Blockchain-based tracking and authentication architecture for secure transaction mapping.
                        </p>
                        <div className="mt-auto">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#111] px-3 py-1 rounded border border-[#262626]">Blockchain • Web3</span>
                        </div>
                      </div>

                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group">
                        <h3 className="text-xl font-normal text-white mb-3">Gatitemp</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                          Dynamic web application built for operational velocity and optimized front-end delivery.
                        </p>
                        <div className="mt-auto">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#111] px-3 py-1 rounded border border-[#262626]">Dynamic Web App</span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </section>

                {/* --- AI & ML DOMAINS --- */}
                <section id="domains" className="min-h-[70vh] py-24 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-normal tracking-tight mb-4 text-white uppercase">Domain Knowledge</h2>
                    <p className="text-sm text-zinc-500 tracking-widest uppercase mb-12">Neural Network Sub-Fields</p>
                    
                    <DomainCloud />
                  </motion.div>
                </section>

                {/* --- LANGUAGES KNOWN --- */}
                <section id="languages" className="py-24 flex flex-col justify-center border-y border-[#262626]">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
                  >
                    <div>
                      <h2 className="text-2xl font-normal tracking-tight mb-2 text-white uppercase">Core Languages</h2>
                      <p className="text-sm text-zinc-500 tracking-widest uppercase">Syntax & Silicon</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {["Python", "C", "Verilog VHDL", "MYSQL", "Javascript"].map((lang) => (
                        <span key={lang} className="px-5 py-2 border border-[#262626] bg-[#050505] rounded-full text-sm text-zinc-300">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* --- DATA PLAYGROUND --- */}
                <section className="min-h-screen py-24 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-normal tracking-tight mb-4 text-white uppercase">K-Means Centroid Analytics</h2>
                    <p className="text-sm text-zinc-500 tracking-widest uppercase mb-12">Interactive Clustering Simulation</p>
                    <DataPlayground />
                  </motion.div>
                </section>

                {/* --- ACHIEVEMENTS --- */}
                <section id="achievements" className="py-24 flex flex-col justify-center border-t border-[#262626]">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-normal tracking-tight mb-4 text-white uppercase">Academic Milestones</h2>
                    <p className="text-sm text-zinc-500 tracking-widest uppercase mb-12">Performance Metrics</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 hover:border-cyan-400 transition-all flex flex-col justify-center">
                        <h3 className="text-4xl font-normal text-white mb-2">9.789</h3>
                        <p className="text-sm text-cyan-400 uppercase tracking-widest mb-1">1st Sem SGPA</p>
                        <p className="text-xs text-zinc-500 font-mono">JK Lakshmipat University</p>
                      </div>
                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 hover:border-cyan-400 transition-all flex flex-col justify-center">
                        <h3 className="text-4xl font-normal text-white mb-2">Rank 4</h3>
                        <p className="text-sm text-cyan-400 uppercase tracking-widest mb-1">Weekly Coding Contest</p>
                        <p className="text-xs text-zinc-500 font-mono">Overall 1st Year (2nd Sem)</p>
                      </div>
                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 hover:border-cyan-400 transition-all flex flex-col justify-center">
                        <h3 className="text-4xl font-normal text-white mb-2">90.6%</h3>
                        <p className="text-sm text-cyan-400 uppercase tracking-widest mb-1">Class XII (CBSE)</p>
                        <p className="text-xs text-zinc-500 font-mono">Mahaveer Public School</p>
                      </div>
                      <div className="bg-[#050505] border border-[#262626] rounded-xl p-8 hover:border-cyan-400 transition-all flex flex-col justify-center">
                        <h3 className="text-4xl font-normal text-white mb-2">91.8%</h3>
                        <p className="text-sm text-cyan-400 uppercase tracking-widest mb-1">Class X (CBSE)</p>
                        <p className="text-xs text-zinc-500 font-mono">Mahaveer Public School</p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* --- COMMUNITY & TIMELINE --- */}
                <section id="experience" className="min-h-screen py-24 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-normal tracking-tight mb-4 text-white uppercase">Community & Experience</h2>
                    <p className="text-sm text-zinc-500 tracking-widest uppercase mb-16">Academic Integration</p>
                    
                    <div className="relative border-l border-[#262626] ml-4 space-y-16 pb-8">
                      
                      <div className="relative pl-12 group">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00ffff]"></div>
                        <h3 className="text-xl font-normal text-white">Matrix Club</h3>
                        <p className="text-sm text-cyan-400 uppercase tracking-widest mt-1 mb-3">Internal Committee Member</p>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                          Orchestrating competitive programming events and fostering algorithmic development among peers.
                        </p>
                      </div>

                      <div className="relative pl-12 group">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#262626] group-hover:bg-cyan-400 transition-colors"></div>
                        <h3 className="text-xl font-normal text-white">Hackathons</h3>
                        <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1 mb-3">Active Participant</p>
                        <ul className="text-sm text-zinc-400 leading-relaxed max-w-2xl space-y-2">
                          <li>• HackJKLU v5.0 </li>
                          <li>• Pre Hackathon by Ws Cube Tech </li>
                          <li>• Smart India Hackathon (SIH) Internals</li>
                        </ul>
                      </div>

                      <div className="relative pl-12 group">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#262626] group-hover:bg-cyan-400 transition-colors"></div>
                        <h3 className="text-xl font-normal text-white">Sabrang Decor Committee</h3>
                        <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1 mb-3">Event Volunteer</p>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                          Assisted in event coordination and operations for the University cultural fest.
                        </p>
                      </div>

                      <div className="relative pl-12 group">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#262626] group-hover:bg-cyan-400 transition-colors"></div>
                        <h3 className="text-xl font-normal text-white">Mathutsav Quiz</h3>
                        <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1 mb-3">Competitor</p>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                          Applied mathematical modeling and problem-solving skills in competitive quiz environment.
                        </p>
                      </div>

                    </div>
                  </motion.div>
                </section>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </SmoothScroll>
  );
}
