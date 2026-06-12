"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Twitter, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050505] border-t border-zinc-900 pt-24 pb-12 px-6 sm:px-12 md:px-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Rows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Column 1: Intro */}
          <div className="md:col-span-5 space-y-6">
            <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold font-semibold">
              SAY HELLO
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-100 leading-none">
              LET&apos;S SHAPE A NEW <br />
              VISUAL NARRATIVE.
            </h3>
            <p className="text-zinc-550 text-sm max-w-sm">
              Currently accepting global design commissions, social media layouts, and cinematic editing projects.
            </p>
            <div className="flex items-center space-x-3 text-zinc-400">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-mono text-xs uppercase tracking-widest">Madhya Pradesh, India // Remote</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-6">
            <div className="font-mono text-xs tracking-[0.4em] uppercase text-zinc-650 font-semibold">
              NAVIGATION
            </div>
            <div className="flex flex-col space-y-3 font-mono text-xs tracking-wider uppercase text-zinc-455">
              <a href="#" className="hover:text-gold transition-colors duration-200">HOME</a>
              <a href="#about" className="hover:text-gold transition-colors duration-200">ABOUT</a>
              <a href="#skills" className="hover:text-gold transition-colors duration-200">SKILLS</a>
              <a href="#gallery" className="hover:text-gold transition-colors duration-200">GALLERY</a>
              <a href="#experience" className="hover:text-gold transition-colors duration-200">EXPERIENCE</a>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="md:col-span-4 space-y-6">
            <div className="font-mono text-xs tracking-[0.4em] uppercase text-zinc-650 font-semibold">
              CONNECT DIRECT
            </div>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:rohitrathor82691492@gmail.com"
                className="group flex items-center space-x-3 text-zinc-405 hover:text-white transition-colors duration-200 pointer-events-auto"
              >
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-gold/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest break-all">rohitrathor82691492@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918269149288"
                className="group flex items-center space-x-3 text-zinc-405 hover:text-white transition-colors duration-200 pointer-events-auto"
              >
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-gold/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest font-bold">+91 8269149288</span>
              </a>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-gold/30 text-zinc-400 hover:text-white transition-all duration-200 pointer-events-auto"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-gold/30 text-zinc-400 hover:text-white transition-all duration-200 pointer-events-auto"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-gold/30 text-zinc-400 hover:text-white transition-all duration-200 pointer-events-auto"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Big Signature */}
        <div className="border-t border-zinc-900/60 pt-16 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <h2 className="text-gold-glow text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter text-zinc-900/65 select-none pointer-events-none font-sans text-center md:text-left">
            R. RATHORE
          </h2>

          <button
            onClick={scrollToTop}
            className="p-4 rounded-full bg-zinc-900 border border-zinc-850 text-zinc-550 hover:text-white hover:border-gold/45 hover:bg-zinc-950 transition-all duration-300 group shadow-lg shadow-black/50 cursor-pointer pointer-events-auto"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-zinc-650 uppercase tracking-widest pt-8 border-t border-zinc-950">
          <div>
            &copy; {currentYear} ROHIT RATHORE. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-2 sm:mt-0 flex items-center space-x-2">
            <span>ART DIRECTION &amp; POST-PRODUCTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
