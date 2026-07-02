import React from 'react';
import { motion } from 'motion/react';
import { Award, Quote, Mail } from 'lucide-react';

const honors = [
  {
    title: '2026 Remarkable Woman of Central Louisiana',
    org: 'Nexstar Media Group & FOX 48',
    desc: 'Recognizing women who make extraordinary contributions within their communities.',
  },
  {
    title: 'Finer Womanhood Award',
    org: 'Zeta Phi Beta Sorority, Inc.',
    desc: 'Honoring exemplary service and leadership.',
  },
  {
    title: '4 Under 40 Nominee',
    org: 'Central Louisiana Regional Chamber of Commerce',
    desc: 'Recognizing emerging leaders making significant contributions in their fields.',
  },
];

export const Bio = () => {
  return (
    <section className="py-32 bg-[#fcfbf9] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#5a6e5a] mb-6 block">
            Full Biography
          </span>
          <h1 className="text-5xl md:text-7xl font-display italic mb-6 leading-[0.95] tracking-tight text-balance">
            Kyah Spriggs
          </h1>
          <p className="text-lg md:text-xl font-serif italic text-stone-500">
            Speaker, Facilitator &amp; Mental Health Advocate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20 max-w-6xl mx-auto items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <img
              src="https://i.imgur.com/tHZGcoF.png"
              alt="Kyah Spriggs"
              className="rounded-[3rem] premium-shadow w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 p-8 glass-card rounded-[2rem] relative"
            >
              <Quote className="absolute -top-5 -left-5 text-[#5a6e5a] opacity-20" size={64} />
              <p className="text-lg md:text-xl font-serif italic text-stone-700 leading-relaxed relative z-10">
                "No one has to stay buried by life's struggles—we all have the ability to rise and
                live Six Feet Above."
              </p>
            </motion.div>
          </motion.div>

          {/* Prose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-stone-600 leading-relaxed font-light text-lg md:text-xl"
          >
            <p>
              Kyah Spriggs is a nationally recognized mental health advocate, motivational speaker,
              and facilitator dedicated to helping individuals and communities rise above life's
              hardest moments. In 2018, during a battle with mental illness, Kyah survived a suicide
              attempt after jumping from the Purple Heart Bridge in Central Louisiana. What followed
              was a season of deep healing, reflection, and personal transformation. Rather than
              allowing that moment to define her, Kyah chose to let it refine her—committing her life
              to living with purpose and helping others rediscover hope, resilience, and meaning in
              their own lives.
            </p>
            <p>
              With a heart for connection and a passion for breaking the stigma surrounding mental
              health, Kyah brings authenticity, vulnerability, and powerful lived experience to every
              stage and room she enters.
            </p>
            <p>
              Kyah is the founder of <strong className="font-semibold text-stone-800">Six Feet Above</strong>,
              a movement and nonprofit initiative focused on suicide prevention, mental health
              awareness, and building resilience within individuals and communities. Through this
              work, she leads initiatives that create safe spaces for honest conversations about
              mental health while equipping people with practical tools to support themselves and
              others.
            </p>
            <p>
              Four years ago, Kyah launched the{' '}
              <strong className="font-semibold text-stone-800">
                Annual Six Feet Above Mental Health and Wellness Festival
              </strong>
              , a free community event designed to eliminate stigma, connect individuals with
              resources, and celebrate the importance of self-care and emotional well-being. Each
              year, hundreds of people from across Central Louisiana gather to learn, heal, and grow
              together through this powerful community experience.
            </p>
            <p>
              As a facilitator and trainer, Kyah has worked with more than{' '}
              <strong className="font-semibold text-stone-800">20,000 teachers, students, law
              enforcement officers, military personnel, mental health professionals, and community
              members</strong>{' '}
              nationwide. Her custom-developed curriculums include crisis and suicide intervention
              trainings, burnout mitigation and self-care masterclasses, youth life-skills lessons,
              goal-setting seminars, and purpose workshops.
            </p>
            <p>
              Kyah's interactive and thought-provoking trainings empower people of all ages to live
              authentically, strengthen resilience, and develop the tools needed to navigate life's
              challenges with confidence, compassion, and purpose. Through practical strategies,
              honest conversation, and engaging facilitation, she creates learning environments that
              inspire personal growth while equipping individuals and organizations to better support
              the mental and emotional well-being of those around them.
            </p>

            {/* Honors */}
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-8">
                <Award size={22} className="text-[#5a6e5a]" strokeWidth={1.5} />
                <h2 className="text-2xl md:text-3xl font-display italic text-stone-800">
                  Honors &amp; Recognition
                </h2>
              </div>
              <div className="space-y-4">
                {honors.map((honor, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={honor.title}
                    className="p-6 bg-white border border-stone-200/70 rounded-2xl shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-stone-800">{honor.title}</h3>
                    <p className="text-sm uppercase tracking-widest text-[#5a6e5a] font-bold mt-1 mb-2">
                      {honor.org}
                    </p>
                    <p className="text-base text-stone-500 font-light">{honor.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="pt-4">
              Known for her ability to connect deeply with audiences, Kyah's speaking blends
              storytelling, humor, faith, and practical strategies. Whether addressing educators,
              community organizations, first responders, or conference audiences, her message remains
              clear: no one has to stay buried by life's struggles—we all have the ability to rise and
              live Six Feet Above.
            </p>
            <p className="pl-6 border-l-2 border-[#5a6e5a]/40 italic text-stone-500">
              Kyah's mission is simple but powerful: to help people rediscover hope, build resilience,
              and remember that even in the darkest seasons, their story still matters and their best
              days are still ahead.
            </p>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:itskyah@outlook.com"
              className="mt-6 inline-flex bg-[#5a6e5a] text-white px-10 py-5 rounded-full font-bold items-center gap-4 hover:bg-[#4a5a4a] transition-all duration-300 shadow-xl"
            >
              Book Kyah <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
