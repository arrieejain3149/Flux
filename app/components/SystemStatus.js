"use client";

import { Activity } from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="fixed bottom-6 right-6 w-64 bg-black/80 backdrop-blur-md border border-[#262626] rounded-lg overflow-hidden shadow-2xl z-50 pointer-events-none">
      <div className="bg-[#0A0A0A] border-b border-[#262626] px-3 py-2 flex items-center justify-between">
        <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">system_status.py</span>
        <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
      </div>
      <div className="p-4 font-mono text-[11px] leading-relaxed tracking-wide bg-[#050505]">
        <div>
          <span className="text-pink-500">class</span> <span className="text-yellow-300">Arihant</span><span className="text-zinc-400">:</span>
        </div>
        <div className="pl-4">
          <span className="text-pink-500">def</span> <span className="text-blue-400">__init__</span><span className="text-zinc-400">(</span><span className="text-orange-400">self</span><span className="text-zinc-400">):</span>
        </div>
        <div className="pl-8">
          <span className="text-orange-400">self</span><span className="text-zinc-400">.cgpa = </span><span className="text-purple-400">9.789</span>
        </div>
        <div className="pl-8 mt-1">
          <span className="text-orange-400">self</span><span className="text-zinc-400">.stack = [</span>
        </div>
        <div className="pl-12">
          <span className="text-green-400">"Python"</span><span className="text-zinc-400">, </span><span className="text-green-400">"C"</span><span className="text-zinc-400">,</span>
        </div>
        <div className="pl-12">
          <span className="text-green-400">"Verilog"</span><span className="text-zinc-400">, </span><span className="text-green-400">"React"</span>
        </div>
        <div className="pl-8 text-zinc-400">]</div>
      </div>
    </div>
  );
}
