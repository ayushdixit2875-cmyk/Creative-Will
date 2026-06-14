/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.45], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.45], ["2rem", "0rem"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.45], [0.5, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] mt-32">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ 
            scale, 
            borderRadius,
            opacity 
          }}
          className="relative w-full h-full bg-charcoal overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-75"
            src="https://cdn.pixabay.com/video/2023/10/30/187122-880004944_large.mp4"
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-8xl lg:text-[10rem] font-display uppercase tracking-tight text-center leading-[0.8]"
            >
              Cinematic <br /> Vision
            </motion.h2>
            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.5 }}
               transition={{ delay: 0.8 }}
               className="mt-8 text-xs uppercase tracking-[0.4em] font-mono"
            >
               Scroll to Explore
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
