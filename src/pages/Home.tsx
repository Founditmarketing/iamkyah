import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a] mb-6 block">IAmKyah.com</span>
          <h1 className="text-7xl md:text-9xl font-display italic leading-[0.85] mb-8">
            Defined by <br />
            <span className="text-[#5a6e5a]">Purpose</span>, <br />
            not the past.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-lg mb-10 leading-relaxed">
            Kyah Spriggs is a suicide survivor, wife, mother, and advocate. Her story began with a moment on a bridge, but it continues with a mission to save lives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/nonprofit" 
              className="bg-[#2d2d2d] text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-black transition-all"
            >
              Six Feet Above <ArrowRight size={18} />
            </Link>
            <Link 
              to="/speaking" 
              className="border border-[#2d2d2d] text-[#2d2d2d] px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#2d2d2d] hover:text-white transition-all"
            >
              Speaking Engagements
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://i.imgur.com/kowBcMN.png" 
            alt="Kyah smiling"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
