import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string[];
  name: string;
  title: string;
  org: string;
};

const testimonials: Testimonial[] = [
  {
    quote: [
      'It is a true privilege to recommend Kyah Spriggs as a speaker and advocate for suicide prevention. Having experienced hopelessness firsthand, Kyah brings an unparalleled level of authenticity, courage, and hope to her presentations.',
      'Kyah expertly discusses the stigma surrounding mental health and suicide, breaking down barriers and encouraging open, compassionate conversations. Her presentations are both empowering and educational, making her an invaluable resource for schools, businesses, organizations, and support groups. Her unique combination of personal experience, empathy, and professional dedication ensures that her audience walks away not just informed, but inspired to take action, whether it’s seeking help, supporting others, or advocating for mental health resources.',
      'Her message is one of healing, hope, and the importance of community, and she is sure to leave a lasting impression on all who hear her speak.',
    ],
    name: 'Linda Hutson',
    title: 'Director of Development & Community Relations',
    org: 'Central Louisiana Food Bank',
  },
  {
    quote: [
      'We were incredibly fortunate to have Kyah Spriggs speak to our school-based health center team. She shared her personal story with such honesty, vulnerability, and strength, and it truly resonated with all of us.',
      'She reminded us that our words matter, that we matter, and that every person we serve matters. Her message was a powerful reminder of the impact we have on the students, families, and communities we serve every day.',
      'We laughed, we cried, and most importantly, we came together as a team. She created a space where we could reflect, connect, and remember why we do what we do.',
      'Our team walked away feeling inspired, encouraged, and motivated to continue making a difference. Her story and message stayed with us long after the day ended.',
      'Thank you for sharing your heart, your story, and your incredible message with our team. You reminded us that what we do matters, and sometimes, we all need that reminder.',
    ],
    name: 'Jessica Barton',
    title: 'Family Nurse Practitioner',
    org: 'Trinity Community Health Centers of Louisiana',
  },
  {
    quote: [
      'It was an absolute honor to have Kyah Spriggs as a featured speaker at the Louisiana Rural Health Collective’s two-day behavioral health seminar attended by more than 60 Louisiana social workers.',
      'Kyah is not only an innovative and engaging speaker—she is authentic, courageous, and deeply impactful. Her presentation was educational, inspiring, and profoundly moving. By sharing her personal journey with suicide and mental health, she created a powerful connection with every person in the room. Her willingness to transform her own experiences into hope and healing for others is truly remarkable.',
      'The feedback from our attendees was overwhelmingly positive. Many described Kyah’s presentation as one of the most heartfelt, meaningful, and effective presentations they had ever experienced. Her message resonated long after the seminar ended, leaving attendees with a renewed sense of purpose, compassion, and commitment to supporting those facing mental health challenges.',
      'If you are looking for a speaker who educates, inspires, and changes lives, I wholeheartedly recommend Kyah Spriggs. Her story, professionalism, and passion make her an unforgettable presenter, and I look forward to the opportunity to work with her again.',
    ],
    name: 'Angela V. Huval, LCSW-BACS, BCD',
    title: 'Director of Behavioral Health Services',
    org: 'Louisiana Rural Health Collective',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-[#fcfbf9]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a] mb-6 block">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-7xl font-display italic leading-[0.95] tracking-tight text-balance">
            What Organizers <br className="hidden md:block" /> Are Saying
          </h2>
          <p className="text-lg md:text-xl text-stone-600 font-light mt-8 leading-relaxed">
            From food banks and health centers to statewide behavioral health seminars.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {testimonials.map((item, i) => (
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
              key={item.name}
              className="glass-card rounded-[2.5rem] p-10 md:p-14 relative hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5a6e5a]/10 flex items-center justify-center mb-8">
                <Quote size={24} className="text-[#5a6e5a]" strokeWidth={1.5} />
              </div>

              <blockquote className="space-y-6 text-stone-600 font-light text-lg md:text-xl leading-relaxed">
                {item.quote.map((paragraph, p) => (
                  <p key={p}>{paragraph}</p>
                ))}
              </blockquote>

              <figcaption className="mt-10 pt-8 border-t border-stone-200/70">
                <p className="text-2xl font-serif italic text-stone-800 leading-snug">{item.name}</p>
                <p className="text-stone-600 font-light mt-2">{item.title}</p>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#5a6e5a] mt-3">
                  {item.org}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
