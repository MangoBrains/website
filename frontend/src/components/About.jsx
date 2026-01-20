// export default function About() {
//   return (
//     <main className="bg-black text-white">

//       {/* HEADER */}
//       <section className="border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-6 py-20">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl font-semibold">
//               About MangoBrains
//             </h1>
//             <p className="mt-6 text-lg text-gray-400">
//               MangoBrains is a technology studio focused on building
//               custom internal business systems that solve real
//               operational problems.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* PHILOSOPHY */}
//       <section className="border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-6 py-20">
//           <div className="max-w-3xl">
//             <h2 className="text-2xl font-semibold">
//               Our Philosophy
//             </h2>
//             <p className="mt-4 text-gray-400">
//               We believe software should adapt to businesses — not the
//               other way around. Our approach is grounded in understanding
//               workflows, constraints, and long-term goals before writing
//               code.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* WHY MANGOBRAINS */}
//       <section className="border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2">
//           <div>
//             <h2 className="text-2xl font-semibold">
//               Why MangoBrains
//             </h2>
//             <p className="mt-4 text-gray-400">
//               We don’t sell templates or licenses. Every system is built
//               from the ground up to match how your business actually runs.
//             </p>
//             <p className="mt-4 text-gray-400">
//               This results in software that is simpler, more efficient,
//               and easier to maintain over time.
//             </p>
//           </div>

//           <div className="border border-white/10 rounded-md p-6">
//             <ul className="space-y-4 text-sm text-gray-400">
//               <li>• Process-first system design</li>
//               <li>• Custom-built, not configured</li>
//               <li>• Long-term maintainability</li>
//               <li>• Direct collaboration</li>
//               <li>• No unnecessary features</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* TEAM NOTE */}
//       <section className="border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-6 py-20">
//           <div className="max-w-3xl">
//             <h2 className="text-2xl font-semibold">
//               Small Team, Focused Work
//             </h2>
//             <p className="mt-4 text-gray-400">
//               We operate as a small, focused team to ensure clarity,
//               accountability, and direct involvement throughout the
//               project lifecycle.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section>
//         <div className="max-w-7xl mx-auto px-6 py-24">
//           <div className="max-w-3xl">
//             <h2 className="text-3xl font-semibold">
//               Let’s Build Something Useful
//             </h2>
//             <p className="mt-4 text-gray-400">
//               If you value clarity, simplicity, and systems that evolve
//               with your business, we should talk.
//             </p>
//             <div className="mt-8">
//               <a
//                 href="#"
//                 className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
//               >
//                 Get in Touch
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }






import React from "react";
import CoreValues from "./CoreValues";

export default function About() {
  return (
    <main className="bg-[#050505] text-slate-300 font-mono selection:bg-green-500/30 overflow-x-hidden">

      {/* --- BACKGROUND AMBIANCE --- */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

      {/* =========================================
          BLOCK 1 — INTRO (HERO)
         ========================================= */}
      <section className="relative border-b border-white/5 pt-32 pb-24">
        <div className="absolute top-20 left-1/4 w-[500px] h-[300px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 text-xs tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              Identity Module
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">MangoBrains</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light border-l-2 border-green-500 pl-6">
              MangoBrains is a small  team that builds software to help
              businesses manage their day-to-day work — from coordination and tracking
              to reporting and decision-making.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================
          BLOCK 2 — MISSION & PHILOSOPHY (Split Grid)
         ========================================= */}
      <section className="relative border-b border-white/5 py-24">

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="max-w-4xl">

            {/* 1. The "Tech Label" - Aligned Left */}
            <div className="mb-8 flex items-center gap-3 opacity-50">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              <div className="w-12 h-[1px] bg-green-500"></div>
              <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Operational Focus</span>
            </div>

            {/* 2. The Content - Left Aligned with Green Border */}
            <div className="border-l-2 border-green-500 pl-6 md:pl-10 py-2">
              <p className="text-xl md:text-3xl text-slate-300 font-light leading-relaxed tracking-wide">
                We focus on the software and workflows that sit at the center of day-to-day
                operations — the tools people rely on to <span className="text-white font-medium border-b border-green-500/30">get work done</span>, share information,
                and keep things running.
              </p>

              <p className="mt-8 text-lg text-slate-500 leading-relaxed">
                Our work prioritizes clarity, reliability, and systems that remain usable as complexity increases.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          BLOCK 3 — CORE VALUES (The Axioms)
         ========================================= */}
      <CoreValues />




      {/* =========================================
          BLOCK 5 — CTA
         ========================================= */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505] to-[#050505] z-10"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let’s Talk Systems
          </h2>
          <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            If you’re looking to replace manual workflows or bring structure
            to internal operations, we should talk.
          </p>

          <div className="flex justify-center">
            <a href="/contact" className="relative group flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 shadow-[0_0_40px_-5px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(245,158,11,0.8)] hover:-translate-y-1">
              {/* Gloss Effect */}
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent opacity-100 rounded-t-full pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_-4px_10px_rgba(0,0,0,0.2)]"></div>

              <span className="relative z-10 text-white font-bold text-lg tracking-wide drop-shadow-md">
                Start a Conversation
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Animation Style */}
      <style>{`
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>

    </main>
  );
}