export default function Logo() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center group cursor-pointer">
      {/* Outer orbits */}
      <div className="absolute inset-0 border border-zinc-700 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-cyan-400/50 transition-colors"></div>
      <div className="absolute inset-1 border border-zinc-700 rounded-full animate-[spin_8s_linear_infinite_reverse] group-hover:border-cyan-400/50 transition-colors" style={{ transform: 'rotateX(60deg)' }}></div>
      <div className="absolute inset-1 border border-zinc-700 rounded-full animate-[spin_8s_linear_infinite]" style={{ transform: 'rotateY(60deg)' }}></div>
      
      {/* Nucleus / Text */}
      <span className="font-bold text-white text-lg tracking-tighter relative z-10 group-hover:text-cyan-400 transition-colors">AJ</span>
    </div>
  );
}
