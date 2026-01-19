// // export default function Footer() {
// //   return (
// //     <footer className="bg-black border-t border-white/5">
// //       <div className="max-w-7xl mx-auto px-6 py-16">
// //         <div className="grid gap-10 md:grid-cols-3">

// //           {/* BRAND */}
// //           <div>
// //             <h3 className="text-white font-semibold tracking-wide">
// //               MangoBrains
// //             </h3>
// //             <p className="mt-4 text-sm text-gray-400 max-w-sm">
// //               We build custom internal business systems designed
// //               around how companies actually operate.
// //             </p>
// //           </div>

// //           {/* LINKS */}
// //           <div>
// //             <h4 className="text-sm font-medium text-white">
// //               Company
// //             </h4>
// //             <ul className="mt-4 space-y-3 text-sm text-gray-400">
// //               <li><a href="#" className="hover:text-white">Home</a></li>
// //               <li><a href="#" className="hover:text-white">Systems</a></li>
// //               <li><a href="#" className="hover:text-white">Process</a></li>
// //               <li><a href="#" className="hover:text-white">Industries</a></li>
// //               <li><a href="#" className="hover:text-white">About</a></li>
// //             </ul>
// //           </div>

// //           {/* CONTACT */}
// //           <div>
// //             <h4 className="text-sm font-medium text-white">
// //               Contact
// //             </h4>
// //             <ul className="mt-4 space-y-3 text-sm text-gray-400">
// //               <li>Email: <span className="text-gray-300">contact@mangobrains.com</span></li>
// //               <li>Location: <span className="text-gray-300">India</span></li>
// //             </ul>
// //           </div>

// //         </div>

// //         {/* BOTTOM BAR */}
// //         <div className="mt-16 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
// //           <p className="text-xs text-gray-500">
// //             © {new Date().getFullYear()} MangoBrains. All rights reserved.
// //           </p>

// //           <div className="flex gap-6 text-xs text-gray-500">
// //             <a href="#" className="hover:text-white">Privacy</a>
// //             <a href="#" className="hover:text-white">Terms</a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// import React from 'react';
// import logo from "../assets/logoweb1.png"; // Assuming you have this accessible

// export default function Footer() {
//   return (
//     <footer className="relative bg-[#020202] border-t border-white/5 pt-20 pb-10 overflow-hidden font-mono">

//       {/* --- BACKGROUND EFFECTS --- */}
//       {/* "Underground" Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

//       {/* Top Glowing Line (The Ground Level) */}
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid gap-12 md:grid-cols-4">

//           {/* 1. BRAND IDENTITY */}
//           <div className="md:col-span-2">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
//                  <img src={logo} alt="MangoBrains" className="w-6 h-6 object-contain" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-white tracking-wide">
//                   MANGO<span className="text-green-500">.BRAINS</span>
//                 </h3>
//                 <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">System Architecture</span>
//               </div>
//             </div>
//             <p className="text-sm text-slate-400 leading-relaxed max-w-sm border-l-2 border-slate-800 pl-4">
//               We build custom internal business systems designed
//               around how companies actually operate. <br />
//               <span className="text-slate-600 mt-2 block">// No templates. Pure logic.</span>
//             </p>
//           </div>

//           {/* 2. NAVIGATION (Circuit Style) */}
//           <div>
//             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
//               Directory
//             </h4>
//             <ul className="space-y-3">
//               {['Home', 'Systems', 'Process', 'Industries', 'About'].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors">
//                     <span className="w-1 h-1 bg-slate-700 group-hover:bg-green-500 transition-colors"></span>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 3. CONTACT (Terminal Style) */}
//           <div>
//             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
//               <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
//               Transmission
//             </h4>

