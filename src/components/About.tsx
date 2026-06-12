"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-32 px-6 sm:px-12 md:px-24 bg-bg-dark overflow-hidden border-t border-zinc-900/50">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Image Wrapper */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-gold to-gold-bright rounded-2xl opacity-15 blur-sm" />
          
          <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-gold/10 p-3 glass gold-glow pointer-events-auto">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-900">
              <Image
                src="/images/rohit_portrait.png"
                alt="Rohit Rathore Portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover filter grayscale contrast-110 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold mb-3 font-semibold">
              ABOUT ME
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none text-zinc-100">
              Rohit Rathore
            </h2>
          </div>

          <p className="font-serif italic text-lg sm:text-2xl text-zinc-300 leading-relaxed max-w-xl text-gold-glow">
            Creative and passionate Graphic Designer with 3 years of experience in Graphic Design, AI Tools, and Basic Video Editing.
          </p>

          {/* Education & Languages */}
          <div className="pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-[10px] tracking-wider text-zinc-550 uppercase">
            {/* Education */}
            <div className="space-y-4">
              <div className="text-gold font-bold mb-2">EDUCATION</div>
              
              <div className="space-y-1">
                <div className="text-zinc-200 font-bold">Graphic Design Course</div>
                <div className="text-zinc-500 font-medium lowercase first-letter:uppercase">Bugs Animation Academy</div>
              </div>

              <div className="space-y-1">
                <div className="text-zinc-200 font-bold">Higher Secondary (12th)</div>
                <div className="text-zinc-500 font-medium lowercase first-letter:uppercase">Government Higher Secondary School</div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="text-gold font-bold mb-2">LANGUAGES</div>
              <ul className="space-y-2 text-zinc-400 font-bold">
                <li>Hindi</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
