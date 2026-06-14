/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export function Support() {
  return (
    <section className="py-64 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl">
        <motion.div
           initial={{ opacity: 0, rotate: -45 }}
           whileInView={{ opacity: 1, rotate: 0 }}
           viewport={{ once: true }}
           className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-12 mx-auto"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <ShieldCheck className="text-cyan-400 w-10 h-10" />
          </motion.div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-display uppercase leading-tight mb-8"
        >
          Full Support. <br /> Zero Excuses.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          We don't just provide services. We provide a partnership that guarantees growth. 
          Expect daily communication, rapid execution, and absolute technical excellence.
        </motion.p>
      </div>
    </section>
  );
}
