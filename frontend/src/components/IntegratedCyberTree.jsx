// import React from 'react';

// const IntegratedCyberTree = () => {
//     const systems = [
//         { title: "Sales & Tracking", id: "01", side: "left", color: "from-orange-500 to-red-600" },
//         { title: "Payments & Records", id: "02", side: "right", color: "from-yellow-400 to-orange-500" },
//         { title: "Ops & Workflow", id: "03", side: "left", color: "from-pink-500 to-purple-600" },
//         { title: "Business Insights", id: "04", side: "right", color: "from-cyan-400 to-blue-600" },
//     ];

//     return (
//         <div className="bg-[#050505] min-h-screen relative overflow-hidden font-mono text-slate-300">

//             {/* --- 1. GLOBAL STYLES & ANIMATIONS --- */}
//             <style>{`
//         @keyframes sway {
//           0%, 100% { transform: rotate(-2deg); }
//           50% { transform: rotate(2deg); }
//         }
//         @keyframes flow {
//           0% { background-position: 0% 0%; }
//           100% { background-position: 0% 100%; }
//         }
//         .sway-slow { animation: sway 6s ease-in-out infinite; }
//         .sway-delayed { animation: sway 7s ease-in-out infinite reverse; }
//         .animate-flow { animation: flow 2s linear infinite; }
//       `}</style>

//             {/* --- 2. BACKGROUND AMBIANCE --- */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

//             {/* Ambient Glow behind the Hero */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>


//             {/* =========================================
//           3. THE TRUNK HEAD (HERO SECTION)
//          ========================================= */}
//             <section className="relative z-20 pt-24 pb-0 flex flex-col items-center text-center px-6">

//                 <div className="max-w-3xl relative">
//                     {/* Holographic Header */}
//                     <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-6 tracking-tight">
//                         Custom Business Systems
//                         <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500">
//                             Designed to Fit Your Workflow
//                         </span>
//                     </h1>

//                     <p className="mt-6 text-lg text-slate-400 leading-relaxed">
//                         We design internal software that centralizes operations and replaces fragmented tools and manual workflows.
//                     </p>

//                     <p className="mt-4 text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
//                         We don’t provide off-the-shelf products. Every system is designed
//                         around how your business actually operates.
//                     </p>

//                     <div className="relative flex flex-col items-center mt-12 group z-50">

//       {/* 1. THE STEM (Connecting trunk to fruit) */}
//       {/* It drops down into the top-center of the mango */}
//       <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-800 z-0">
//         <div className="absolute inset-0 bg-green-500 animate-[flow_1s_linear_infinite] bg-[length:100%_20px] bg-no-repeat opacity-80"></div>
//       </div>

//       {/* 2. THE ALPHONSO MANGO BUTTON */}
//       <a
//         href="#"
//         className="relative flex items-center justify-center
//         w-72 h-32

//         /* THE SHAPE MAGIC: 
//            TL=Broad Shoulder | TR=Stem attachment 
//            BR=The 'Beak' (Sharp) | BL=The 'Belly' (Fat) 
//         */
//         rounded-[55%_45%_30%_70%_/_60%_50%_50%_60%]

//         /* MANGO SKIN: Deep Golden Yellow to Orange */
//         bg-gradient-to-br from-[#FFD700] via-[#FFB347] to-[#FF8C00]

//         /* DEPTH: Inner highlight + Drop shadow */
//         shadow-[inset_-10px_-10px_20px_rgba(180,83,9,0.3),0_15px_35px_rgba(251,191,36,0.4)]

//         /* POSITION: Tilted to hang heavily */
//         -rotate-6 origin-top

//         /* HOVER EFFECTS */
//         transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
//         hover:scale-110 hover:rotate-0 hover:shadow-[0_20px_50px_rgba(251,191,36,0.6)]"
//       >

//         {/* SHINE (The glossy skin reflection) */}
//         <div className="absolute top-4 left-6 w-20 h-8 bg-white/40 rounded-full blur-md rotate-[-15deg] pointer-events-none"></div>

//         {/* TEXT LABEL */}
//         <span className="relative z-10 text-[#3F1D0B] font-black text-xl tracking-tight drop-shadow-sm rotate-6 group-hover:rotate-0 transition-transform">
//           Request a Demo
//         </span>
//       </a>

