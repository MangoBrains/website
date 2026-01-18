import React from 'react';

const MasterSystemTree = () => {
  const systems = [
    { title: "Sales & Tracking", id: "01", color: "from-orange-500 to-red-600" },
    { title: "Payments & Records", id: "02", color: "from-yellow-400 to-orange-500" },
    { title: "Ops & Workflow", id: "03", color: "from-pink-500 to-purple-600" },
    { title: "Business Insights", id: "04", color: "from-cyan-400 to-blue-600" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen relative overflow-hidden font-mono text-slate-300 selection:bg-green-500/30">
      
      {/* --- Global Keyframes --- */}
      <style>{`
        @keyframes flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        .animate-flow { animation: flow 3s linear infinite; }
        .sway-slow { animation: sway 6s ease-in-out infinite; }
        .sway-delayed { animation: sway 7s ease-in-out infinite reverse; }
      `}</style>

      {/* --- Background Texture --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* =========================================
          SECTION 1: THE TREE CROWN (HERO)
         ========================================= */}
      <section className="relative pt-32 pb-10 flex flex-col items-center z-20">
        
        {/* Glow behind the text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl text-center relative z-10 px-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/10 text-green-400 text-xs tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Architecture
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Custom Business Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500">
              Designed to Fit Your Workflow
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8 leading-relaxed">
            We don’t provide off-the-shelf products. We build internal software that centralizes operations, replacing fragmented tools with a unified digital ecosystem.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-green-400 transition-all duration-300 hover:scale-105"
          >
            Request a Demo
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            
            {/* Connector hanging from button */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-white via-green-500 to-transparent"></div>
          </a>
        </div>
      </section>


      {/* =========================================
          SECTION 2: THE TRUNK & BRANCHES
         ========================================= */}
      <div className="relative w-full max-w-7xl mx-auto pb-40">
        
        {/* --- CENTRAL TRUNK LINE (Connecting Hero to Tree) --- */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-20px] bottom-0 w-[2px] md:w-[4px] bg-slate-800 z-0">
          {/* Animated Data flowing down */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(34,197,94,0.8),transparent)] bg-[length:100%_200px] animate-flow"></div>
        </div>

        {/* --- JUNCTION NODES (Where branches split) --- */}
        <div className="absolute left-1/2 -translate-x-1/2 top-16 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_20px_#22c55e] z-10 border-4 border-black"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[400px] w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6] z-10 border-4 border-black"></div>


        {/* --- THE BRANCHES GRID --- */}
        <div className="relative z-10 pt-16 flex flex-col gap-24">

          {/* ROW 1 */}
          <div className="flex justify-center w-full">
            {/* Left Branch */}
            <Branch direction="left" width="w-[30%] md:w-[320px]">
              <MangoNode data={systems[0]} delay="delay-0" />
            </Branch>
            
            {/* Spacer for Trunk */}
            <div className="w-16 md:w-24 shrink-0"></div>

            {/* Right Branch */}
            <Branch direction="right" width="w-[30%] md:w-[320px]">
              <MangoNode data={systems[1]} delay="delay-100" />
            </Branch>
          </div>

          {/* ROW 2 */}
          <div className="flex justify-center w-full">
            {/* Left Branch (Wider) */}
            <Branch direction="left" width="w-[40%] md:w-[420px]">
              <MangoNode data={systems[2]} delay="delay-200" />
            </Branch>

            {/* Spacer for Trunk */}
            <div className="w-16 md:w-24 shrink-0"></div>

            {/* Right Branch (Wider) */}
            <Branch direction="right" width="w-[40%] md:w-[420px]">
              <MangoNode data={systems[3]} delay="delay-300" />
            </Branch>
          </div>

        </div>
      </div>

    </div>
  );
};

// --- HELPER 1: The Branch Connector (Curved Pipe) ---
const Branch = ({ direction, width, children }) => {
  const isLeft = direction === 'left';
  
  return (
    <div className={`relative h-24 flex items-end ${width} ${isLeft ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
      
      {/* The Pipe SVG/Border */}
      <div className={`absolute bottom-0 w-full h-[150%] border-slate-800
        ${isLeft 
          ? 'right-[-2px] border-b-[3px] border-l-[3px] rounded-bl-[40px] border-r-0' 
          : 'left-[-2px] border-b-[3px] border-r-[3px] rounded-br-[40px] border-l-0'}
      `}></div>

      {/* Connection Dot on the pipe */}
      <div className={`absolute bottom-0 w-2 h-2 rounded-full bg-slate-600 ${isLeft ? 'left-0' : 'right-0'}`}></div>

      {/* The Content (Mango) */}
      {children}
    </div>
  );
};

// --- HELPER 2: The Fruit (Card) ---
const MangoNode = ({ data, delay }) => {
  return (
    <div className={`relative group ${delay} hover:z-50`}>
      {/* Vertical Stem */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-slate-700 group-hover:bg-green-400 transition-colors"></div>

      {/* The Card */}
      <div className="w-60 md:w-72 relative transition-transform duration-500 hover:scale-105 origin-top sway-slow">
        
        {/* Backlight */}
        <div className={`absolute inset-0 bg-gradient-to-r ${data.color} blur-[30px] opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

        {/* Card Body */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden relative shadow-2xl group-hover:border-white/30 transition-colors">
            
            {/* Header Line */}
            <div className={`h-1 w-full bg-gradient-to-r ${data.color}`}></div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Module {data.id}</span>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${data.color} animate-pulse`}></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                {data.title}
              </h3>

              {/* Decorative Tech Specs */}
              <div className="flex gap-1 mt-4 opacity-30">
                 <div className="h-1 w-4 bg-white rounded-full"></div>
                 <div className="h-1 w-2 bg-white rounded-full"></div>
                 <div className="h-1 w-8 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Bottom Tech/Code aesthetic */}
            <div className="bg-black/50 p-2 border-t border-white/5 flex justify-between items-center text-[9px] text-slate-600 font-mono">
              <span>STATUS: ONLINE</span>
              <span>PING: 12ms</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MasterSystemTree;