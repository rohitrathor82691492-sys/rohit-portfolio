"use client";

import React, { createContext, useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

export const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

interface ScrollyCanvasProps {
  children?: React.ReactNode;
}

const TOTAL_FRAMES = 120;

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);

  // 1. Framer Motion Scroll Engine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring physics for butter-smooth momentum scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 15,
    restDelta: 0.0001,
  });

  // Map progress (0-1) to frame index (0-119)
  const frameIndexValue = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // 2. High-performance drawing function
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Clear canvas (accounting for scaling)
    ctx.clearRect(0, 0, width, height);

    // Object-fit Cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 3. Image Preloading in useEffect
  useEffect(() => {
    let active = true;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = async () => {
      const promises = Array.from({ length: TOTAL_FRAMES }).map((_, i) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const frameNum = String(i).padStart(3, "0");
          img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
          
          img.onload = () => {
            if (active) {
              setLoadedCount((prev) => {
                const next = prev + 1;
                if (next === TOTAL_FRAMES) {
                  setIsPreloaded(true);
                }
                return next;
              });
            }
            resolve();
          };
          
          img.onerror = () => {
            // Fallback or resolve on error to not block progress
            resolve();
          };
          
          loadedImages[i] = img;
        });
      });

      imagesRef.current = loadedImages;
      await Promise.all(promises);
    };

    preloadImages();

    return () => {
      active = false;
    };
  }, []);

  // 4. Handle Canvas Resize (DPI awareness)
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Set internal width/height multiplied by device pixel ratio
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    
    // Draw current frame immediately
    const currentIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(frameIndexValue.get()))
    );
    drawFrame(currentIndex);
  };

  useEffect(() => {
    if (!isPreloaded) return;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Draw initial frame
    drawFrame(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isPreloaded]);

  // 5. Update canvas frame on scroll progress
  useMotionValueEvent(frameIndexValue, "change", (latest) => {
    if (!isPreloaded) return;
    const index = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(latest)));
    // Use requestAnimationFrame for smoother rendering on scroll
    requestAnimationFrame(() => drawFrame(index));
  });

  const percentLoaded = Math.floor((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-bg-dark">
      {/* Dynamic Loader Overlay */}
      <AnimatePresence>
        {!isPreloaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark text-white select-none"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-gray-500">
                Initializing Experience
              </div>
              <div className="font-sans font-extrabold text-7xl md:text-8xl tracking-tight text-glow select-none">
                {percentLoaded}%
              </div>
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-white"
                  style={{ width: `${percentLoaded}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div className="text-xs text-gray-600 font-mono italic">
                Preloading cinematic assets...
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover"
          style={{ width: "100%", height: "100%" }}
        />
        
        {/* Children components (e.g. Parallax Overlays) */}
        {isPreloaded && (
          <ScrollProgressContext.Provider value={smoothProgress}>
            {children}
          </ScrollProgressContext.Provider>
        )}
      </div>
    </div>
  );
}
