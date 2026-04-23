import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Mic2, Facebook } from 'lucide-react';

export const Nonprofit = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-32 min-h-screen bg-[#fcfbf9]">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-32 h-32 flex items-center justify-center"
          >
            <img 
              src="https://i.imgur.com/EWRs3wV.png" 
              alt="Six Feet Above Logo" 
              className="w-full h-full object-contain drop-shadow-md"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a] mb-6 block">Our Mission</span>
          <h2 className="text-6xl md:text-8xl font-display italic mb-16 tracking-tight">Six Feet Above</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto"
        >
          {[
            { icon: <Heart className="text-[#5a6e5a]" size={28} />, title: "Support", desc: "Providing immediate emotional support, suicide intervention, and resources for those in their darkest moments." },
            { icon: <Users className="text-[#5a6e5a]" size={28} />, title: "Community", desc: "Building a resilient network of survivors, families, and advocates who walk together toward healing." },
            { icon: <Mic2 className="text-[#5a6e5a]" size={28} />, title: "Advocacy", desc: "Fighting for better mental health policies, youth mentorship, and breaking the stigma surrounding suicide." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-10 glass-card rounded-[2rem] text-left hover:shadow-[0_20px_40px_rgba(90,110,90,0.1)] transition-shadow duration-500"
            >
              <div className="mb-6 bg-[#5a6e5a]/10 w-16 h-16 rounded-2xl flex items-center justify-center">{item.icon}</div>
              <h3 className="text-3xl font-display italic mb-4">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden aspect-[21/9] mb-24 premium-shadow max-w-6xl mx-auto group"
        >
          <img 
            src="https://i.imgur.com/sGjI3Kv.png" 
            alt="Six Feet Above Community" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center pb-16">
            <div className="text-white max-w-3xl px-6 text-center">
              <h3 className="text-5xl font-display italic mb-6 shadow-sm">Join the Movement</h3>
              <p className="text-xl font-light opacity-90 mb-8 max-w-xl mx-auto">We believe in a world where everyone has a reason to stay. Your support helps us provide that reason.</p>
              <a 
                href="https://www.facebook.com/sixfeetabovela/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-[#5a6e5a] hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <Facebook size={20} /> Follow on Facebook
              </a>
            </div>
          </div>
        </motion.div>

        <div className="text-left max-w-6xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display italic mb-10 border-b border-stone-200 pb-6"
          >
            Latest from the Community
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-stone-100/50 p-10 md:p-14 rounded-[2.5rem] border border-stone-200 h-full flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <span className="text-xs font-bold text-[#5a6e5a] uppercase tracking-widest mb-6 block relative z-10">Community Impact</span>
              <p className="text-stone-700 leading-relaxed italic text-2xl font-display relative z-10">
                "I have never done this work for recognition. I do it because it’s who I am. Because when someone is standing in their darkest moment, I get to be a light and that has always been enough for me."
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[
                "https://i.imgur.com/EWRs3wV.png",
                "https://i.imgur.com/m97ekYJ.png",
                "https://i.imgur.com/PvXMr2w.png",
                "https://i.imgur.com/D9MWyI1.png"
              ].map((src, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className="aspect-square rounded-3xl overflow-hidden shadow-md group"
                >
                  <img 
                    src={src} 
                    alt={`Community moment ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center mt-20">
            <a 
              href="https://www.facebook.com/sixfeetabovela/" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#5a6e5a] font-bold text-lg hover:text-black transition-colors flex items-center justify-center gap-2 group"
            >
              View more on Facebook 
              <motion.span className="group-hover:translate-x-2 transition-transform">
                →
              </motion.span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
