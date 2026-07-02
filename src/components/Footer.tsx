import React from 'react';
import { Linkedin, Instagram, Mail, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const socials = [
  { href: 'https://www.facebook.com/sixfeetabovela/', icon: Facebook, label: 'Six Feet Above Facebook' },
  { href: 'https://www.linkedin.com/in/kyahspriggs', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/kyahspriggs', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:itskyah@outlook.com', icon: Mail, label: 'Email' },
];

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Bio', path: '/bio' },
  { name: 'Nonprofit', path: '/nonprofit' },
  { name: 'Speaking', path: '/speaking' },
  { name: 'Classes', path: '/classes' },
  { name: 'Updates', path: '/updates' },
  { name: 'Contact', path: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="pt-20 pb-12 px-6 bg-white border-t border-stone-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <Link to="/" className="text-3xl font-display italic font-semibold tracking-tight hover:text-[#5a6e5a] transition-colors">
              IAmKyah.com
            </Link>
            <p className="text-stone-500 font-light mt-4 max-w-sm leading-relaxed">
              Advocate, speaker, and founder of Six Feet Above — helping people rediscover hope,
              build resilience, and rise above life's hardest moments.
            </p>
            <div className="flex gap-4 mt-8">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  title={label}
                  className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#5a6e5a] mb-6 block">Explore</span>
            <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-stone-600 hover:text-[#5a6e5a] transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} IAmKyah.com. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/admin" className="hover:text-[#5a6e5a] transition-colors">Admin</Link>
            <a href="#" className="hover:text-[#5a6e5a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5a6e5a] transition-colors">Terms of Service</a>
          </div>
          <p className="font-display italic text-stone-300 text-2xl tracking-tight">IAmKyah</p>
        </div>
      </div>
    </footer>
  );
};
