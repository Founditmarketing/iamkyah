import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section className="py-32 bg-[#fcfbf9] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5a6e5a]/5 to-transparent rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
            <div className="space-y-6 pt-16">
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                src="https://i.imgur.com/tHZGcoF.png" 
                alt="Speaking" 
                className="rounded-3xl premium-shadow aspect-[4/5] object-cover w-full hover:scale-[1.03] transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                src="https://i.imgur.com/40npwux.png" 
                alt="On Stage" 
                className="rounded-3xl premium-shadow aspect-[4/3] object-cover w-full hover:scale-[1.03] transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="space-y-6">
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                src="https://i.imgur.com/C6Fsc9o.png" 
                alt="Community" 
                className="rounded-3xl premium-shadow aspect-[4/3] object-cover w-full hover:scale-[1.03] transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                src="https://i.imgur.com/zzNU4p5.png" 
                alt="Advocacy" 
                className="rounded-3xl premium-shadow aspect-[4/5] object-cover w-full hover:scale-[1.03] transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a] mb-6 block">The Journey</span>
            <h2 className="text-5xl md:text-6xl font-display italic mb-10 text-balance leading-tight tracking-tight">
              Kyah Spriggs: <br/> 2026 Remarkable Woman.
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg md:text-xl">
              <p>
                Named the <strong className="font-semibold text-stone-800">2026 Remarkable Woman of Central Louisiana</strong>, Kyah Spriggs was selected as one of 125 women in America from over 12,000 nominations. This honor reflects a life dedicated to service—both loudly in the community and quietly in the moments no one sees.
              </p>
              <p className="pl-6 border-l-2 border-[#5a6e5a]/30 italic text-stone-500">
                "I have never done this work for recognition. I do it because it’s who I am. Because when someone is standing in their darkest moment, I get to be a light and that has always been enough for me."
              </p>
              <p>
                Through suicide interventions, youth mentorship, and resource connections, Kyah Spriggs remains committed to serving her community with humility and heart.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 p-10 glass-card rounded-[2rem] relative"
            >
              <Quote className="absolute -top-6 -left-6 text-[#5a6e5a] opacity-20" size={80} />
              <p className="text-xl md:text-2xl font-serif italic text-stone-700 relative z-10 leading-relaxed">
                "Let us not grow weary in doing good, for in due season we will reap a harvest, if we do not give up." 
                <span className="block mt-4 text-sm font-sans not-italic font-bold text-[#5a6e5a] tracking-widest uppercase">— Galatians 6:9</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
