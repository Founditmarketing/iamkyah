import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Speaking = () => {
  const topics = [
    "Suicide Intervention Training",
    "Survivor Testimony",
    "Self-care Workshops",
    "Coping Skills",
    "Mental Health Advocacy",
    "Youth Purpose Projects",
    "Burnout Mitigation Seminar"
  ];

  return (
    <section className="py-32 bg-[#2d2d2d] text-white rounded-[4rem] mx-4 md:mx-10 my-20 min-h-[90vh] flex items-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5a6e5a]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5a6e5a]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 mb-8 block">Public Speaking</span>
            <h2 className="text-6xl md:text-8xl font-display italic mb-10 leading-[0.9] tracking-tight">
              A Voice for the <br /> <span className="text-[#7c947c]">Unheard</span>.
            </h2>
            <p className="text-xl text-stone-300 mb-12 leading-relaxed font-light">
              With over <strong className="text-white font-medium">150 events</strong> under her belt, Kyah Spriggs brings passion, purpose, and practical strategies to every stage. Now booking for <strong className="text-white font-medium">Fall and Winter 2025</strong> engagements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {topics.map((topic, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  key={i} 
                  className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle2 size={18} className="text-[#7c947c]" />
                  <span className="text-base font-serif italic text-stone-200">{topic}</span>
                </motion.div>
              ))}
            </div>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:itskyah@outlook.com"
              className="mt-14 inline-flex bg-white text-[#2d2d2d] px-12 py-6 rounded-full font-bold items-center gap-4 hover:bg-[#7c947c] hover:text-white transition-all duration-300 shadow-xl"
            >
              Inquire for Speaking <Mail size={22} />
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img 
              src="https://i.imgur.com/71o2XAg.png" 
              alt="Kyah Spriggs Speaking Flyer" 
              className="rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] w-full object-cover border border-white/10 hover:border-white/20 transition-colors duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white text-black p-10 rounded-3xl shadow-2xl hidden md:block max-w-sm border border-stone-200">
              <p className="text-2xl font-display italic leading-tight">"How beautiful it is to do more than just exist."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
