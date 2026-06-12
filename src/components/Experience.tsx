"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-32 px-6 sm:px-12 md:px-24 bg-bg-dark overflow-hidden border-t border-zinc-900/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Summary Info (4 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold font-semibold">
            WORK EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-zinc-100">
            3 YEARS OF <br />
            PROFESSIONAL <span className="font-serif italic font-normal text-gold text-gold-glow">EXPERIENCE.</span>
          </h2>
        </motion.div>

        {/* Right Column: Experience Entry (8 cols) */}
        <div className="lg:col-span-8 relative pl-6 sm:pl-10">
          {/* Vertical Timeline Bar */}
          <div className="absolute top-0 bottom-0 left-3 sm:left-5 w-[1px] bg-gradient-to-b from-gold to-zinc-900" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative group pointer-events-auto"
          >
            {/* Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] rounded-full bg-zinc-950 border border-gold hover:border-gold-bright transition-all group-hover:scale-120 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            </div>

            {/* Content Box */}
            <div className="p-6 sm:p-8 rounded-2xl glass border border-zinc-850 hover:border-gold/20 transition-all duration-300 bg-zinc-950/10 hover:gold-glow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono">
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 flex items-center space-x-1.5 font-bold">
                  <Briefcase className="w-3.5 h-3.5 text-gold" />
                  <span>Hello Dewas Media Network</span>
                </span>
                <span className="text-[9px] tracking-[0.15em] text-gold font-bold flex items-center space-x-1.5 self-start sm:self-auto bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  <span>3 Years</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-100 tracking-tight mt-3">
                Graphic Designer + AI Tools + Basic Video Editor
              </h3>

              <div className="mt-4 pt-4 border-t border-zinc-900/60 flex items-center space-x-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Dewas, Madhya Pradesh, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
