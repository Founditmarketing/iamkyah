import React from 'react';
import { Quote } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-32 bg-[#f8f6f4] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://i.imgur.com/tHZGcoF.png" alt="Speaking" className="rounded-2xl shadow-lg aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/40npwux.png" alt="On Stage" className="rounded-2xl shadow-lg aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://i.imgur.com/C6Fsc9o.png" alt="Community" className="rounded-2xl shadow-lg aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/zzNU4p5.png" alt="Advocacy" className="rounded-2xl shadow-lg aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#5a6e5a] mb-6 block">The Journey</span>
            <h2 className="text-5xl font-display italic mb-8">Kyah Spriggs: 2026 Remarkable Woman.</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Named the <strong>2026 Remarkable Woman of Central Louisiana</strong>, Kyah Spriggs was selected as one of 125 women in America from over 12,000 nominations. This honor reflects a life dedicated to service—both loudly in the community and quietly in the moments no one sees.
              </p>
              <p>
                "I have never done this work for recognition. I do it because it’s who I am. Because when someone is standing in their darkest moment, I get to be a light and that has always been enough for me."
              </p>
              <p>
                Through suicide interventions, youth mentorship, and resource connections, Kyah Spriggs remains committed to serving her community with humility and heart.
              </p>
            </div>
            
            <div className="mt-12 p-8 bg-white rounded-3xl border border-stone-200 relative">
              <Quote className="absolute -top-4 -left-4 text-[#5a6e5a] opacity-20" size={64} />
              <p className="text-xl font-serif italic text-stone-700 relative z-10">
                "Let us not grow weary in doing good, for in due season we will reap a harvest, if we do not give up." — Galatians 6:9
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
