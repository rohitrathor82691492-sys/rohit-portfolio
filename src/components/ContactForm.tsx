"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone, Mail, MapPin } from "lucide-react";

type ProjectType = "Branding" | "Social Media" | "Print Design" | "AI Creative" | "Video Editing";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<ProjectType>("Branding");
  const [budget, setBudget] = useState(15000);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setProjectType("Branding");
      setBudget(15000);
      setMessage("");
    }, 4000);
  };

  const projectOptions: ProjectType[] = [
    "Branding",
    "Social Media",
    "Print Design",
    "AI Creative",
    "Video Editing",
  ];

  return (
    <section id="contact" className="relative w-full py-32 px-6 sm:px-12 md:px-24 bg-[#050505] overflow-hidden border-t border-zinc-900/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Direct Contacts */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-10"
        >
          <div className="space-y-4">
            <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold font-semibold">
              CONTACT
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none text-zinc-100">
              LET&apos;S COLLABORATE.
            </h2>
          </div>

          <div className="space-y-6">
            {/* Phone */}
            <a
              href="tel:+918269149288"
              className="group flex items-center space-x-4 text-zinc-400 hover:text-white transition-colors pointer-events-auto"
            >
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-850 group-hover:border-gold/30 text-zinc-400 group-hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-mono">
                <div className="text-[9px] tracking-widest text-zinc-650 uppercase font-bold">PHONE</div>
                <div className="text-sm tracking-wider uppercase font-bold text-zinc-200">+91 8269149288</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rohitrathor82691492@gmail.com"
              className="group flex items-center space-x-4 text-zinc-400 hover:text-white transition-colors pointer-events-auto"
            >
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-850 group-hover:border-gold/30 text-zinc-400 group-hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-mono">
                <div className="text-[9px] tracking-widest text-zinc-650 uppercase font-bold">EMAIL</div>
                <div className="text-sm tracking-wider text-zinc-200 font-bold break-all">rohitrathor82691492@gmail.com</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center space-x-4 text-zinc-400">
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-850 text-zinc-550">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-mono">
                <div className="text-[9px] tracking-widest text-zinc-650 uppercase font-bold">LOCATION</div>
                <div className="text-sm tracking-wider uppercase font-bold text-zinc-200">Dewas, Madhya Pradesh</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl glass border border-zinc-850 hover:border-gold/15 transition-all duration-500 bg-zinc-950/35 hover:gold-glow">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-zinc-100">
                  Message Sent
                </h3>
                <p className="text-zinc-450 text-xs sm:text-sm max-w-xs font-serif italic">
                  Thank you for reaching out. I will review your design requirements and get back to you shortly.
                </p>
                <div className="font-mono text-[9px] tracking-widest text-zinc-650 uppercase">
                  Rohit Rathore
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Rohit Rathore"
                      className="w-full bg-zinc-950/80 border border-zinc-855 hover:border-zinc-700 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 rounded-xl px-4 py-3 text-xs text-zinc-200 transition-all placeholder:text-zinc-750"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-bold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@rohit.com"
                      className="w-full bg-zinc-950/80 border border-zinc-855 hover:border-zinc-700 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 rounded-xl px-4 py-3 text-xs text-zinc-200 transition-all placeholder:text-zinc-750"
                    />
                  </div>
                </div>

                {/* Service type buttons */}
                <div className="space-y-3">
                  <label className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-bold">
                    Project Service
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {projectOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setProjectType(option)}
                        className={`px-4 py-2 rounded-lg font-mono text-[9px] tracking-widest uppercase border transition-all duration-300 ${
                          projectType === option
                            ? "bg-white text-zinc-950 border-white font-bold"
                            : "bg-zinc-950/80 text-zinc-400 border-zinc-850 hover:border-zinc-700 hover:text-zinc-200"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[9px] tracking-widest text-zinc-550 uppercase font-bold">
                    <span>Project Budget</span>
                    <span className="text-gold font-bold bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded-md">
                      ${budget.toLocaleString()} +
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="1000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-[3px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between font-mono text-[8px] text-zinc-650">
                    <span>$1,000 (Min)</span>
                    <span>$20,000+ (Premium)</span>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-bold">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your design and editing goals..."
                    className="w-full bg-zinc-950/80 border border-zinc-855 hover:border-zinc-700 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 rounded-xl px-4 py-3 text-xs text-zinc-200 transition-all placeholder:text-zinc-750 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full group bg-white hover:bg-zinc-200 text-zinc-950 font-mono text-[9px] tracking-[0.2em] font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer pointer-events-auto"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
