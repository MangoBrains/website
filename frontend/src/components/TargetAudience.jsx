// import React from 'react';

// const TargetAudience = () => {
//   const profiles = [
//     { 
//       label: "Founders & Owners", 
//       desc: "Visionaries needing high-level oversight.",
//     //   icon: "👑", 
//     //   color: "from-amber-400 to-orange-500", // Mango Gold
//       border: "group-hover:border-amber-500/50"
//     },
//     { 
//       label: "Operations Managers", 
//       desc: "Orchestrators of daily efficiency.",
//       icon: "⚙️", 
//       color: "from-cyan-400 to-blue-500", 
//       border: "group-hover:border-cyan-500/50"
//     },
//     { 
//       label: "Finance Teams", 
//       desc: "Guardians of records and reporting.",
//       icon: "📊", 
//       color: "from-emerald-400 to-green-600", 
//       border: "group-hover:border-green-500/50"
//     },
//     { 
//       label: "Sales & Admin", 
//       desc: "Frontline teams needing speed.",
//       icon: "🚀", 
//       color: "from-pink-500 to-rose-500", 
//       border: "group-hover:border-pink-500/50"
//     },
//     { 
//       label: "System Builders", 
//       desc: "Businesses creating internal tools.",
//       icon: "🛠️", 
//       color: "from-violet-500 to-purple-600", 
//       border: "group-hover:border-purple-500/50"
//     },
//     { 
//       label: "Workflow Optimizers", 
//       desc: "Teams replacing manual chaos.",
//       icon: "🔄", 
//       color: "from-orange-400 to-red-500", 
//       border: "group-hover:border-orange-500/50"
//     },
    
//   ];

//   return (
//     <section className="bg-[#050505] relative py-24 border-b border-white/5 font-mono overflow-hidden">
      
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* --- HEADER --- */}
//         <div className="max-w-2xl mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//             Designed for <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
//               Growing Businesses
//             </span>
//           </h2>
//           <p className="text-slate-400 text-lg">
//             For organizations ready to formalize their <span className="text-white">internal workflows</span> and operations.
//           </p>
//         </div>

//         {/* --- THE GRID --- */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {profiles.map((profile, index) => (
//             <div
//               key={profile.label}
//               className={`group relative bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${profile.border}`}
//             >
              
//               {/* Hover Glow Gradient Background */}
//               <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${profile.color} transition-opacity duration-500`}></div>

//               <div className="relative h-full bg-[#0A0A0A] rounded-lg p-6 flex flex-col justify-between z-10">
                
//                 {/* Header: Icon + ID */}
//                 <div className="flex justify-between items-start mb-4">
//                   <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${profile.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
//                     {profile.icon}
//                   </div>
//                   <span className="text-[10px] text-slate-600 font-bold tracking-widest">
//                     ID_0{index + 1}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-2 transition-colors">
//                     {profile.label}
//                   </h3>
//                   <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
//                     {profile.desc}
//                   </p>
//                 </div>

//                 {/* Decorative Tech Strip on the Right */}
//                 <div className={`absolute top-6 bottom-6 right-0 w-[2px] bg-gradient-to-b ${profile.color} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TargetAudience;


import React from 'react';

const TargetAudience = () => {
  const profiles = [
    { 
      label: "Founders & Owners", 
      desc: "Visionaries needing high-level oversight and automated reporting.",
      color: "from-amber-400 to-orange-500", 
      border: "group-hover:border-amber-500/50"
    },
    { 
      label: "Operations Managers", 
      desc: "Orchestrators ensuring daily efficiency and process compliance.",
      color: "from-cyan-400 to-blue-500", 
      border: "group-hover:border-cyan-500/50"
    },
    { 
      label: "Finance Teams", 
      desc: "Guardians requiring accurate records, invoices, and audit trails.",
      color: "from-emerald-400 to-green-600", 
      border: "group-hover:border-green-500/50"
    },
    { 
      label: "Sales & Admin", 
      desc: "Frontline teams needing speed, CRM access, and quick data entry.",
      color: "from-pink-500 to-rose-500", 
      border: "group-hover:border-pink-500/50"
    },
    { 
      label: "System Builders", 
      desc: "Internal teams looking for a robust foundation to build upon.",
      color: "from-violet-500 to-purple-600", 
      border: "group-hover:border-purple-500/50"
    },
    { 
      label: "Workflow Optimizers", 
      desc: "Organizations transitioning from spreadsheets to software.",
      color: "from-orange-400 to-red-500", 
      border: "group-hover:border-orange-500/50"
    },
  ];

  return (
    <section className="bg-[#050505] relative py-24 border-b border-white/5 font-mono overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Designed for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              Growing Businesses
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            For organizations ready to formalize their <span className="text-white">internal workflows</span>.
          </p>
        </div>

        {/* --- THE GRID --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <div
              key={profile.label}
              className={`group relative bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${profile.border}`}
            >
              
              {/* Hover Glow Gradient Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${profile.color} transition-opacity duration-500`}></div>

              <div className="relative h-full bg-[#0A0A0A] rounded-lg p-6 flex flex-col justify-between z-10 min-h-[180px]">
                
                {/* Header: Signal Bar + ID */}
                <div className="flex justify-between items-center mb-6">
                  {/* The Signal Bar (Replaces Icon visual weight) */}
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${profile.color} group-hover:w-20 transition-all duration-500`}></div>
                  
                  {/* <span className="text-[10px] text-slate-600 font-bold tracking-widest group-hover:text-slate-400 transition-colors">
                    ID // 0{index + 1}
                  </span> */}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-3 transition-colors">
                    {profile.label}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {profile.desc}
                  </p>
                </div>

                {/* Decorative Tech Strip on the Right */}
                <div className={`absolute top-6 bottom-6 right-0 w-[2px] bg-gradient-to-b ${profile.color} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;