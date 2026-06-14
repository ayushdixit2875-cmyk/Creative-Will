/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="relative min-h-screen bg-onyx px-6 pb-12 pt-32 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 font-semibold">Contact</h3>
            <div className="space-y-4">
              <p className="text-4xl hover:text-cyan-400 transition-colors cursor-pointer">hello@creativewill.agency</p>
              <p className="text-4xl hover:text-purple-500 transition-colors cursor-pointer">+1 (555) 0123 456</p>
            </div>
          </div>
          
          <div className="mt-32">
            <h3 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-8 font-semibold">Social</h3>
            <div className="flex gap-6">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-4 rounded-full border border-white/5 hover:bg-white hover:text-black transition-all duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass p-12 rounded-[3rem] border-white/5">
          <h3 className="text-2xl font-display uppercase mb-8">Send a brief</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Message</label>
              <textarea className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-400 transition-colors resize-none h-32" placeholder="Tell us about your project..." />
            </div>
            <button className="w-full py-6 rounded-full bg-white text-black font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>

      <div 
        className="relative mt-32 w-full select-none cursor-pointer overflow-hidden py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.h2 
          className="text-[15vw] md:text-[20vw] font-display text-center leading-none uppercase tracking-tighter transition-all duration-700"
          style={{
            color: isHovered ? 'transparent' : 'white',
            WebkitTextStroke: isHovered ? '1px white' : 'none',
            textShadow: isHovered ? '20px 0px 40px rgba(34, 211, 238, 0.4)' : 'none',
            transform: isHovered ? 'skewX(-10deg)' : 'none'
          }}
        >
          LET'S TALK.
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto w-full pt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20 font-semibold">
        <p>© 2026 Creativewill Agency. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
