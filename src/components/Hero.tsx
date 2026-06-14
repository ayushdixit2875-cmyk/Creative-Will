/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-6xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/10 glass text-[10px] uppercase tracking-widest text-cyan-400 font-medium mb-8">
            Digital Engineering Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.9] mb-12 uppercase tracking-tighter"
        >
          We Don't Just <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-silver">
            Follow Trends.
          </span>
          <br />
          We Engineer Them.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-8"
        >
          <p className="max-w-xl text-lg text-white/50 font-light leading-relaxed">
            Creativewill is a boutique digital agency specialized in high-end branding, 
            cinematic content, and results-driven ad campaigns.
          </p>

          <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              x: mousePos.x * 0.2,
              y: mousePos.y * 0.2,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative px-10 py-5 rounded-full overflow-hidden bg-white text-black font-semibold flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Book a Discovery Call</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="w-px h-12 bg-white/20"
        />
      </div>
    </section>
  );
}
