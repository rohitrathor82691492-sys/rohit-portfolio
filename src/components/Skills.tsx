"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Image as ImageIcon, Video, Cpu } from "lucide-react";

interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const SKILLS: SkillItem[] = [
  {
    id: "01",
    name: "Adobe Photoshop",
    percentage: 95,
    icon: <ImageIcon className="w-5 h-5 text-gold" />,
  },
  {
    id: "02",
    name: "Adobe Illustrator",
    percentage: 90,
    icon: <Layers className="w-5 h-5 text-gold" />,
  },
  {
    id: "03",
    name: "Adobe After Effects",
    percentage: 50,
    icon: <Video className="w-5 h-5 text-gold" />,
  },
  {
    id: "04",
    name: "Artificial Intelligence (AI Tools)",
    percentage: 60,
    icon: <Cpu className="w-5 h-5 text-gold" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 px-6 sm:px-12 md:px-24 bg-[#050505] overflow-hidden border-t border-zinc-900/50">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold mb-3 font-semibold">
          CORE SKILLS
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-zinc-100">
          TECHNICAL SKILLS
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col justify-between p-6 rounded-2xl glass gold-glow border border-zinc-800/80 hover:border-gold/25 transition-all duration-300 min-h-[200px] bg-zinc-950/20 pointer-events-auto"
          >
            {/* Hover Accent Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.01] to-transparent pointer-events-none" />

            <div>
              {/* Icon & ID */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-850 text-zinc-400 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="font-mono text-zinc-800 text-lg font-bold group-hover:text-gold/40 transition-colors">
                  {skill.id}
                </span>
              </div>

              {/* Title */}
              <div className="mt-6">
                <h3 className="text-lg font-black tracking-tight text-zinc-100 uppercase group-hover:text-gold-bright transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                <span>PROFICIENCY</span>
                <span className="text-gold font-bold">{skill.percentage}%</span>
              </div>
              <div className="w-full h-[3px] bg-zinc-900 rounded-full overflow-hidden relative border border-zinc-850/50">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-gold to-gold-bright shadow-[0_0_10px_rgba(197,168,128,0.4)]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
