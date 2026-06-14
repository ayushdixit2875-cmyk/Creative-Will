/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Camera, Video, Palette, Share2, TrendingUp, Zap, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

const services = [
  {
    title: 'Brand Identity',
    description: 'We shape the soul of your business through minimalist, high-impact design and strategy.',
    icon: Palette,
    className: 'md:col-span-2 md:row-span-1',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Cinematic Shoots',
    description: 'Outdoor and studio productions that feel like a feature film.',
    icon: Camera,
    className: 'md:col-span-1 md:row-span-2',
    gradient: 'from-purple-500/20 to-pink-500/20',
    video: 'https://cdn.pixabay.com/video/2023/11/04/187747-880922855_tiny.mp4' // Placeholder video
  },
  {
    title: 'Short-Form Reels',
    description: 'Viral content engineered for TikTok, Reels, and YouTube Shorts.',
    icon: Zap,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Targeted Promotion',
    description: 'Ad campaigns that actually convert, backed by deep data analysis.',
    icon: TrendingUp,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-green-500/20 to-teal-500/20'
  },
  {
    title: 'Video Editing',
    description: 'Post-production that brings magic to your raw footage.',
    icon: Video,
    className: 'md:col-span-2 md:row-span-1',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    video: 'https://cdn.pixabay.com/video/2023/10/22/186106-877239075_tiny.mp4' // Placeholder video
  },
  {
    title: '360° Support',
    description: 'Full agency support. We become your internal marketing engine.',
    icon: HelpCircle,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative rounded-[2rem] p-8 overflow-hidden glass hover:border-white/20 transition-all duration-500",
        service.className
      )}
    >
      {/* Background Video */}
      {service.video && (
        <div className={cn(
          "absolute inset-0 z-0 transition-opacity duration-700",
          hovered ? "opacity-40" : "opacity-0"
        )}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={service.video}
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        service.gradient
      )} />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
            <service.icon size={24} strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-display uppercase mb-2 tracking-tight">{service.title}</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-[280px] group-hover:text-white/70 transition-colors">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4 block">Our Specialization</span>
            <h2 className="text-5xl md:text-7xl leading-none uppercase font-display">Core Agency Offerings</h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm">
            We operate at the intersection of cinematic art and technical precision to deliver unmatched digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
