import React from 'react';

const ProcessPipeline = () => {
  const steps = [
    { 
      title: "Understand Your Operations", 
      desc: "We start by understanding how your business currently works — your workflows, tools, data flow, and where things slow down or break.", 
      id: "01", 
      color: "from-cyan-500 to-blue-500", 
      icon: "ANALYSIS" 
    },
    { 
      title: "Define the System Structure", 
      desc: "Based on your operations, we define the system structure — modules, roles, permissions, and how information flows across the business.", 
      id: "02", 
      color: "from-purple-500 to-pink-500", 
      icon: "BLUEPRINT" 
    },
    { 
      title: "Build & Deploy in Phases", 
      desc: "The system is built in stages and deployed gradually, so your team can start using parts of it without disrupting daily operations.", 
      id: "03", 
      color: "from-green-400 to-emerald-600", 
      icon: "SYNTHESIS" 
    },
    { 
      title: "Improve, Scale & Support", 
      desc: "As your business grows, the system evolves — new workflows, reports, or integrations are added as needed.                          ", 
      id: "04", 
      color: "from-amber-400 to-orange-600", // THE MANGO FINISH
      icon: "HARVEST" 
    },
  ];

  return (
    <section className="bg-[#050505] relative py-32 overflow-hidden border-b border-white/5 font-mono">
      
      {/* --- BACKGROUND GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-amber-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        {/* <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 text-xs tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Process Protocol
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            From Chaos to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              Systematic Growth
            </span>
          </h2>
        </div> */}
        {/* --- HEADER --- */}
<div className="max-w-2xl mb-20 relative">
  
  {/* 1. Ambient Background Glow (Subtle Green/Cyan) */}
  <div className="absolute -top-10 -left-20 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

  {/* 2. Decorative Data Line */}
  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500 via-slate-800 to-transparent opacity-50 hidden md:block"></div>

  <div className="md:pl-8 relative">
    
    {/* 3. The Headline */}
    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
      From Workflow <br />
      {/* Gradient Emphasis on "System" */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-slate-200">
        to System
      </span>
    </h2>

    {/* 4. The Paragraph */}
    <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg">
      How we translate your business operations into <span className="text-slate-200 border-b border-green-500/30 pb-0.5">reliable internal software</span>.
    </p>

    {/* Optional: Small Tech Accent below */}
    <div className="mt-6 flex gap-1">
        <div className="w-2 h-1 bg-green-500/50 rounded-full"></div>
        <div className="w-1 h-1 bg-green-500/30 rounded-full"></div>
        <div className="w-1 h-1 bg-green-500/10 rounded-full"></div>
    </div>

  </div>
</div>


        {/* --- THE PIPELINE GRID --- */}
        <div className="relative grid gap-8 md:grid-cols-4 group/pipeline">
          
          {/* THE CONNECTING CABLE (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-slate-800 z-0">
             {/* Animated Pulse moving through the line */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/2 h-full blur-[2px] animate-[flow_4s_linear_infinite]"></div>
          </div>
          
          {/* THE CONNECTING CABLE (Mobile - Vertical) */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-slate-800 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="relative group cursor-default"
            >
              
              {/* 1. THE NODE (Circle on the line) */}
              <div className={`absolute top-8 md:top-12 left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#050505] border-2 border-slate-600 rounded-full z-10 group-hover:scale-150 transition-transform duration-500
                 group-hover:border-transparent group-hover:bg-gradient-to-r ${step.color} group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]`}
              ></div>

              {/* 2. THE CARD */}
              <div className="relative mt-4 md:mt-24 ml-16 md:ml-0 p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500
                group-hover:-translate-y-2 group-hover:bg-white/[0.04] group-hover:border-white/10"
              >
                
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-b ${step.color} transition-opacity duration-500`}></div>

                {/* Step Number */}
                <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-transparent mb-4 group-hover:from-white group-hover:to-slate-500 transition-all duration-500`}>
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.desc}
                </p>

                {/* Bottom Status Tech */}
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-600">
                   {/* <span>STATUS: READY</span> */}
                   <div className={`w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-gradient-to-r ${step.color} group-hover:shadow-[0_0_5px_currentColor] transition-all`}></div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default ProcessPipeline;