//       {/* 3. THE DATA CABLE (Dropping from the mango bottom to the tree) */}
//       {/* Adjusted left position to align with the 'belly' of the mango shape */}
//       <div className="absolute top-[85%] left-[45%] w-[3px] h-24 bg-slate-800 -z-10 overflow-hidden">
//          <div className="absolute inset-0 bg-green-500 animate-[flow_2s_linear_infinite] bg-[length:100%_50px] bg-no-repeat opacity-50"></div>
//       </div>

//     </div>   </div>
//             </section>


//             {/* =========================================
//           4. THE TREE STRUCTURE (TRUNK & BRANCHES)
//          ========================================= */}
//             <div className="relative w-full max-w-6xl mx-auto mt-[-2px] pb-32">

//                 {/* --- A. THE TRUNK (Central Spine) --- */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-8 md:w-12 z-0">
//                     {/* Main Pipe */}
//                     <div className="w-full h-full bg-slate-900 border-x-2 border-slate-800 relative overflow-hidden">
//                         {/* Energy Core pulsating up */}
//                         <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-green-500/20 via-green-400/5 to-transparent animate-pulse"></div>
//                         {/* Matrix Data Particles dropping down */}
//                         <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(34,197,94,0.5),transparent)] bg-[length:100%_150px] animate-flow opacity-30"></div>
//                     </div>

//                     {/* Connector Node (Where button cable meets trunk) */}
//                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center z-10">
//                         <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-pulse"></div>
//                     </div>

//                     {/* Roots at bottom */}
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-slate-900 to-transparent border-b border-slate-800 rounded-full blur-xl"></div>
//                 </div>


//                 {/* --- B. THE BRANCHES --- */}
//                 <div className="relative z-10 flex flex-col gap-32 pt-24">

//                     {/* ROW 1: TOP BRANCHES */}
//                     <div className="flex justify-center w-full relative">

//                         {/* Left Branch */}
//                         <div className="relative w-[40%] md:w-[350px] h-32 flex justify-start items-end pr-12 mr-8 md:mr-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
//                             {/* Mango */}
//                             <MangoNode data={systems[0]} className="sway-slow origin-top" />
//                         </div>

//                         {/* Right Branch */}
//                         <div className="relative w-[40%] md:w-[350px] h-32 flex justify-end items-end pl-12 ml-8 md:ml-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
//                             {/* Mango */}
//                             <MangoNode data={systems[1]} className="sway-delayed origin-top" />
//                         </div>
//                     </div>

//                     {/* ROW 2: BOTTOM BRANCHES */}
//                     <div className="flex justify-center w-full relative">

//                         {/* Left Branch */}
//                         <div className="relative w-[45%] md:w-[450px] h-32 flex justify-start items-end pr-12 mr-8 md:mr-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
//                             <MangoNode data={systems[2]} className="sway-delayed origin-top" />
//                         </div>

//                         {/* Right Branch */}
//                         <div className="relative w-[45%] md:w-[450px] h-32 flex justify-end items-end pl-12 ml-8 md:ml-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
//                             <MangoNode data={systems[3]} className="sway-slow origin-top" />
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- REUSED MANGO COMPONENT (UNCHANGED) ---
// const MangoNode = ({ data, className }) => {
//     return (
//         <div className={`relative group cursor-pointer ${className}`}>

//             {/* Stem */}
//             <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-700 group-hover:bg-green-500 transition-colors"></div>

//             {/* Fruit Body */}
//             <div className="w-56 md:w-64 relative transition-transform duration-300 group-hover:scale-105">

//                 {/* Glow */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${data.color} blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity`}></div>

//                 {/* Container */}
//                 <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-1 rounded-t-[20px] rounded-b-[60px] shadow-2xl overflow-hidden group-hover:border-white/30 transition-colors">

//                     {/* Juice Gradient */}
//                     <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 bg-gradient-to-t from-current to-transparent text-white pointer-events-none"></div>

//                     {/* Top Bar */}
//                     <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 bg-white/5">
//                         <span className="text-[10px] text-gray-400 font-bold tracking-widest">SYS // {data.id}</span>
//                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 pb-10 flex flex-col items-center text-center">
//                         <div className={`bg-gradient-to-r ${data.color} bg-clip-text text-transparent font-bold text-xl mb-2 drop-shadow-sm`}>
//                             {data.title}
//                         </div>
//                         <div className="text-gray-500 text-xs flex gap-2">
//                             <span>• DATA</span>
//                             <span>• LOGS</span>
//                             <span>• API</span>
//                         </div>
//                     </div>

//                     {/* Bottom Highlight */}
//                     <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${data.color} opacity-50`}></div>
//                 </div>
//             </div>


//         </div>
//     );

// };

