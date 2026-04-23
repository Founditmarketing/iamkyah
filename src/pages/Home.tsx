import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 mt-10 md:mt-0"
        >
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a] mb-6 block">IAmKyah.com</span>
          <h1 className="text-7xl md:text-[8rem] lg:text-[9.5rem] font-display italic leading-[0.85] mb-8 lg:-ml-2 tracking-tight">
            Defined by <br />
            <span className="text-[#5a6e5a]">Purpose</span>, <br />
            not the past.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-lg mb-12 leading-relaxed font-light">
            Kyah Spriggs is a suicide survivor, wife, mother, and advocate. Her story began with a moment on a bridge, but it continues with a mission to save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/nonprofit" 
              className="group bg-[#2d2d2d] text-white px-8 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-[#5a6e5a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium"
            >
              Six Feet Above 
              <motion.span className="group-hover:translate-x-1.5 transition-transform duration-300">
                <ArrowRight size={18} />
              </motion.span>
            </Link>
            <Link 
              to="/speaking" 
              className="group border border-[#d6d3d1] bg-white/50 backdrop-blur-sm text-[#2d2d2d] px-8 py-5 rounded-full flex items-center justify-center gap-3 hover:border-[#5a6e5a] hover:text-[#5a6e5a] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(90,110,90,0.1)] hover:-translate-y-1 font-medium"
            >
              Speaking Engagements
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden premium-shadow mx-auto w-full max-w-[500px] lg:max-w-none"
        >
          <img 
            src="https://i.imgur.com/kowBcMN.png" 
            alt="Kyah smiling"
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d]/50 via-transparent to-transparent opacity-80" />
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-300"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};
