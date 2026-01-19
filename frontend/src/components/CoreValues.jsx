import React, { useEffect, useRef, useState } from "react";

const CoreValues = () => {
  const [valuesVisible, setValuesVisible] = useState(false);
  const sectionRef = useRef(null);

  const principles = [
    { title: "Systems before features", color: "from-cyan-500 to-blue-500", shadow: "cyan" },
    { title: "Clarity over complexity", color: "from-purple-500 to-pink-500", shadow: "purple" },
    { title: "Maintainability over speed", color: "from-green-500 to-emerald-500", shadow: "green" },
    { title: "Long-term over quick fixes", color: "from-amber-500 to-orange-500", shadow: "amber" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative border-b border-white/5 py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className={`max-w-2xl mb-20 transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">How We Think</h2>
          <p className="text-slate-400">Our operating principles for every project.</p>
        </div>

        {/* The "Rail" Line connecting all items */}
        <div className={`absolute left-6 right-6 h-[1px] bg-white/10 top-[280px] md:top-[280px] transition-all duration-1000 delay-300 ${valuesVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

        {/* Frameless Grid */}
        <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4 pt-8">
          {principles.map((item, i) => (
            <div 
              key={i} 
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`relative group pt-8 transition-all duration-700 ease-out
                ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              
              {/* 1. The Active "Rail" Segment (Top Bar) */}
              {/* Sits right on top of the content to define the column */}
              <div className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out
                  ${valuesVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}
              `}>
                 {/* Glow spill from the line */}
                 <div className={`absolute top-0 left-0 w-full h-full blur-[4px] bg-gradient-to-r ${item.color} opacity-50`}></div>
              </div>

              {/* 2. Massive Watermark Number */}
              <div className={`absolute -top-6 left-0 text-[120px] leading-none font-black text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-2 group-hover:text-white/[0.05]`}>
                0{i + 1}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-12">
                <h3 className={`text-xl font-bold leading-tight mb-3 transition-colors duration-500 ${valuesVisible ? 'text-white' : 'text-slate-500'}`}>
                  {item.title}
                </h3>
                
                {/* Tech Deco dots */}
                <div className="flex gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.color}`}></div>
                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.color} opacity-50`}></div>
                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.color} opacity-20`}></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;