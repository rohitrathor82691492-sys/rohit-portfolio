"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "GALLERY", href: "#gallery" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-6xl z-40 rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-2xl py-3 px-6" : "bg-transparent py-5 px-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group pointer-events-auto">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-gold/10 flex items-center justify-center text-white font-mono font-bold text-sm group-hover:border-gold transition-all duration-300">
              <Sparkles className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
            </div>
            <span className="font-mono text-xs font-black tracking-[0.25em] text-white">
              RR.STUDIO
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[9px] tracking-[0.2em] text-zinc-400 hover:text-gold transition-colors duration-305 pointer-events-auto"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Availability Badge & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-zinc-950/80 border border-zinc-900 rounded-full px-3 py-1 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[8px] tracking-[0.15em] text-zinc-400 uppercase font-medium">
                AVAILABLE FOR HIRE
              </span>
            </div>

            <a
              href="#contact"
              className="group font-mono text-[9px] tracking-[0.2em] bg-white text-zinc-950 px-4 py-2 rounded-xl flex items-center space-x-1 hover:bg-zinc-200 transition-all duration-300 font-bold pointer-events-auto"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-gold transition-colors cursor-pointer pointer-events-auto"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-6 top-24 z-40 glass rounded-2xl p-6 lg:hidden shadow-2xl flex flex-col space-y-6 pointer-events-auto"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-xs tracking-[0.2em] text-zinc-400 hover:text-gold py-2 border-b border-zinc-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-4 border-t border-zinc-900">
              <div className="flex items-center space-x-2 bg-zinc-950/60 border border-zinc-900 rounded-full px-3 py-1.5 self-start select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[8px] tracking-[0.15em] text-zinc-400 uppercase font-medium">
                  AVAILABLE FOR HIRE
                </span>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="font-mono text-[9px] tracking-[0.2em] bg-white text-zinc-950 px-4 py-3 rounded-xl flex items-center justify-center space-x-1 font-bold"
              >
                <span>INQUIRE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
