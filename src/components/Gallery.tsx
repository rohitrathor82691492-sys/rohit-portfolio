"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, Info, Sparkles } from "lucide-react";

export interface ScannedImage {
  id: string;
  src: string;
  category: string;
  title: string;
}

interface GalleryProps {
  images: ScannedImage[];
}

interface CategoryFilter {
  key: string;
  name: string;
}

const CATEGORIES: CategoryFilter[] = [
  { key: "all", name: "All Works" },
  { key: "logo-design", name: "Logo Design" },
  { key: "visual-identity", name: "Visual Identity Design" },
  { key: "social-media", name: "Social Media Design" },
  { key: "print-design", name: "Print Design" },
  { key: "ai-creatives", name: "AI Creatives" },
];

export default function Gallery({ images }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeImage, setActiveImage] = useState<ScannedImage | null>(null);

  // Filter images client-side based on active tab
  const filteredImages = selectedCategory === "all"
    ? images
    : images.filter((img) => img.category === selectedCategory);

  const getFriendlyCategoryName = (key: string) => {
    const found = CATEGORIES.find((c) => c.key === key);
    return found ? found.name : "Design Work";
  };

  return (
    <section id="gallery" className="relative w-full py-32 px-6 sm:px-12 md:px-24 bg-[#050505] overflow-hidden border-t border-zinc-900/50">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs tracking-[0.4em] uppercase text-gold mb-3 font-semibold">
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-zinc-100">
            MASONRY GALLERY
          </h2>
        </div>
        <p className="max-w-md text-zinc-550 font-mono text-xs uppercase tracking-widest leading-relaxed">
          Dynamic media grid scanning and displaying uploaded designs. Click any card to open the preview lightbox.
        </p>
      </div>

      {/* Category Navigation Tabs */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-2.5 pb-4 border-b border-zinc-900/60">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2.5 rounded-xl font-mono text-[9px] tracking-widest uppercase border transition-all duration-300 pointer-events-auto cursor-pointer ${
              selectedCategory === cat.key
                ? "bg-white text-zinc-950 border-white font-bold"
                : "bg-zinc-950/80 text-zinc-400 border-zinc-850 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Scanned Image Masonry Layout */}
      {filteredImages.length === 0 ? (
        <div className="max-w-7xl mx-auto py-20 text-center rounded-2xl glass border border-zinc-850 bg-zinc-950/20">
          <div className="font-mono text-xs text-zinc-650 uppercase tracking-widest">
            No images found in public/images/{selectedCategory}/
          </div>
          <p className="text-[10px] text-zinc-600 font-serif italic mt-2">
            Copy portfolio files into that folder to display them here automatically.
          </p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              onClick={() => setActiveImage(img)}
              className="break-inside-avoid relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-850/50 cursor-pointer group pointer-events-auto shadow-lg shadow-black/80 hover:border-gold/20 transition-all duration-300"
            >
              {/* Visual wrapper */}
              <div className="relative aspect-[3/4] sm:aspect-auto w-full overflow-hidden min-h-[220px]">
                {/* Fallback height wrapper using native img if Next image fails or has size issues */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto max-h-[500px] object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
              </div>

              {/* Hover text detail and Zoom Icon */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-zinc-900/85 border border-zinc-800 text-gold">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-gold uppercase font-bold flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span>{getFriendlyCategoryName(img.category)}</span>
                  </span>
                  <h4 className="text-base font-black uppercase text-white tracking-tight leading-none first-letter:uppercase">
                    {img.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 md:p-12 pointer-events-auto"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer z-50"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-zinc-950 border border-gold/10 gold-glow grid grid-cols-1 md:grid-cols-12 gap-6 p-4 sm:p-6 md:p-8 z-40 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Large View (7 cols) */}
              <div className="md:col-span-7 relative flex items-center justify-center rounded-xl overflow-hidden bg-zinc-900 border border-zinc-900 min-h-[300px] md:h-[500px]">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full h-full object-contain max-h-[480px]"
                />
              </div>

              {/* Right Side: Metadata (5 cols) */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6 md:py-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-855 text-gold">
                      <Info className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-gold uppercase font-bold">
                      {getFriendlyCategoryName(activeImage.category)}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-none first-letter:uppercase">
                    {activeImage.title}
                  </h3>
                </div>

                <div className="pt-6 border-t border-zinc-900 space-y-4 font-mono text-[9px] text-zinc-550 uppercase tracking-widest">
                  <div className="flex justify-between">
                    <span>Design Category</span>
                    <span className="text-zinc-350 font-bold">{getFriendlyCategoryName(activeImage.category)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>File Name</span>
                    <span className="text-zinc-350 font-bold lowercase">{activeImage.src.split("/").pop()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format</span>
                    <span className="text-zinc-350 font-bold">{activeImage.src.split(".").pop()?.toUpperCase()} Image</span>
                  </div>
                  <button
                    onClick={() => setActiveImage(null)}
                    className="w-full py-3 mt-4 bg-zinc-900 hover:bg-zinc-850 text-white rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all text-center font-bold cursor-pointer"
                  >
                    CLOSE PREVIEW
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
