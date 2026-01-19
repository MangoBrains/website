import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // In production, use an environment variable for the URL
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-[#050505] border-t border-white/5 overflow-hidden font-mono min-h-screen flex items-center">
      
      {/* --- BACKGROUND AMBIANCE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10 w-full">
        
        {/* HEADER */}
        <div className="mb-12">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs tracking-widest uppercase mb-6">
              <span className={`w-1.5 h-1.5 rounded-full bg-green-500 ${status === 'loading' ? 'animate-ping' : 'animate-pulse'}`}></span>
              Comms Uplink
            </div> */}
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start a Conversation
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl border-l-2 border-slate-800 pl-6">
              This is an initial conversation to understand your context and see if there’s a fit. 
            </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* NAME INPUT */}
            <div className="group relative">
                <label className="block text-xs font-bold text-white-500 mb-2 uppercase tracking-widest group-focus-within:text-green-400 transition-colors">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-white/10 px-4 py-4 text-slate-200 focus:outline-none focus:border-green-500/50 focus:bg-slate-900/80 focus:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300 rounded-lg placeholder-slate-700"
                    placeholder="Enter identification..."
                />
            </div>

            {/* EMAIL INPUT */}
            <div className="group relative">
                <label className="block text-xs font-bold text-white-500 mb-2 uppercase tracking-widest group-focus-within:text-green-400 transition-colors">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-white/10 px-4 py-4 text-slate-200 focus:outline-none focus:border-green-500/50 focus:bg-slate-900/80 focus:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300 rounded-lg placeholder-slate-700"
                    placeholder="name@company.com"
                />
            </div>
          </div>

          {/* COMPANY INPUT */}
          <div className="group relative">
                <label className="block text-xs font-bold text-white-500 mb-2 uppercase tracking-widest group-focus-within:text-green-400 transition-colors">
                    Company
                </label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-white/10 px-4 py-4 text-slate-200 focus:outline-none focus:border-green-500/50 focus:bg-slate-900/80 focus:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300 rounded-lg placeholder-slate-700"
                    placeholder="Organization Name (Optional)"
                />
          </div>

          {/* MESSAGE INPUT */}
          <div className="group relative">
                <label className="block text-xs font-bold text-white-500 mb-2 uppercase tracking-widest group-focus-within:text-green-400 transition-colors">
                    Message
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-900/50 border border-white/10 px-4 py-4 text-slate-200 focus:outline-none focus:border-green-500/50 focus:bg-slate-900/80 focus:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300 rounded-lg placeholder-slate-700 resize-none"
                    placeholder="Briefly describe what you're trying to improve..."
                />
          </div>

          {/* SUBMIT AREA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              
              {/* THE MANGO BUTTON */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="relative group w-full md:w-auto overflow-hidden rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 transition-all duration-300 group-hover:scale-105"></div>
                  {/* Gloss */}
                  <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/40 to-transparent opacity-100 pointer-events-none"></div>
                  
                  <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                    {status === "loading" ? (
                        <>
                           <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                           <span className="text-white font-bold tracking-wide text-sm uppercase">submiting...</span>
                        </>
                    ) : (
                        <span className="text-white font-bold tracking-wide text-sm uppercase">Submit</span>
                    )}
                  </div>
              </button>

              {/* STATUS MESSAGES (Terminal Style) */}
              <div className="flex-1 w-full md:w-auto">
                {status === "success" && (
                    <div className="w-full bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-md text-xs font-mono flex items-center gap-3 animate-pulse">
                        <span className="text-lg">✓</span>
                        <span>TRANSMISSION_RECEIVED. STAND BY FOR RESPONSE.</span>
                    </div>
                )}

                {status === "error" && (
                    <div className="w-full bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-md text-xs font-mono flex items-center gap-3">
                        <span className="text-lg">⚠</span>
                        <span>CONNECTION_FAILED. PLEASE RETRY.</span>
                    </div>
                )}
              </div>
          </div>

        </form>
      </div>
    </section>
  );
}