//             <div className="flex flex-col gap-4">
//               {/* Email Box */}
//               <div className="bg-white/5 border border-white/10 p-4 rounded-lg group hover:border-green-500/30 transition-colors cursor-pointer">
//                 <span className="block text-[10px] text-slate-500 mb-1">EMAIL_UPLINK</span>
//                 <span className="text-sm text-slate-200 font-bold group-hover:text-green-400 transition-colors">
//                   contact@mangobrains.com
//                 </span>
//               </div>

//               {/* Location */}
//               <div className="flex items-center gap-2 text-sm text-slate-400">
//                 <span className="text-slate-600">LOC:</span> India
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* --- BOTTOM BAR --- */}
//         <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

//           {/* Copyright */}
//           <p className="text-xs text-slate-600">
//             © {new Date().getFullYear()} MangoBrains. EXECUTION_TIME: {new Date().toLocaleTimeString()}
//           </p>

//           {/* Status Indicator */}
//           <div className="flex items-center gap-6">
//              <div className="flex items-center gap-2 px-3 py-1 bg-green-900/20 rounded-full border border-green-900/50">
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-[10px] font-bold text-green-500 tracking-widest">SYSTEMS ONLINE</span>
//              </div>

//              <div className="flex gap-4 text-xs text-slate-500">
//                 <a href="#" className="hover:text-white transition-colors">Privacy_Protocol</a>
//                 <a href="#" className="hover:text-white transition-colors">Terms_of_Use</a>
//              </div>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }








// import React from "react";
// import logo from "../assets/logoweb1.png";

// export default function Footer() {
//   return (
//     <footer className="bg-[#020202] border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-6 py-16">

//         {/* TOP GRID */}
//         <div className="grid gap-12 md:grid-cols-3">

//           {/* BRAND */}
//           <div>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
//                 <img
//                   src={logo}
//                   alt="MangoBrains"
//                   className="w-6 h-6 object-contain"
//                 />
//               </div>
//               <h3 className="text-lg font-semibold text-white tracking-wide">
//                 MangoBrains
//               </h3>
//             </div>

//             <p className="text-sm text-slate-400 leading-relaxed max-w-sm border-l-2 border-slate-800 pl-4">
//               MangoBrains builds custom internal business systems designed
//               around how organizations actually operate.
//               <span className="block mt-2 text-slate-600">
//                 Focused on clarity, maintainability, and long-term use.
//               </span>
//             </p>
//           </div>

//           {/* COMPANY LINKS */}
//           <div>
//             <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">
//               Company
//             </h4>
//             <ul className="space-y-3">
//               {["Home", "Systems", "Process", "Industries", "About"].map(
//                 (item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-sm text-slate-400 hover:text-white transition-colors"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">
//               Contact
//             </h4>
//             <div className="space-y-3 text-sm text-slate-400">
//               <div>contact@mangobrains.com</div>
//               <div>India</div>
//             </div>
//           </div>

//         </div>

//         {/* BOTTOM BAR */}
//         <div className="mt-16 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-xs text-slate-600">
//             © {new Date().getFullYear()} MangoBrains. All rights reserved.
//           </p>

//           <div className="flex gap-6 text-xs text-slate-500">
//             <a href="#" className="hover:text-white transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-white transition-colors">
//               Terms of Use
//             </a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }










// import React from "react";
// import logo from "../assets/logoweb1.png";
// import PrivacyPolicy from "./PrivacyPolicy";
// import { Link } from "react-router-dom";


// export default function Footer() {
//   return (
//     <footer className="bg-[#020202] border-t border-white/10 relative overflow-hidden font-mono">

//       {/* --- DESIGN ASSET: Background Grid Pattern --- */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

//       {/* --- DESIGN ASSET: Top Glow --- */}
//       <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

//       <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

//         {/* TOP GRID */}
//         <div className="grid gap-12 md:grid-cols-3">

