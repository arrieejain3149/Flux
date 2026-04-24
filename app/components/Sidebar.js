"use client";

import { useState } from "react";
import Logo from "./Logo";
import { Home, User, FolderGit2, Briefcase, Cpu, Globe, Code, Mail, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "domains", label: "AI Domains", icon: Cpu },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      animate={{ width: isCollapsed ? 96 : 300 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 h-screen bg-black border-r border-[#262626] z-[100] flex flex-col justify-between py-10"
    >
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex justify-center mb-8 cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
          <Logo />
        </div>

        <AnimatePresence>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col items-center gap-4 mb-10 overflow-hidden"
            >
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/arihant-jain-0a2503383" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://github.com/arrieejain3149" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
                  <Code className="w-5 h-5" />
                </a>
                <a href="mailto:arihantjain17052007@gmail.com" className="text-zinc-500 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full flex flex-col gap-6 px-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-6 text-zinc-500 hover:text-cyan-400 transition-colors group ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                title={isCollapsed ? item.label : ""}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform flex-shrink-0" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-sm uppercase tracking-widest font-normal whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-8 flex justify-center">
        {!isCollapsed ? (
          <div className="text-xs text-zinc-600 uppercase tracking-widest font-mono">
            SYS.V 2.0.0
          </div>
        ) : (
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00ffff]"></div>
        )}
      </div>
    </motion.nav>
  );
}
