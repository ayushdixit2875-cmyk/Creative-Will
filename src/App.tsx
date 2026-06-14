/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScroll } from './components/SmoothScroll';
import { ThreeScene } from './components/ThreeScene';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Showreel } from './components/Showreel';
import { Support } from './components/Support';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Global Navigation */}
        <nav className="fixed top-0 left-0 w-full z-40 p-8 flex justify-between items-center mix-blend-difference">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            <span className="font-display font-bold uppercase tracking-tighter text-xl">Creativewill</span>
          </div>

          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] font-semibold">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">Showreel</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Connect</a>
          </div>

          <button className="px-6 py-2 rounded-full border border-white/20 glass text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
            Get Started
          </button>
        </nav>

        {/* Backdrop 3D Scene */}
        <ThreeScene />

        {/* Content Sections */}
        <Hero />
        
        <div id="services">
          <Services />
        </div>

        <div id="work">
          <Showreel />
        </div>

        <Support />

        <div id="contact">
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}