//           {/* BRAND */}
//           <div>
//             <div className="flex items-center gap-3 mb-6 group">
//               <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-colors group-hover:border-green-500/50 group-hover:bg-green-500/10">
//                 <img
//                   src={logo}
//                   alt="MangoBrains"
//                   className="w-6 h-6 object-contain"
//                 />
//               </div>
//               <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-green-400 transition-colors">
//                 MangoBrains
//               </h3>
//             </div>

//             <p className="text-sm text-slate-400 leading-relaxed max-w-sm border-l-2 border-slate-800 pl-4 transition-colors hover:border-green-500/50">
//               MangoBrains builds custom internal business systems designed
//               around how organizations actually operate.
//               <span className="block mt-2 text-slate-500 font-medium">
//                 Focused on clarity, maintainability, and long-term use.
//               </span>
//             </p>
//           </div>

//           {/* COMPANY LINKS */}
//           <div className="md:pl-10">
//             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
//               Company
//             </h4>
//             <ul className="space-y-3">
//               {["Home", "Systems", "Process", "Industries", "About"].map(
//                 (item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-1"
//                     >
//                       <span className="w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-3"></span>
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
//               Contact
//             </h4>

//             <div className="space-y-4 text-sm text-slate-400">

//               {/* Email Button */}
//               <a href="mailto:contact@mangobrains.com" className="block group">
//                 <div className="text-[10px] text-slate-600 mb-1 group-hover:text-green-500 transition-colors">EMAIL</div>
//                 <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-200 group-hover:border-green-500/50 group-hover:text-white transition-all">
//                   contact@mangobrains.com
//                 </div>
//               </a>

//               {/* Location */}
//               <div>
//                 <div className="text-[10px] text-slate-600 mb-1">LOCATION</div>
//                 <div className="flex items-center gap-2 text-slate-200">
//                   <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
//                   India
//                   <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
//                   UAE
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* BOTTOM BAR */}
//         <div className="mt-16 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-xs text-slate-600">
//             © {new Date().getFullYear()} MangoBrains. All rights reserved.
//           </p>

//           {/* <div className="flex gap-6 text-xs text-slate-500">
//             <a href="/PrivacyPolicy" className="hover:text-green-400 transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-green-400 transition-colors">
//               Terms of Use
//             </a>
//           </div> */}
//           <div>
//           <Link
//             to="/privacy"
//             className="hover:text-green-400 transition-colors"
//           >
//             Privacy Policy
//           </Link>

//           <Link
//             to="/terms"
//             className="hover:text-green-400 transition-colors"
//           >
//             Terms of Use
//           </Link>
//         </div>

//       </div>
//     </footer>
//   );
// }





import React from "react";
import logo from "../assets/logoweb1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 relative overflow-hidden font-mono">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

      {/* Top Glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-colors">
                <img src={logo} alt="MangoBrains" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-green-400 transition-colors">
                MangoBrains
              </h3>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm border-l-2 border-slate-800 pl-4 hover:border-green-500/50 transition-colors">
              MangoBrains builds custom internal business systems designed
              around how organizations actually operate.
              <span className="block mt-2 text-slate-500 font-medium">
                Focused on clarity, maintainability, and long-term use.
              </span>
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div className="md:pl-10">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Company
            </h4>
            <ul className="space-y-3">
              {["Home", "Systems", "Process", "Industries", "About"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Contact
            </h4>

            <div className="space-y-4 text-sm text-slate-400">
              <a href="mailto:contact@mangobrains.com" className="block group">
                <div className="text-[10px] text-slate-600 mb-1 group-hover:text-green-500 transition-colors">
                  EMAIL
                </div>
                <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-slate-200 group-hover:border-green-500/50 group-hover:text-white transition-all">
                  contact@mangobrains.com
                </div>
              </a>

              <div>
                <div className="text-[10px] text-slate-600 mb-1">LOCATION</div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  India
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  UAE
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} MangoBrains. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-slate-500">
            <Link
              to="/privacy"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-green-400 transition-colors"
            >
              Terms of Use
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}
