import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Mic2, Facebook } from 'lucide-react';

export const Nonprofit = () => {
  return (
    <section className="py-32 min-h-screen">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-32 h-32 flex items-center justify-center"
          >
            <img 
              src="https://i.imgur.com/EWRs3wV.png" 
              alt="Six Feet Above Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#5a6e5a] mb-6 block">Our Mission</span>
        <h2 className="text-6xl font-display italic mb-16">Six Feet Above</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Heart className="text-[#5a6e5a]" />, title: "Support", desc: "Providing immediate emotional support, suicide intervention, and resources for those in their darkest moments." },
            { icon: <Users className="text-[#5a6e5a]" />, title: "Community", desc: "Building a resilient network of survivors, families, and advocates who walk together toward healing." },
            { icon: <Mic2 className="text-[#5a6e5a]" />, title: "Advocacy", desc: "Fighting for better mental health policies, youth mentorship, and breaking the stigma surrounding suicide." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[32px] border border-stone-100 shadow-sm text-left"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-display italic mb-4">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] mb-20">
          <img 
            src="https://i.imgur.com/sGjI3Kv.png" 
            alt="Six Feet Above Community" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-white max-w-2xl px-6">
              <h3 className="text-4xl font-display italic mb-6">Join the Movement</h3>
              <p className="text-lg opacity-90 mb-8">We believe in a world where everyone has a reason to stay. Your support helps us provide that reason.</p>
              <a 
                href="https://www.facebook.com/sixfeetabovela/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#5a6e5a] hover:text-white transition-all"
              >
                <Facebook size={20} /> Follow on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="text-left max-w-6xl mx-auto">
          <h3 className="text-3xl font-display italic mb-8 border-b border-stone-100 pb-4">Latest from the Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 h-full flex flex-col justify-center">
              <span className="text-xs font-bold text-[#5a6e5a] uppercase tracking-widest mb-4 block">Community Impact</span>
              <p className="text-stone-600 leading-relaxed italic text-lg">
                "I have never done this work for recognition. I do it because it’s who I am. Because when someone is standing in their darkest moment, I get to be a light and that has always been enough for me."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://i.imgur.com/EWRs3wV.png",
                "https://i.imgur.com/m97ekYJ.png",
                "https://i.imgur.com/PvXMr2w.png",
                "https://i.imgur.com/D9MWyI1.png"
              ].map((src, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-md"
                >
                  <img 
                    src={src} 
                    alt={`Community moment ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://www.facebook.com/sixfeetabovela/" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#5a6e5a] font-bold hover:underline"
            >
              View more on Facebook →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
