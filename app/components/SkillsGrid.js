"use client";

import { motion } from "framer-motion";

export default function SkillsGrid() {
  const skillsData = [
    {
      title: "Languages",
      items: ["Python", "C", "Verilog VHDL", "MYSQL", "Javascript (Basic)"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React", "Django", "FastAPI", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    },
    {
      title: "Tools & Hardware",
      items: ["Git", "GitHub", "Artix-7 FPGA"],
    },
    {
      title: "AI Domains",
      items: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning (RL)", "Natural Language Processing (NLP)", "Computer Vision"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 flex flex-col justify-center border-y border-[#262626]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-sans font-normal tracking-tight mb-4 text-white uppercase">The Tech Stack</h2>
        <p className="text-sm text-zinc-500 tracking-widest uppercase mb-12 font-mono">Bento Grid Architecture</p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300 group"
            >
              <h3 className="text-lg font-sans font-medium text-white mb-6 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3 mt-auto">
                {category.items.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm text-zinc-400 font-sans flex items-start">
                    <span className="text-cyan-500 mr-2 opacity-50 group-hover:opacity-100 transition-opacity">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
