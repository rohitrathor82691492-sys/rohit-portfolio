"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Film } from "lucide-react";

export interface ScannedVideo {
  id: string;
  src: string;
  title: string;
}

interface AIVideoProjectsProps {
  videos: ScannedVideo[];
}

export default function AIVideoProjects({ videos }: AIVideoProjectsProps) {
  const [activeVideo, setActiveVideo] = useState<ScannedVideo | null>(null);

  return (
    <section id="ai-videos" className="relative w-full py-32 px-6 sm:px-12 md:px-24 bg-[#070707] overflow-hidden border-t border-zinc-900/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold mb-3 font-semibold">
            CINEMATIC GENERATIVE ART
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-zinc-100">
            AI VIDEOS
          </h2>
        </div>
        <p className="max-w-md text-zinc-550 font-mono text-xs uppercase tracking-widest leading-relaxed">
          Showcase of generative video art and cinematic motion graphics. Click any thumbnail to play in fullscreen.
        </p>
      </div>

      {/* Video Grid */}
      {videos.length === 0 ? (
        <div className="max-w-7xl mx-auto py-20 text-center rounded-2xl glass border border-zinc-850 bg-zinc-950/20">
          <div className="font-mono text-xs text-zinc-650 uppercase tracking-widest">
            No video files found in public/videos/ai-videos/
          </div>
          <p className="text-[10px] text-zinc-600 font-serif italic mt-2">
            Upload MP4 video files into that folder to display them here automatically.
          </p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, index) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveVideo(vid)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/30 p-2 gold-glow-hover transition-all duration-500 hover:border-gold/20"
            >
              {/* Aspect Ratio Container for Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/60">
                {/* Silent Autoplay Video Preview/Thumbnail */}
                <video
                  src={vid.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:border-gold group-hover:scale-110 shadow-[0_0_15px_rgba(197,168,128,0.2)]"
                  >
                    <Play className="ml-1 w-6 h-6 fill-current" />
                  </motion.div>
                </div>
              </div>

              {/* Project Title Info */}
              <div className="mt-4 px-2 pb-2 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-mono text-[9px] tracking-widest text-gold uppercase font-bold flex items-center gap-1.5">
                    <Film className="w-3 h-3" />
                    AI VIDEO
                  </div>
                  <h3 className="text-base font-black uppercase tracking-tight text-zinc-200 transition-colors group-hover:text-white">
                    {vid.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox / Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/60 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Element */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                <video
                  src={activeVideo.src}
                  autoPlay
                  controls
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Lightbox Title Footer */}
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
                <div className="space-y-1">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold font-bold">
                    AI VIDEO SHOWCASE
                  </span>
                  <h4 className="text-lg font-black uppercase tracking-tight text-zinc-150">
                    {activeVideo.title}
                  </h4>
                </div>
                <div className="text-[9px] text-zinc-500 uppercase tracking-widest self-start sm:self-auto border border-zinc-850 px-2.5 py-1 rounded-md bg-zinc-900/40">
                  Format: MP4 Video
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
