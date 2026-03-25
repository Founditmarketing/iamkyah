import React from 'react';
import { Mail } from 'lucide-react';

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
    <section className="py-32 bg-[#2d2d2d] text-white rounded-[60px] mx-4 md:mx-10 my-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-6 block">Public Speaking</span>
            <h2 className="text-6xl font-display italic mb-8">A Voice for the <br /> <span className="text-[#5a6e5a]">Unheard</span>.</h2>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              With over <strong>150 events</strong> under her belt, Kyah Spriggs brings passion, purpose, and practical strategies to every stage. Now booking for <strong>Fall and Winter 2025</strong> engagements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#5a6e5a]" />
                  <span className="text-sm font-serif italic">{topic}</span>
                </div>
              ))}
            </div>

            <a 
              href="mailto:itskyah@outlook.com"
              className="mt-12 inline-flex bg-[#5a6e5a] text-white px-10 py-5 rounded-full font-bold items-center gap-3 hover:bg-[#4a5a4a] transition-all"
            >
              Inquire for Speaking <Mail size={20} />
            </a>
          </div>

          <div className="relative group">
            <img 
              src="https://i.imgur.com/71o2XAg.png" 
              alt="Kyah Spriggs Speaking Flyer" 
              className="rounded-3xl shadow-2xl w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
              <p className="text-sm font-medium italic">"How beautiful it is to do more than just exist."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
