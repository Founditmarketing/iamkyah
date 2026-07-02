import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lightbox, useLightbox } from '../components/Lightbox';
import {
  LifeBuoy,
  HeartPulse,
  Sunrise,
  Brain,
  TrendingUp,
  Sprout,
  Sparkles,
  Briefcase,
  Mic,
  Handshake,
  Shield,
  Mail,
  Camera,
} from 'lucide-react';

const gallery = [
  { src: '/FullSizeRender.jpeg', caption: 'Crisis Intervention Team training' },
  { src: '/IMG_9113.jpeg', caption: 'Suicide prevention briefing for service members' },
  { src: '/IMG_2624.jpeg', caption: 'Keynote at Louisiana Christian University' },
  { src: '/IMG_8361.jpeg', caption: 'CIT training cohort, Central Louisiana' },
  { src: '/IMG_8090_crop.jpeg', caption: 'ACE for Soldiers — Army Suicide Prevention Month' },
  { src: '/image000000.jpeg', caption: 'Youth purpose project — messages of hope' },
  { src: '/IMG_6694.jpeg', caption: 'School assembly keynote' },
  { src: '/IMG_4872.jpeg', caption: 'Training a first-responder academy class' },
  { src: '/IMG_7048_crop.jpeg', caption: 'Speaking at Central Louisiana Interfaith' },
  { src: '/IMG_5029_fixed.jpeg', caption: 'CLASS community wellness training' },
];

const classes = [
  {
    icon: LifeBuoy,
    title: 'Crisis & Suicide Intervention',
    points: [
      'Recognizing warning signs',
      'Responding with confidence and compassion',
      'Building safer, more supportive communities',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Compassion Fatigue & Burnout Mitigation',
    points: [
      'Preventing emotional exhaustion in helping professionals',
      'Restoring passion, purpose, and sustainability in the workplace',
    ],
  },
  {
    icon: Sunrise,
    title: 'Learning to Live Six Feet Above',
    points: [
      'Building a life of intention, gratitude, and meaning',
      'Reconnecting with purpose and personal fulfillment',
    ],
  },
  {
    icon: Brain,
    title: 'Mental Health Awareness',
    points: [
      'Reducing stigma and increasing understanding',
      'Creating supportive environments at work, school, and home',
    ],
  },
  {
    icon: TrendingUp,
    title: 'From Surviving to Thriving',
    points: [
      'Moving beyond adversity and stepping into growth',
      'Practical strategies for mindset and life transformation',
    ],
  },
  {
    icon: Sprout,
    title: 'Self-Care & Life Skills',
    points: [
      'Realistic, sustainable self-care strategies',
      'Emotional regulation, boundaries, and personal growth',
    ],
  },
  {
    icon: Sparkles,
    title: 'Youth Purpose Projects',
    points: [
      'Helping young people discover identity, purpose, and resilience',
      'Interactive, age-appropriate engagement and skill building',
    ],
  },
  {
    icon: Briefcase,
    title: 'Staff In-Services & Professional Development',
    points: [
      'Customized trainings for organizations, schools, and agencies',
      'Practical tools teams can implement immediately',
    ],
  },
  {
    icon: Mic,
    title: 'Inspirational Keynote Speaking',
    points: ['High-energy, story-driven presentations that motivate and inspire'],
  },
  {
    icon: Handshake,
    title: 'Interactive Team-Building Workshops',
    points: ['Strengthening communication, trust, and collaboration'],
  },
  {
    icon: Shield,
    title: 'Resilience Training',
    points: ['Building mental and emotional strength for individuals and teams'],
  },
];

export const Classes = () => {
  const lightbox = useLightbox();
  return (
    <section className="py-32 bg-[#fcfbf9] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a] mb-6 block">
            Trainings & Speaking
          </span>
          <h1 className="text-5xl md:text-7xl font-display italic mb-10 leading-[0.95] tracking-tight text-balance">
            Classes I Offer
          </h1>
          <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg md:text-xl text-left">
            <p>
              As a seasoned speaker, trainer, and mental health advocate, I have had the privilege of
              working with more than <strong className="font-semibold text-stone-800">20,000 individuals</strong> across
              Louisiana and beyond. My work goes beyond suicide prevention and mental health
              education—my mission is to help individuals and organizations reconnect with purpose,
              strengthen resilience, and create healthier, more compassionate communities.
            </p>
            <p>
              What makes my work especially impactful is that it is grounded not only in professional
              training, but in <strong className="font-semibold text-stone-800">lived experience</strong>. I openly share my
              personal story of overcoming a suicide attempt and how I transformed one of the darkest
              seasons of my life into a mission of hope, purpose, and service. Audiences connect
              deeply with this message of resilience and leave empowered with the belief that growth
              and healing are always possible.
            </p>
            <p>
              I offer engaging keynote presentations, interactive workshops, and customized trainings
              designed to educate, inspire, and equip audiences with practical tools they can
              immediately apply.
            </p>
          </div>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display italic text-center mb-16 text-stone-800"
        >
          Core Training & Speaking Topics
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {classes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                key={item.title}
                className="glass-card rounded-[2rem] p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#5a6e5a]/10 flex items-center justify-center mb-6">
                  <Icon size={26} className="text-[#5a6e5a]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif italic text-stone-800 mb-5 leading-snug">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-stone-600 font-light">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7c947c] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera size={22} className="text-[#5a6e5a]" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a]">
                Gallery
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display italic text-stone-800 leading-tight">
              Kyah in Action
            </h2>
            <p className="text-stone-500 font-light text-lg mt-4">
              From classrooms and academies to auditoriums and conference stages.
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {gallery.map((photo, i) => (
              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                viewport={{ once: true, margin: '-50px' }}
                key={photo.src}
                onClick={() => lightbox.open(i)}
                className="group relative mb-6 break-inside-avoid overflow-hidden rounded-[1.75rem] premium-shadow cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 pt-12 bg-gradient-to-t from-black/70 via-black/25 to-transparent text-white text-sm font-serif italic opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {photo.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-xl md:text-2xl font-serif italic text-stone-700 mb-8">
            Every training can be customized for your organization, school, or team.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-flex bg-[#5a6e5a] text-white px-12 py-6 rounded-full font-bold items-center gap-4 hover:bg-[#4a5a4a] transition-all duration-300 shadow-xl"
            >
              Book a Training <Mail size={22} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <Lightbox
        images={gallery}
        index={lightbox.index}
        onClose={lightbox.close}
        onNavigate={lightbox.navigate}
      />
    </section>
  );
};
