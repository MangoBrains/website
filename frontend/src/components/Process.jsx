import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Process() {
  return (
    <main className="bg-[#050505] text-slate-300 font-mono overflow-x-hidden selection:bg-green-500/30">
      
      {/* --- GLOBAL STYLES --- */}
      <style>{`
        @keyframes flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        .animate-flow { animation: flow 2s linear infinite; }
      `}</style>

      {/* --- BACKGROUND AMBIANCE --- */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

      {/* =========================================
          BLOCK 1 — INTRO
         ========================================= */}
      <section className="relative border-b border-white/5 pt-32 pb-24">
        
        {/* Glow behind title */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Execution Protocol
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Work</span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-6 border-l-2 border-slate-800 pl-6">
              A clear, deliberate process for building internal systems that last.
            </p>
            
            <p className="text-slate-500 text-sm md:text-base max-w-2xl">
              We don’t rush into development or force businesses into predefined tools.
              Every engagement starts by understanding how your operations actually work.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================
          THE TIMELINE (STEPS 1-4)
         ========================================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        
        {/* THE DATA SPINE */}
        <div className="absolute left-6 md:left-[3.5rem] top-0 bottom-0 w-[2px] bg-slate-800">
           <div className="absolute inset-0 bg-gradient-to-b from-green-500 via-cyan-500 to-amber-500 opacity-20"></div>
           <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.5),transparent)] bg-[length:100%_200px] animate-[flow_3s_linear_infinite] opacity-30"></div>
        </div>

        {/* --- STEP 1: DISCOVERY --- */}
        <ProcessStep 
          id="01"
          title="Understanding Your Operations"
          subtitle="Before writing any code, we study how work moves through your business today."
          points={[
            "How data is created, updated, and shared",
            "Who is involved at each stage",
            "Where manual effort, delays, or errors occur",
            "What decisions depend on visibility or reporting"
          ]}
          color="from-cyan-500 to-blue-500"
          glowColor="rgba(6,182,212,0.5)" // Cyan Glow
        />

        {/* --- STEP 2: DESIGN --- */}
        <ProcessStep 
          id="02"
          title="System Design & Structure"
          subtitle="Once workflows are clear, we design the system structure — before building anything."
          points={[
            "Required modules and system boundaries",
            "Data flow between teams and functions",
            "Automation vs manual control",
            "Scalability as operations grow"
          ]}
          color="from-purple-500 to-pink-500"
          glowColor="rgba(168,85,247,0.5)" // Purple Glow
        />

        {/* --- STEP 3: BUILD --- */}
        <ProcessStep 
          id="03"
          title="Build & Implementation"
          subtitle="Systems are built in phases to minimize disruption and reduce risk."
          points={[
            "Incremental development",
            "Internal validation at each stage",
            "Early feedback from real users",
            "Stability prioritized over speed"
          ]}
          color="from-green-400 to-emerald-600"
          glowColor="rgba(34,197,94,0.5)" // Green Glow
        />

        {/* --- STEP 4: EVOLVE --- */}
        <ProcessStep 
          id="04"
          title="Adoption, Refinement & Support"
          subtitle="After launch, we focus on how the system performs in real-world use."
          points={[
            "Workflow refinement based on usage",
            "Usability and clarity improvements",
            "Logic updates as operations evolve",
            "Ongoing support when required"
          ]}
          color="from-amber-400 to-orange-600"
          glowColor="rgba(245,158,11,0.5)" // Amber Glow
        />

      </div>


      {/* =========================================
          BLOCK 6 — DIFFERENTIATOR
         ========================================= */}
      <section className="border-t border-b border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl pl-0 md:pl-8 border-l-4 border-green-500">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              A Process Built for Long-Term Use
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We prioritize <span className="text-white">operational clarity</span>, maintainable architecture, and systems
              designed to be relied on — not quick implementations or superficial features.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          BLOCK 8 — CTA (MANGO BUTTON)
         ========================================= */}
<section className="py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505] to-[#050505] z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start With a Conversation
          </h2>
          <p className="text-slate-400 mb-12 text-lg">
            Let’s understand how your business actually works before building anything.
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              onClick={() => window.scrollTo(0, 0)} // Ensures page starts at top
              className="relative group flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 shadow-[0_0_40px_-5px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(245,158,11,0.8)] hover:-translate-y-1"
            >
                {/* Gloss Effect */}
                <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent opacity-100 rounded-t-full pointer-events-none"></div>
                <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_-4px_10px_rgba(0,0,0,0.2)]"></div>
                
                <span className="relative z-10 text-white font-bold text-lg tracking-wide drop-shadow-md">
                   Start a Conversation
                </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- SUB-COMPONENT: PROCESS STEP (SCROLL ACTIVATED) ---
const ProcessStep = ({ id, title, subtitle, points, color, glowColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Sets visible when element intersects > 20% of viewport
        if (entry.isIntersecting) {
            setIsVisible(true);
        } else {
            // Optional: Set false if you want it to fade out when scrolling away
            setIsVisible(false); 
        }
      });
    }, { threshold: 0.2 }); // Trigger early so it feels responsive

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div 
      ref={domRef}
      className={`relative pl-12 md:pl-24 py-12 md:py-16 transition-opacity duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}
    >
      
      {/* 1. THE NODE (Glowing Dot on Spine) */}
      <div 
        className={`absolute left-[5px] md:left-[3.15rem] top-12 md:top-16 w-4 h-4 rounded-full border-2 transition-all duration-700 z-10
        ${isVisible 
            ? `border-transparent bg-gradient-to-r ${color} scale-125 shadow-[0_0_20px_${glowColor}]` 
            : 'bg-[#050505] border-slate-600 scale-100'}`}
      ></div>

      {/* 2. THE CARD CONTENT */}
      <div 
        className={`relative border rounded-2xl p-6 md:p-10 backdrop-blur-sm transition-all duration-700
        ${isVisible 
            ? 'bg-slate-900/50 border-white/10 shadow-2xl' 
            : 'bg-slate-900/10 border-white/5 shadow-none'}`}
      >
        
        {/* Glow Gradient (Activates on scroll) */}
        <div 
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} transition-opacity duration-1000 pointer-events-none
            ${isVisible ? 'opacity-5' : 'opacity-0'}`}
        ></div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative z-10">
          
          {/* Step Number */}
          <div 
            className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b transition-all duration-700
            ${isVisible ? 'from-white to-slate-600' : 'from-slate-700 to-transparent'}`}
          >
            {id}
          </div>
          
          <div className="flex-1">
            <h2 
                className={`text-2xl font-bold mb-3 transition-colors duration-700 
                ${isVisible ? 'text-white' : 'text-slate-500'}`}
            >
              {title}
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {subtitle}
            </p>
            
            {/* Points List */}
            <ul className="grid md:grid-cols-2 gap-3">
              {points.map((point, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm transition-colors duration-700 delay-[${i * 100}ms] ${isVisible ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span 
                    className={`mt-1.5 w-1 h-1 rounded-full transition-colors duration-700
                    ${isVisible ? `bg-gradient-to-r ${color}` : 'bg-slate-700'}`}
                  ></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative Side Strip (Lights up on scroll) */}
        <div 
            className={`absolute top-10 bottom-10 right-0 w-[2px] bg-gradient-to-b ${color} transition-opacity duration-1000
            ${isVisible ? 'opacity-50' : 'opacity-0'}`}
        ></div>

      </div>
    </div>
  );
};