// export default IntegratedCyberTree;


// Final but non responsive...

// const IntegratedCyberTree = () => {
//     const systems = [
//         { title: "Sales & Tracking", id: "01", side: "left", color: "from-orange-500 to-red-600" },
//         { title: "Payments & Records", id: "02", side: "right", color: "from-yellow-400 to-orange-500" },
//         { title: "Ops & Workflow", id: "03", side: "left", color: "from-pink-500 to-purple-600" },
//         { title: "Business Insights", id: "04", side: "right", color: "from-cyan-400 to-blue-600" },
//     ];

//     return (
//         <div className="bg-[#050505] min-h-screen relative overflow-hidden font-mono text-slate-300 selection:bg-green-500/30">

//             {/* --- 1. GLOBAL STYLES & ANIMATIONS --- */}
//             <style>{`
//                 @keyframes sway {
//                   0%, 100% { transform: rotate(-2deg); }
//                   50% { transform: rotate(2deg); }
//                 }
//                 @keyframes flow {
//                   0% { background-position: 0% 0%; }
//                   100% { background-position: 0% 100%; }
//                 }
//                 @keyframes cableflow {
//                   0% { background-position: 0% -40px; }
//                   100% { background-position: 0% 100%; }
//                 }
//                 .sway-slow { animation: sway 6s ease-in-out infinite; }
//                 .sway-delayed { animation: sway 7s ease-in-out infinite reverse; }
//                 .animate-flow { animation: flow 2s linear infinite; }
//             `}</style>

//             {/* --- 2. BACKGROUND AMBIANCE --- */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

//             {/* Ambient Glow behind the Hero */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>


//             {/* =========================================
//                 3. THE TRUNK HEAD (HERO SECTION)
//                ========================================= */}
//             <section className="relative z-20 pt-24 pb-0 flex flex-col items-center text-center px-6">

//                 <div className="max-w-3xl relative flex flex-col items-center">
//                     {/* Holographic Header */}
//                     <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-6 tracking-tight">
//                         Custom Business Systems
//                         <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500">
//                             Designed to Fit Your Workflow
//                         </span>
//                     </h1>

//                     <p className="mt-6 text-lg text-slate-400 leading-relaxed">
//                         We design internal software that centralizes operations and replaces fragmented tools and manual workflows.
//                     </p>

//                     <p className="mt-4 text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-8">
//                         We don’t provide off-the-shelf products. Every system is designed
//                         around how your business actually operates.
//                     </p>

//                     {/* === THE OVAL MANGO BUTTON === */}
//                     <div className="relative flex flex-col items-center mt-8 z-50">

//                         {/* 1. THE STEM (Top Connection) */}
//                         <div className="absolute -top-6 w-[2px] h-8 bg-slate-700 overflow-hidden">
//                             <div className="absolute top-0 left-0 w-full h-1/2 bg-green-400 blur-[1px] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
//                         </div>

//                         {/* 2. THE BUTTON ITSELF */}
//                         <a
//                             href="#"
//                             className="relative group flex items-center justify-center px-12 py-5

//                             /* SHAPE: Perfect Oval */
//                             rounded-full

//                             /* COLOR: Rich Mango Gradient */
//                             bg-gradient-to-r from-amber-400 via-orange-500 to-red-500

//                             /* GLOW: Neon outer glow */
//                             shadow-[0_0_40px_-5px_rgba(245,158,11,0.5)]

//                             /* INTERACTION */
//                             transition-all duration-300
//                             hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(245,158,11,0.8)] hover:-translate-y-1"
//                         >
//                             {/* GLOSS EFFECT (Top Half Highlight) */}
//                             <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent opacity-100 rounded-t-full pointer-events-none"></div>

//                             {/* INNER GLOW (Bottom Rim) */}
//                             <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_-4px_10px_rgba(0,0,0,0.2)]"></div>

//                             {/* TEXT */}
//                             <span className="relative z-10 text-white font-bold text-lg tracking-wide drop-shadow-md group-hover:text-amber-50 transition-colors">
//                                 Request a Demo
//                             </span>
//                         </a>

//                         {/* 3. THE DATA CABLE (Bottom Connection to Trunk) */}
//                         <div className="absolute top-full w-[2px] h-24 bg-slate-800 -z-10 overflow-hidden">
//                             {/* Green energy pulsing down */}
//                             <div className="absolute inset-0 bg-green-500 animate-[cableflow_1.5s_linear_infinite] bg-[length:100%_40px] bg-no-repeat opacity-80"></div>
//                         </div>

