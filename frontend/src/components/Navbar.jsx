// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logoweb1.png";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Systems", href: "/systems" },
//   { name: "Process", href: "/process" },
//   { name: "Industries", href: "/industries" },
//   { name: "Tech & Security", href: "/tech" },
//   { name: "About", href: "/about" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-black border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex h-14 items-center justify-between">

//           {/* LOGO + BRAND */}
//           <Link to="/" className="flex items-center gap-3 shrink-0">
//             <div className="h-8 w-8 flex items-center justify-center overflow-hidden">
//               <img
//                 src={logo}
//                 alt="MangoBrains logo"
//                 className="max-h-full max-w-full object-contain"
//               />
//             </div>
//             <span className="text-white font-semibold tracking-wide whitespace-nowrap">
//               MangoBrains
//             </span> 
//           </Link>

//           {/* DESKTOP NAV */}
//           <div className="hidden md:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className="text-sm text-gray-400 hover:text-white transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link
//               to="/contact"
//               className="ml-2 rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
//             >
//               Contact / Demo
//             </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-gray-300 text-xl"
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden bg-black border-t border-white/10">
//           <div className="px-6 py-4 flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 onClick={() => setOpen(false)}
//                 className="text-gray-300 hover:text-white"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="mt-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black text-center hover:bg-gray-100 transition-colors"
//             >
//               Contact / Demo
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



// option 1


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logoweb1.png";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Systems", href: "/systems" },
//   { name: "Process", href: "/process" },
//   { name: "Industries", href: "/industries" },
//   { name: "Tech & Security", href: "/tech" },
//   { name: "About", href: "/about" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Floating Wrapper */}
//       <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
//         <div className="w-full max-w-7xl relative group">
          
//           {/* THE GLASS CONTAINER */}
//           <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 h-16 flex items-center justify-between shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-slate-900/80">
            
//             {/* The Mango Underglow (Bottom Border) */}
//             <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 group-hover:opacity-100 group-hover:via-amber-400 transition-opacity duration-500"></div>

//             {/* LOGO */}
//             <Link to="/" className="flex items-center gap-3 shrink-0 relative z-10">
//               <div className="h-8 w-8 rounded-md bg-white/5 flex items-center justify-center border border-white/10">
//                 <img src={logo} alt="Logo" className="w-5 h-5 object-contain" />
//               </div>
//               <span className="text-white font-semibold tracking-wide">MangoBrains</span>
//             </Link>

//             {/* DESKTOP NAV */}
//             <div className="hidden md:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 group/link"
//                 >
//                   {link.name}
//                   {/* Tiny green dot on hover */}
//                   <span className="absolute top-2 right-2 w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
//                 </Link>
//               ))}

//               <Link
//                 to="/contact"
//                 className="ml-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* MOBILE TOGGLE */}
//             <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 text-xl">
//               {open ? "✕" : "☰"}
//             </button>
//           </div>

//           {/* MOBILE MENU (Floating below) */}
//           {open && (
//             <div className="absolute top-20 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }


// option 2.1

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logoweb1.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Systems", href: "/systems" },
  { name: "Process", href: "/process" },
  { name: "Industries", href: "/industries" },
  { name: "Tech", href: "/tech" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 
        ${scrolled || open ? "bg-[#050505]/95 backdrop-blur-md shadow-2xl" : "bg-black/50 backdrop-blur-sm"}`}
      >
        
        {/* --- ANIMATIONS --- */}
        <style>{`
          @keyframes flow { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          @keyframes swing { 0% { transform: rotate(0deg); } 25% { transform: rotate(5deg); } 75% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }
          .swing-hover:hover { animation: swing 0.5s ease-in-out; }
        `}</style>

        {/* TOP DATA STREAM (The Vine) */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-800/50 overflow-hidden">
           <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-green-500 to-transparent blur-[3px] animate-[flow_3s_linear_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* =======================
              1. LOGO
             ======================= */}
          <Link to="/" className="flex items-center gap-3 group z-50" onClick={() => setOpen(false)}>
            {/* Logo Box */}
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg group-hover:border-green-500/50 transition-colors">
               <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
            </div>
            {/* Text */}
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wider leading-none">MANGO</span>
              <span className="text-[10px] text-green-500 font-mono tracking-widest leading-none">SYSTEMS</span>
            </div>
          </Link>


          {/* =======================
              2. DESKTOP NAV
             ======================= */}
          <div className="hidden md:flex items-start gap-8 h-full pt-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group relative flex flex-col items-center h-full pt-0"
                >
                  {/* The Stem (Hangs down from top border) */}
                  <div className={`w-[1px] transition-all duration-300 ease-out origin-top
                    ${isActive ? "h-6 bg-green-500 shadow-[0_0_8px_#22c55e]" : "h-0 bg-slate-700 group-hover:h-4 group-hover:bg-green-400"}
                  `}></div>
                  
                  {/* The Link Text */}
                  <div className={`mt-2 text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 swing-hover px-2 py-1 rounded
                    ${isActive ? "text-green-400 font-bold bg-green-500/10" : "text-slate-300 group-hover:text-white"}
                  `}>
                    {link.name}
                  </div>
                </Link>
              );
            })}
          </div>


          {/* =======================
              3. DESKTOP CTA (Mango Pill)
             ======================= */}
          <div className="hidden md:flex items-center">
             <Link 
               to="/contact" 
               className="relative overflow-hidden rounded-full px-6 py-2.5 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] group"
             >
               {/* Background Gradient */}
               <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
               
               {/* Glass Gloss (Top Half) */}
               <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
               
               {/* Text */}
               <span className="relative z-10 text-[11px] font-black text-white tracking-widest uppercase flex items-center gap-2">
                 Demo Access
                 <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
               </span>
             </Link>
          </div>


          {/* =======================
              4. MOBILE TOGGLE
             ======================= */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 relative z-50 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <div className={`h-[2px] bg-white transition-all duration-300 ${open ? "w-8 rotate-45 translate-y-2" : "w-6 group-hover:w-8"}`}></div>
            <div className={`h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0" : "w-4 group-hover:w-8"}`}></div>
            <div className={`h-[2px] bg-white transition-all duration-300 ${open ? "w-8 -rotate-45 -translate-y-2.5" : "w-8"}`}></div>
          </button>

        </div>
      </nav>

      {/* =======================
          5. MOBILE MENU OVERLAY
         ======================= */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050505] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
            ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
         {/* Scrollable Container */}
         <div className="h-full w-full overflow-y-auto pt-24 pb-10 px-6">
           
           {/* Grid Background */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 max-w-lg mx-auto">
              {navLinks.map((link, i) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setOpen(false)}
                  className="group relative border border-white/10 bg-white/5 p-5 rounded-xl overflow-hidden active:scale-95 transition-all"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {/* Hover Fill */}
                  <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors"></div>
                  
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-xs text-slate-500 font-mono">0{i+1}</span>
                     {location.pathname === link.href && (
                       <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                     )}
                  </div>
                  
                  <div className="text-xl font-bold text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </div>
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link 
                to="/contact" 
                onClick={() => setOpen(false)}
                className="col-span-1 sm:col-span-2 mt-6 bg-gradient-to-r from-amber-400 to-orange-600 rounded-xl p-5 text-center font-bold text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] text-lg"
              >
                INITIALIZE DEMO
              </Link>
           </div>

         </div>
      </div>
    </>
  );
}

