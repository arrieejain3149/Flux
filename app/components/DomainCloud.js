"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, Eye, MessageSquare, BrainCircuit, Activity } from "lucide-react";

export default function DomainCloud() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: "cv",
      title: "Computer Vision",
      icon: Eye,
      description: "Implementing spatial analysis algorithms and CNNs for high-accuracy image recognition and real-time processing streams.",
      position: { x: "20%", y: "25%" },
      color: "border-cyan-400",
      delay: 0
    },
    {
      id: "nlp",
      title: "NLP",
      icon: MessageSquare,
      description: "Building intelligent local LLM wrappers and parsing sequential language data for context-aware automation.",
      position: { x: "70%", y: "20%" },
      color: "border-slate-400",
      delay: 0.2
    },
    {
      id: "rl",
      title: "Reinforcement Learning",
      icon: BrainCircuit,
      description: "Exploring state-action reward optimization and autonomous agent behavior within constrained environments.",
      position: { x: "30%", y: "65%" },
      color: "border-cyan-400",
      delay: 0.4
    },
    {
      id: "ml",
      title: "Supervised & Unsupervised",
      icon: Activity,
      description: "Deploying predictive models, K-Means clustering, and statistical classification for complex data architectures.",
      position: { x: "75%", y: "60%" },
      color: "border-slate-400",
      delay: 0.6
    }
  ];

  return (
    <div className="relative w-full h-[450px] border border-[#262626] rounded-xl bg-[#030303] overflow-hidden flex items-center justify-center group">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Central Network Icon acting as the "Brain" */}
      <Network className="absolute inset-0 w-full h-full text-[#0a0a0a] scale-150 pointer-events-none transition-all duration-1000 group-hover:text-[#0f0f0f]" />

      {nodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;
        
        return (
          <motion.div
            key={node.id}
            className="absolute z-10"
            style={{ left: node.position.x, top: node.position.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay, duration: 0.8, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => setActiveNode(isActive ? null : node.id)}
              className={`relative flex flex-col items-center justify-center p-5 rounded-full bg-[#050505] border transition-all duration-300 ${node.color} ${isActive ? 'bg-cyan-950/20 shadow-[0_0_30px_rgba(0,255,255,0.15)] scale-110 z-20' : 'hover:bg-[#111] hover:scale-105 z-10'}`}
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 4 + node.delay, ease: "easeInOut" }
              }}
            >
              <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-cyan-400' : 'text-zinc-500'}`} />
              
              {/* Subtle pulsing ring for active state */}
              {isActive && (
                <span className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></span>
              )}
            </motion.button>
            
            {/* Label always visible beneath node */}
            <p className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-[10px] uppercase font-mono tracking-widest text-zinc-500 whitespace-nowrap">
              {node.title}
            </p>
          </motion.div>
        );
      })}

      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md p-6 rounded-xl bg-black/90 backdrop-blur-md border border-cyan-500/30 z-30 pointer-events-none shadow-[0_0_40px_rgba(0,255,255,0.05)]"
          >
            <h4 className="text-sm font-normal text-white uppercase tracking-widest mb-3 border-b border-[#262626] pb-2">
              {nodes.find(n => n.id === activeNode)?.title}
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed font-mono">
              {nodes.find(n => n.id === activeNode)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeNode && (
        <div className="absolute bottom-6 text-[10px] text-zinc-600 font-mono tracking-widest uppercase animate-pulse pointer-events-none">
          Select a node to inspect neural logic
        </div>
      )}
    </div>
  );
}