//                     </div>
//                 </div>
//             </section>


//             {/* =========================================
//                 4. THE TREE STRUCTURE (TRUNK & BRANCHES)
//                ========================================= */}
//             <div className="relative w-full max-w-6xl mx-auto mt-[-2px] pb-32">

//                 {/* --- A. THE TRUNK (Central Spine) --- */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-8 md:w-12 z-0">
//                     {/* Main Pipe */}
//                     <div className="w-full h-full bg-slate-900 border-x-2 border-slate-800 relative overflow-hidden">
//                         {/* Energy Core pulsating up */}
//                         <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-green-500/20 via-green-400/5 to-transparent animate-pulse"></div>
//                         {/* Matrix Data Particles dropping down */}
//                         <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(34,197,94,0.5),transparent)] bg-[length:100%_150px] animate-flow opacity-30"></div>
//                     </div>

//                     {/* Connector Node (Where button cable meets trunk) */}
//                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center z-10">
//                         <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-pulse"></div>
//                     </div>

//                     {/* Roots at bottom */}
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-slate-900 to-transparent border-b border-slate-800 rounded-full blur-xl"></div>
//                 </div>


//                 {/* --- B. THE BRANCHES --- */}
//                 <div className="relative z-10 flex flex-col gap-32 pt-24">

//                     {/* ROW 1: TOP BRANCHES */}
//                     <div className="flex justify-center w-full relative">

//                         {/* Left Branch */}
//                         <div className="relative w-[40%] md:w-[350px] h-32 flex justify-start items-end pr-12 mr-8 md:mr-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
//                             {/* Mango */}
//                             <MangoNode data={systems[0]} className="sway-slow origin-top" />
//                         </div>

//                         {/* Right Branch */}
//                         <div className="relative w-[40%] md:w-[350px] h-32 flex justify-end items-end pl-12 ml-8 md:ml-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
//                             {/* Mango */}
//                             <MangoNode data={systems[1]} className="sway-delayed origin-top" />
//                         </div>
//                     </div>

//                     {/* ROW 2: BOTTOM BRANCHES */}
//                     <div className="flex justify-center w-full relative">

//                         {/* Left Branch */}
//                         <div className="relative w-[45%] md:w-[450px] h-32 flex justify-start items-end pr-12 mr-8 md:mr-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
//                             <MangoNode data={systems[2]} className="sway-delayed origin-top" />
//                         </div>

//                         {/* Right Branch */}
//                         <div className="relative w-[45%] md:w-[450px] h-32 flex justify-end items-end pl-12 ml-8 md:ml-12">
//                             {/* Curve */}
//                             <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
//                             <MangoNode data={systems[3]} className="sway-slow origin-top" />
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- REUSED MANGO COMPONENT (UNCHANGED) ---
// const MangoNode = ({ data, className }) => {
//     return (
//         <div className={`relative group cursor-pointer ${className}`}>

//             {/* Stem */}
//             <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-700 group-hover:bg-green-500 transition-colors"></div>

//             {/* Fruit Body */}
//             <div className="w-56 md:w-64 relative transition-transform duration-300 group-hover:scale-105">

//                 {/* Glow */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${data.color} blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity`}></div>

//                 {/* Container */}
//                 <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-1 rounded-t-[20px] rounded-b-[60px] shadow-2xl overflow-hidden group-hover:border-white/30 transition-colors">

//                     {/* Juice Gradient */}
//                     <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 bg-gradient-to-t from-current to-transparent text-white pointer-events-none"></div>

//                     {/* Top Bar */}
//                     <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 bg-white/5">
//                         <span className="text-[10px] text-gray-400 font-bold tracking-widest">SYS // {data.id}</span>
//                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 pb-10 flex flex-col items-center text-center">
//                         <div className={`bg-gradient-to-r ${data.color} bg-clip-text text-transparent font-bold text-xl mb-2 drop-shadow-sm`}>
//                             {data.title}
//                         </div>
//                         <div className="text-gray-500 text-xs flex gap-2">
//                             <span>• DATA</span>
//                             <span>• LOGS</span>
//                             <span>• API</span>
//                         </div>
//                     </div>

//                     {/* Bottom Highlight */}
//                     <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${data.color} opacity-50`}></div>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default IntegratedCyberTree;


// Option 1 for resp

// import React from 'react';

