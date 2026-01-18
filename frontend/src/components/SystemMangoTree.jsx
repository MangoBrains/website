import React from 'react';

const CyberMechanicalTree = () => {
  const systems = [
    { title: "Sales & Tracking", id: "01", side: "left", color: "from-orange-500 to-red-600" },
    { title: "Payments & Records", id: "02", side: "right", color: "from-yellow-400 to-orange-500" },
    { title: "Ops & Workflow", id: "03", side: "left", color: "from-pink-500 to-purple-600" },
    { title: "Business Insights", id: "04", side: "right", color: "from-cyan-400 to-blue-600" },
  ];

  return (
    <section className="bg-[#050505] min-h-screen py-24 overflow-hidden relative flex justify-center items-start font-mono">
      
      {/* --- Global Styles for Keyframes --- */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .sway-slow { animation: sway 6s ease-in-out infinite; }
        .sway-delayed { animation: sway 7s ease-in-out infinite reverse; }
      `}</style>

      {/* --- Background Matrix Rain / Grid --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative w-full max-w-6xl mt-10">
        
        {/* =======================
            1. THE TREE TRUNK 
           ======================= */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[800px] w-8 md:w-12 z-0">
          {/* Main Trunk Pipe */}
          <div className="w-full h-full bg-slate-900 border-x-2 border-slate-800 relative overflow-hidden rounded-t-full">
            {/* Energy Core pulsating up */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-green-500/20 via-green-400/10 to-transparent animate-pulse"></div>
            {/* Moving data particles */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-20 bg-green-400 blur-[2px] top-[80%] animate-[ping_3s_linear_infinite]"></div>
          </div>
          
          {/* Trunk Base/Roots */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-12 bg-slate-900 border-t border-green-900/50 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,255,100,0.1)]"></div>
        </div>


        {/* =======================
            2. THE BRANCHES & FRUIT 
           ======================= */}
        <div className="relative z-10 flex flex-col gap-32 pt-12">

          {/* PAIR 1 (Top Branches) */}
          <div className="flex justify-center w-full relative">
            
            {/* LEFT BRANCH (Sales) */}
            <div className="relative w-[40%] md:w-[350px] h-32 flex justify-start items-end pr-12 mr-8 md:mr-12">
               {/* The Curve Connector */}
               <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
               {/* The Mango */}
               <MangoNode data={systems[0]} className="sway-slow origin-top" />
            </div>

            {/* RIGHT BRANCH (Payments) */}
            <div className="relative w-[40%] md:w-[350px] h-32 flex justify-end items-end pl-12 ml-8 md:ml-12">
               {/* The Curve Connector */}
               <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
               {/* The Mango */}
               <MangoNode data={systems[1]} className="sway-delayed origin-top" />
            </div>
            
          </div>

          {/* PAIR 2 (Bottom Branches - Wider) */}
          <div className="flex justify-center w-full relative">
            
            {/* LEFT BRANCH (Ops) */}
            <div className="relative w-[45%] md:w-[450px] h-32 flex justify-start items-end pr-12 mr-8 md:mr-12">
               {/* The Curve Connector */}
               <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
               <MangoNode data={systems[2]} className="sway-delayed origin-top" />
            </div>

            {/* RIGHT BRANCH (Insights) */}
            <div className="relative w-[45%] md:w-[450px] h-32 flex justify-end items-end pl-12 ml-8 md:ml-12">
               {/* The Curve Connector */}
               <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
               <MangoNode data={systems[3]} className="sway-slow origin-top" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: THE NEON MANGO ---
const MangoNode = ({ data, className }) => {
  return (
    <div className={`relative group cursor-pointer ${className}`}>
      
      {/* 1. STEM CONNECTION */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-700 group-hover:bg-green-500 transition-colors"></div>
      
      {/* 2. THE FRUIT SHAPE */}
      <div className="w-56 md:w-64 relative transition-transform duration-300 group-hover:scale-105">
        
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${data.color} blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity`}></div>

        {/* The Pod Container */}
        <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-1 rounded-t-[20px] rounded-b-[60px] shadow-2xl overflow-hidden group-hover:border-white/30 transition-colors">
            
            {/* Inner "Juice" Gradient (The liquid inside) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 bg-gradient-to-t from-current to-transparent text-white pointer-events-none"></div>
            
            {/* Top Bar */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 bg-white/5">
                <span className="text-[10px] text-gray-400 font-bold tracking-widest">SYS // {data.id}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
            </div>

            {/* Main Content Area */}
            <div className="p-6 pb-10 flex flex-col items-center text-center">
                <div className={`bg-gradient-to-r ${data.color} bg-clip-text text-transparent font-bold text-xl mb-2 drop-shadow-sm`}>
                    {data.title}
                </div>
                <div className="text-gray-500 text-xs flex gap-2">
                    <span>• DATA</span>
                    <span>• LOGS</span>
                    <span>• API</span>
                </div>
            </div>

            {/* Bottom Curve Highlight */}
            <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${data.color} opacity-50`}></div>
        </div>
      </div>
    </div>
  );
};

export default CyberMechanicalTree;