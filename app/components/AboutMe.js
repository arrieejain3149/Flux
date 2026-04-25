"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SkillGlobe = dynamic(() => import("./SkillGlobe"), { ssr: false });

const TAGS = [
  { label: "AI & Machine Learning", color: "cyan" },
  { label: "Data Analytics",        color: "cyan" },
  { label: "Python · C",            color: "white" },
  { label: "B.Tech CSE-AI · JKLU",  color: "white" },
  { label: "Design Thinking",        color: "white" },
];

const FOCUS_AREAS = [
  {
    icon: "◈",
    title: "AI Domains",
    desc: "Supervised & unsupervised learning, NLP, Computer Vision, and Reinforcement Learning — exploring the full spectrum of intelligent systems.",
  },
  {
    icon: "◈",
    title: "Data Analytics",
    desc: "Transforming raw datasets into insight through statistical analysis, data visualisation, and predictive modelling.",
  },
  {
    icon: "◈",
    title: "Linear Regression & ML Fundamentals",
    desc: "Building intuition for how machines learn — from gradient descent to polynomial regression and beyond.",
  },
  {
    icon: "◈",
    title: "Python & C",
    desc: "Core languages powering everything from high-level ML pipelines (Python) to low-level algorithmic logic (C).",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-24 flex flex-col justify-center border-b border-[#262626]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-sans font-normal tracking-tight mb-4 text-white uppercase">
          Architecting Logic.
        </h2>
        <p className="text-sm text-zinc-500 tracking-widest uppercase mb-12 font-mono">
          The Learner&apos;s Path
        </p>

        {/* Main Glassmorphism Card */}
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden relative">
          {/* Ambient glow blobs */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">

            {/* ── LEFT: 3D Skill Globe ── */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
                Skill Constellation · Drag to Explore
              </p>
              <SkillGlobe />
            </div>

            {/* ── RIGHT: Bio ── */}
            <div className="flex flex-col justify-center p-8 md:p-12">

              {/* Identity line */}
              <h3 className="text-2xl text-white font-sans font-light leading-relaxed mb-2">
                Hi, I&apos;m{" "}
                <span
                  className="font-semibold text-cyan-400"
                  style={{ textShadow: "0 0 20px rgba(0,255,255,0.4)" }}
                >
                  Arihant Jain
                </span>
              </h3>
              <p className="text-zinc-400 font-sans leading-relaxed mb-8">
                A <span className="text-white">1st-year B.Tech student</span> at{" "}
                <span className="text-white">JK Lakshmipat University (JKLU)</span>,
                specialising in <span className="text-cyan-400">Computer Science &amp; AI</span>.
                I&apos;m driven by a genuine curiosity for how machines learn — from the
                mathematics of regression to the architecture of deep networks, I have Learned As of My Class 12th Some Basic About the Following AI Domains and Theory(Majorly).
              </p>

              {/* Focus-area highlights */}
              <div className="space-y-5 mb-10">
                {FOCUS_AREAS.map((area) => (
                  <motion.div
                    key={area.title}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex gap-4 group cursor-default"
                  >
                    <span className="text-cyan-500 mt-0.5 text-sm flex-shrink-0 group-hover:text-cyan-300 transition-colors">
                      {area.icon}
                    </span>
                    <div>
                      <p className="text-sm text-white font-sans font-medium mb-0.5">
                        {area.title}
                      </p>
                      <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Identity Tags */}
              <div className="flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <span
                    key={t.label}
                    className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors
                      ${
                        t.color === "cyan"
                          ? "text-cyan-400 border-cyan-500/30 bg-cyan-950/30 hover:border-cyan-400/60"
                          : "text-zinc-400 border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