// const IntegratedCyberTree = () => {
//     const systems = [
//         { title: "Sales & Tracking", id: "01", side: "left", color: "from-orange-500 to-red-600" },
//         { title: "Payments & Records", id: "02", side: "right", color: "from-yellow-400 to-orange-500" },
//         { title: "Ops & Workflow", id: "03", side: "left", color: "from-pink-500 to-purple-600" },
//         { title: "Business Insights", id: "04", side: "right", color: "from-cyan-400 to-blue-600" },
//     ];

//     return (
//         <div className="bg-[#050505] min-h-screen relative overflow-hidden font-mono text-slate-300 selection:bg-green-500/30">

//             {/* --- 1. GLOBAL STYLES & ANIMATIONS --- */}
//             <style>{`
//                 @keyframes sway {
//                   0%, 100% { transform: rotate(-2deg); }
//                   50% { transform: rotate(2deg); }
//                 }
//                 @keyframes flow {
//                   0% { background-position: 0% 0%; }
//                   100% { background-position: 0% 100%; }
//                 }
//                 @keyframes cableflow {
//                   0% { background-position: 0% -40px; }
//                   100% { background-position: 0% 100%; }
//                 }
//                 .sway-slow { animation: sway 6s ease-in-out infinite; }
//                 .sway-delayed { animation: sway 7s ease-in-out infinite reverse; }
//                 .animate-flow { animation: flow 2s linear infinite; }
//             `}</style>

//             {/* --- 2. BACKGROUND AMBIANCE --- */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

//             {/* =========================================
//                 3. THE TRUNK HEAD (HERO SECTION)
//                ========================================= */}
//             <section className="relative z-20 pt-24 pb-0 flex flex-col items-center text-center px-6">
//                 <div className="max-w-3xl relative flex flex-col items-center">
//                     <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-6 tracking-tight">
//                         Custom Business Systems
//                         <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500">
//                             Designed to Fit Your Workflow
//                         </span>
//                     </h1>

//                     <p className="mt-6 text-lg text-slate-400 leading-relaxed">
//                         We design internal software that centralizes operations and replaces fragmented tools and manual workflows.
//                     </p>

//                     <p className="mt-4 text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-8">
//                         We don’t provide off-the-shelf products. Every system is designed around how your business actually operates.
//                     </p>

//                     {/* === THE OVAL MANGO BUTTON === */}
//                     <div className="relative flex flex-col items-center mt-8 z-50">
//                         {/* Stem */}
//                         <div className="absolute -top-6 w-[2px] h-8 bg-slate-700 overflow-hidden">
//                             <div className="absolute top-0 left-0 w-full h-1/2 bg-green-400 blur-[1px] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
//                         </div>

//                         {/* Button */}
//                         <a href="#" className="relative group flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 shadow-[0_0_40px_-5px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(245,158,11,0.8)] hover:-translate-y-1">
//                             <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent opacity-100 rounded-t-full pointer-events-none"></div>
//                             <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_-4px_10px_rgba(0,0,0,0.2)]"></div>
//                             <span className="relative z-10 text-white font-bold text-lg tracking-wide drop-shadow-md group-hover:text-amber-50 transition-colors">Request a Demo</span>
//                         </a>

//                         {/* Data Cable */}
//                         <div className="absolute top-full w-[2px] h-24 bg-slate-800 -z-10 overflow-hidden">
//                             <div className="absolute inset-0 bg-green-500 animate-[cableflow_1.5s_linear_infinite] bg-[length:100%_40px] bg-no-repeat opacity-80"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* =========================================
//                 4. THE TREE STRUCTURE (TRUNK & BRANCHES)
//                ========================================= */}
//             <div className="relative w-full max-w-6xl mx-auto mt-[-2px] pb-32">

//                 {/* --- A. THE TRUNK (Central Spine) --- */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-2 md:w-8 lg:w-12 z-0">
//                     <div className="w-full h-full bg-slate-900 border-x border-slate-800 relative overflow-hidden">
//                         <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-green-500/20 via-green-400/5 to-transparent animate-pulse"></div>
//                         <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(34,197,94,0.5),transparent)] bg-[length:100%_150px] animate-flow opacity-30"></div>
//                     </div>

//                     {/* Top Connector */}
//                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 md:w-16 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center z-10">
//                         <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-pulse"></div>
//                     </div>

//                     {/* Bottom Roots */}
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-48 h-24 bg-gradient-to-t from-slate-900 to-transparent border-b border-slate-800 rounded-full blur-xl"></div>
//                 </div>

//                 {/* --- B. THE BRANCHES --- */}
//                 <div className="relative z-10 flex flex-col gap-16 md:gap-32 pt-24 px-4 md:px-0">

