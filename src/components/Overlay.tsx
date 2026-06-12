"use client";

import React, { useContext } from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { ScrollProgressContext } from "./ScrollyCanvas";

export default function Overlay() {
  const scrollYProgress = useContext(ScrollProgressContext);

  // Fallback if context is not present
  const dummyProgress = { get: () => 0 };
  const progress = scrollYProgress || (dummyProgress as any);

  // Section 1: Hero Section (0% to 22% scroll)
  const opacity1 = useTransform(progress, [0, 0.12, 0.22], [1, 0.8, 0]);
  const y1 = useTransform(progress, [0, 0.22], [0, -100]);

  // Section 2: Experience Summary (28% to 52% scroll)
  const opacity2 = useTransform(progress, [0.18, 0.28, 0.42, 0.52], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.18, 0.52], [80, -60]);

  // Section 3: Location (58% to 82% scroll)
  const opacity3 = useTransform(progress, [0.48, 0.58, 0.72, 0.82], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.48, 0.82], [80, -60]);

  // Scroll indicator
  const opacityIndicator = useTransform(progress, [0, 0.08], [1, 0]);
  const yIndicator = useTransform(progress, [0, 0.08], [0, 20]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none flex flex-col justify-between">
      {/* Luxury Gold Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a88003_1px,transparent_1px),linear-gradient(to_bottom,#c5a88003_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Section 1: Hero Section */}
      <div className="flex-1 flex items-center justify-center w-full h-screen px-6 sm:px-12 md:px-24">
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
        >
          {/* Photo on Left */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-[400px] rounded-2xl overflow-hidden bg-zinc-950 border border-gold/15 p-2 gold-glow pointer-events-auto">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/rohit_portrait.png"
                  alt="Rohit Rathore Portrait"
                  fill
                  priority
                  className="object-cover filter grayscale contrast-110 brightness-90 hover:grayscale-0 hover:scale-102 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Typography on Right */}
          <div className="md:col-span-7 text-center md:text-left space-y-4">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold font-bold select-none">
              PORTFOLIO
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none select-none text-zinc-100">
              Rohit <span className="font-serif italic font-normal text-gold block sm:inline text-gold-glow">Rathore</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-zinc-400 uppercase select-none font-bold">
              Graphic Designer <span className="text-zinc-650">|</span> AI Creator <span className="text-zinc-650">|</span> Basic Video Editor
            </p>
          </div>
        </motion.div>
      </div>

      {/* Section 2: Experience / About statement */}
      <div className="absolute inset-0 flex items-center w-full h-screen px-6 sm:px-12 md:px-24">
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="max-w-2xl text-left"
        >
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4 font-bold select-none">
            01 / SUMMARY
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-none text-zinc-100 select-none">
            Creative &amp; <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-bright to-zinc-400 text-gold-glow">
              passionate.
            </span>
          </h2>
          <p className="mt-6 text-zinc-450 text-sm md:text-base leading-relaxed max-w-lg select-none">
            Creative and passionate Graphic Designer with 3 years of experience in Graphic Design, AI Tools, and Basic Video Editing.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Location */}
      <div className="absolute inset-0 flex items-center justify-end w-full h-screen px-6 sm:px-12 md:px-24">
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="max-w-2xl text-right"
        >
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4 font-bold select-none">
            02 / LOCATION
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-none text-zinc-100 select-none">
            Dewas, <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-bright to-gold text-gold-glow">Madhya Pradesh.</span>
          </h2>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: opacityIndicator, y: yIndicator }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 select-none"
      >
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-550 font-bold">
          Scroll to explore
        </span>
        <div className="w-[18px] h-[30px] border border-zinc-800 rounded-full flex justify-center p-[4px]">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[4px] h-[6px] bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
