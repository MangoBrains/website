import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo_MB.png";

const navLinks = [
  { name: "Home", href: "/" },
  // { name: "Systems", href: "/systems" },
  { name: "How we work", href: "/process" },
  // { name: "Industries", href: "/industries" },
  // { name: "Tech", href: "/tech" },
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

  // Helper to close menu AND scroll top
  const handleLinkClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

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
              1. LOGO (UPSCALED)
             ======================= */}
          <Link 
            to="/" 
            className="flex items-center gap-4 group z-50 focus:outline-none" 
            onClick={handleLinkClick} // Scroll to top added here
          >
            
            {/* CONTAINER: Increased size */}
            <div className="relative w-16 h-16 flex items-center justify-center">
               
               {/* Hover Glow Effect */}
               <div className="absolute inset-0 bg-green-500/30 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <img 
                 src={logo} 
                 alt="MangoBrains" 
                 className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] transform scale-110" 
               />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center">
              <span className="text-3xl font-bold text-white tracking-tight leading-none group-hover:text-green-400 transition-colors">
                Mango<span className="font-light text-slate-400 group-hover:text-white transition-colors">Brains</span>
              </span>
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
                  onClick={() => window.scrollTo(0, 0)} // Scroll to top added here
                  className="group relative flex flex-col items-center h-full pt-0"
                >
                  {/* The Stem */}
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
               onClick={() => window.scrollTo(0, 0)} // Scroll to top added here
               className="relative overflow-hidden rounded-full px-6 py-2.5 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] group"
             >
               {/* Background Gradient */}
               <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
               
               {/* Glass Gloss */}
               <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
               
               {/* Text */}
               <span className="relative z-10 text-[11px] font-black text-white tracking-widest uppercase flex items-center gap-2">
                 Request Demo 
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
                  onClick={handleLinkClick} // Scroll to top added here
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
                onClick={handleLinkClick} // Scroll to top added here
                className="col-span-1 sm:col-span-2 mt-6 bg-gradient-to-r from-amber-400 to-orange-600 rounded-xl p-5 text-center font-bold text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] text-lg"
              >
                Request DEMO
              </Link>
           </div>

         </div>
      </div>
    </>
  );
}