//                     {/* ROW 1: TOP BRANCHES */}
//                     <div className="flex flex-col md:flex-row justify-center w-full relative gap-16 md:gap-0">

//                         {/* Left Branch */}
//                         <div className="relative w-full md:w-[350px] h-auto md:h-32 flex justify-center md:justify-start items-center md:items-end md:pr-12 md:mr-12">
//                             {/* Curve Desktop */}
//                             <div className="hidden md:block absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
//                             {/* Curve Mobile */}
//                             <div className="md:hidden absolute top-[-64px] left-1/2 w-[50%] h-[64px] border-l-[2px] border-b-[2px] border-slate-800 rounded-bl-[20px] pointer-events-none"></div>
//                             <MangoNode data={systems[0]} className="sway-slow origin-top" />
//                         </div>

//                         {/* Right Branch */}
//                         <div className="relative w-full md:w-[350px] h-auto md:h-32 flex justify-center md:justify-end items-center md:items-end md:pl-12 md:ml-12">
//                             {/* Curve Desktop */}
//                             <div className="hidden md:block absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
//                             {/* Curve Mobile (Flipped) */}
//                             <div className="md:hidden absolute top-[-64px] right-1/2 w-[50%] h-[64px] border-r-[2px] border-b-[2px] border-slate-800 rounded-br-[20px] pointer-events-none"></div>
//                             <MangoNode data={systems[1]} className="sway-delayed origin-top" />
//                         </div>
//                     </div>

//                     {/* ROW 2: BOTTOM BRANCHES */}
//                     <div className="flex flex-col md:flex-row justify-center w-full relative gap-16 md:gap-0">

//                         {/* Left Branch */}
//                         <div className="relative w-full md:w-[450px] h-auto md:h-32 flex justify-center md:justify-start items-center md:items-end md:pr-12 md:mr-12">
//                             <div className="hidden md:block absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-[40px] pointer-events-none"></div>
//                              {/* Curve Mobile */}
//                              <div className="md:hidden absolute top-[-64px] left-1/2 w-[50%] h-[64px] border-l-[2px] border-b-[2px] border-slate-800 rounded-bl-[20px] pointer-events-none"></div>
//                             <MangoNode data={systems[2]} className="sway-delayed origin-top" />
//                         </div>

//                         {/* Right Branch */}
//                         <div className="relative w-full md:w-[450px] h-auto md:h-32 flex justify-center md:justify-end items-center md:items-end md:pl-12 md:ml-12">
//                             <div className="hidden md:block absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[3px] border-r-[3px] border-slate-700 rounded-br-[40px] pointer-events-none"></div>
//                              {/* Curve Mobile (Flipped) */}
//                              <div className="md:hidden absolute top-[-64px] right-1/2 w-[50%] h-[64px] border-r-[2px] border-b-[2px] border-slate-800 rounded-br-[20px] pointer-events-none"></div>
//                             <MangoNode data={systems[3]} className="sway-slow origin-top" />
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- REUSED MANGO COMPONENT ---
// const MangoNode = ({ data, className }) => {
//     return (
//         <div className={`relative group cursor-pointer ${className} z-10`}>
//             {/* Stem */}
//             <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-700 group-hover:bg-green-500 transition-colors"></div>

//             {/* Fruit Body */}
//             <div className="w-[85vw] max-w-[280px] md:w-64 relative transition-transform duration-300 group-hover:scale-105">
//                 {/* Glow */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${data.color} blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity`}></div>

//                 {/* Container */}
//                 <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-1 rounded-t-[20px] rounded-b-[60px] shadow-2xl overflow-hidden group-hover:border-white/30 transition-colors">
//                     {/* Juice Gradient */}
//                     <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 bg-gradient-to-t from-current to-transparent text-white pointer-events-none"></div>

//                     {/* Top Bar */}
//                     <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 bg-white/5">
//                         <span className="text-[10px] text-gray-400 font-bold tracking-widest">SYS // {data.id}</span>
//                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 pb-10 flex flex-col items-center text-center">
//                         <div className={`bg-gradient-to-r ${data.color} bg-clip-text text-transparent font-bold text-xl mb-2 drop-shadow-sm`}>
//                             {data.title}
//                         </div>
//                         <div className="text-gray-500 text-xs flex gap-2">
//                             <span>• DATA</span>
//                             <span>• LOGS</span>
//                             <span>• API</span>
//                         </div>
//                     </div>

//                     {/* Bottom Highlight */}
//                     <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${data.color} opacity-50`}></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default IntegratedCyberTree;


// Option 2 for resp...

import React from 'react';

const IntegratedCyberTree = () => {
    const systems = [
        { title: "Sales & Lead Tracking", tags: ["LEADS", "PIPELINE", "FOLLOW-UPS"], id: "01", side: "left", color: "from-orange-500 to-red-600" },
        { title: "Billing, Invoices & Records", id: "02", side: "right", color: "from-yellow-400 to-orange-500" },
        { title: "Operations & Team Workflow", id: "03", side: "left", color: "from-pink-500 to-purple-600" },
        { title: "Reports & Business Insights", id: "04", side: "right", color: "from-cyan-400 to-blue-600" },
    ];

    return (
        <div className="bg-[#050505] min-h-screen relative overflow-hidden font-mono text-slate-300 selection:bg-green-500/30">

            {/* --- GLOBAL STYLES --- */}
            <style>{`
                @keyframes sway {
                  0%, 100% { transform: rotate(-2deg); }
                  50% { transform: rotate(2deg); }
                }
                @keyframes flow {
                  0% { background-position: 0% 0%; }
                  100% { background-position: 0% 100%; }
                }
                @keyframes cableflow {
                  0% { background-position: 0% -40px; }
                  100% { background-position: 0% 100%; }
                }
                .sway-slow { animation: sway 6s ease-in-out infinite; }
                .sway-delayed { animation: sway 7s ease-in-out infinite reverse; }
                .animate-flow { animation: flow 2s linear infinite; }
            `}</style>

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>


            {/* =========================================
                HERO SECTION
               ========================================= */}
            <section className="relative z-20 pt-20 pb-0 flex flex-col items-center text-center px-4">
                <div className="max-w-3xl relative flex flex-col items-center">

                    {/* Responsive Text Sizes */}
                    <h1 className="text-3xl md:text-6xl font-semibold leading-tight text-white mb-4 md:mb-6 tracking-tight">
                        Custom Business Systems
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500">
                            Designed to Fit Your Workflow
                        </span>
                    </h1>

                    <p className="mt-4 md:mt-6 text-sm md:text-lg text-slate-400 leading-relaxed max-w-xl">
                        We design internal software that centralizes operations and replaces fragmented tools.
                    </p>
                    <p className="mt-4 md:mt-6 text-sm md:text-lg text-slate-400 leading-relaxed max-w-xl">
                        Each system works independently, but together they form one integrated operational platform.
                    </p>

                    {/* === THE OVAL MANGO BUTTON === */}
                    <div className="relative flex flex-col items-center mt-8 z-50 scale-90 md:scale-100">
                        <div className="absolute -top-6 w-[2px] h-8 bg-slate-700 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-green-400 blur-[1px] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        </div>

                        <a href="/contact" className="relative group flex items-center justify-center px-8 py-4 md:px-12 md:py-5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 shadow-[0_0_40px_-5px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(245,158,11,0.8)] hover:-translate-y-1">
                            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent opacity-100 rounded-t-full pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_-4px_10px_rgba(0,0,0,0.2)]"></div>
                            <span className="relative z-10 text-white font-bold text-sm md:text-lg tracking-wide drop-shadow-md">Request Demo</span>
                        </a>

                        <div className="absolute top-full w-[2px] h-16 md:h-24 bg-slate-800 -z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-green-500 animate-[cableflow_1.5s_linear_infinite] bg-[length:100%_40px] bg-no-repeat opacity-80"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================
                THE TREE STRUCTURE
               ========================================= */}
            <div className="relative w-full max-w-6xl mx-auto mt-[-2px] pb-24 md:pb-32">

                {/* --- A. THE TRUNK (Thinner on Mobile) --- */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-4 md:w-12 z-0">
                    <div className="w-full h-full bg-slate-900 border-x border-slate-800 relative overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-green-500/20 via-green-400/5 to-transparent animate-pulse"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(34,197,94,0.5),transparent)] bg-[length:100%_150px] animate-flow opacity-30"></div>
                    </div>

                    {/* Connector Node */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 md:w-16 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-48 h-24 bg-gradient-to-t from-slate-900 to-transparent border-b border-slate-800 rounded-full blur-xl"></div>
                </div>


                {/* --- B. THE BRANCHES (Preserving Left/Right Layout) --- */}
                <div className="relative z-10 flex flex-col gap-16 md:gap-32 pt-16 md:pt-24">

                    {/* ROW 1 */}
                    <div className="flex justify-center w-full relative">
                        {/* Left Branch */}
                        <div className="relative w-[45%] md:w-[350px] h-24 md:h-32 flex justify-start items-end pr-4 md:pr-12 mr-2 md:mr-12">
                            <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[2px] md:border-b-[3px] border-l-[2px] md:border-l-[3px] border-slate-700 rounded-bl-[20px] md:rounded-bl-[40px] pointer-events-none"></div>
                            <MangoNode data={systems[0]} className="sway-slow origin-top" />
                        </div>

                        {/* Right Branch */}
                        <div className="relative w-[45%] md:w-[350px] h-24 md:h-32 flex justify-end items-end pl-4 md:pl-12 ml-2 md:ml-12">
                            <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[2px] md:border-b-[3px] border-r-[2px] md:border-r-[3px] border-slate-700 rounded-br-[20px] md:rounded-br-[40px] pointer-events-none"></div>
                            <MangoNode data={systems[1]} className="sway-delayed origin-top" />
                        </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="flex justify-center w-full relative">
                        {/* Left Branch */}
                        <div className="relative w-[45%] md:w-[450px] h-24 md:h-32 flex justify-start items-end pr-4 md:pr-12 mr-2 md:mr-12">
                            <div className="absolute bottom-0 right-0 w-full h-[calc(100%+20px)] border-b-[2px] md:border-b-[3px] border-l-[2px] md:border-l-[3px] border-slate-700 rounded-bl-[20px] md:rounded-bl-[40px] pointer-events-none"></div>
                            <MangoNode data={systems[2]} className="sway-delayed origin-top" />
                        </div>

                        {/* Right Branch */}
                        <div className="relative w-[45%] md:w-[450px] h-24 md:h-32 flex justify-end items-end pl-4 md:pl-12 ml-2 md:ml-12">
                            <div className="absolute bottom-0 left-0 w-full h-[calc(100%+20px)] border-b-[2px] md:border-b-[3px] border-r-[2px] md:border-r-[3px] border-slate-700 rounded-br-[20px] md:rounded-br-[40px] pointer-events-none"></div>
                            <MangoNode data={systems[3]} className="sway-slow origin-top" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- RESPONSIVE MANGO NODE ---
const MangoNode = ({ data, className }) => {
    return (
        <div className={`relative group cursor-pointer ${className}`}>

            {/* Stem */}
            <div className="absolute -top-4 md:-top-8 left-1/2 -translate-x-1/2 w-[1px] md:w-1 h-4 md:h-8 bg-slate-700 group-hover:bg-green-500 transition-colors"></div>

            {/* Fruit Body: Scaled down for mobile */}
            <div className="w-[38vw] max-w-[160px] md:w-64 md:max-w-none relative transition-transform duration-300 group-hover:scale-105">

                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${data.color} blur-[20px] md:blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity`}></div>

                {/* Container */}
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-0 md:p-1 rounded-t-[10px] md:rounded-t-[20px] rounded-b-[30px] md:rounded-b-[60px] shadow-2xl overflow-hidden group-hover:border-white/30 transition-colors">

                    {/* Juice Gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 bg-gradient-to-t from-current to-transparent text-white pointer-events-none"></div>

                    {/* Top Bar (Hidden on very small screens, simplified on mobile) */}
                    <div className="flex justify-between items-center px-2 md:px-4 py-2 md:py-3 border-b border-white/5 bg-white/5">
                        <span className="text-[8px] md:text-[10px] text-gray-400 font-bold tracking-widest">SOL // {data.id}</span>
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
                    </div>

                    {/* Content */}
                    <div className="p-3 md:p-6 pb-6 md:pb-10 flex flex-col items-center text-center">
                        {/* Title: Smaller font on mobile */}
                        <div className={`bg-gradient-to-r ${data.color} bg-clip-text text-transparent font-bold text-xs md:text-xl mb-1 md:mb-2 drop-shadow-sm leading-tight`}>
                            {data.title}
                        </div>

                        {/* Tech details: Hidden on mobile to save space, visible on desktop */}
                        {/* <div className="hidden md:flex text-gray-500 text-xs gap-2">
                            {data.tags.map(tag => (
                                <span key={tag}>• {tag}</span>
                            ))}
                        </div> */}

                    </div>

                    {/* Bottom Highlight */}
                    <div className={`absolute bottom-0 inset-x-0 h-0.5 md:h-1 bg-gradient-to-r ${data.color} opacity-50`}></div>
                </div>
            </div>

        </div>
    );
};

export default IntegratedCyberTree;