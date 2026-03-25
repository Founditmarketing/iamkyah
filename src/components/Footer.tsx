import React from 'react';
import { Linkedin, Instagram, Mail, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6 bg-white border-t border-stone-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#5a6e5a] mb-6 block">Get in Touch</span>
            <h2 className="text-6xl md:text-7xl font-display italic mb-10 text-balance leading-tight">Connect with <br/>Kyah Spriggs.</h2>
            <p className="text-xl text-stone-500 mb-12 max-w-md font-light leading-relaxed">
              Whether you're looking for support, a speaker, or a partnership, we'd love to hear from you.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/sixfeetabovela/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1" title="Six Feet Above Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://www.linkedin.com/in/kyahspriggs" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1" title="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://www.instagram.com/kyahspriggs" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1" title="Instagram">
                <Instagram size={22} />
              </a>
              <a href="mailto:itskyah@outlook.com" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1" title="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <form className="glass-card p-8 md:p-10 rounded-[2rem] space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5a6e5a]/5 rounded-bl-full pointer-events-none" />
            <h3 className="text-2xl font-display italic mb-6">Send a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <input type="text" id="name" placeholder=" " className="input-floating peer" />
                <label htmlFor="name" className="label-floating">Full Name</label>
              </div>
              <div className="relative">
                <input type="email" id="email" placeholder=" " className="input-floating peer" />
                <label htmlFor="email" className="label-floating">Email Address</label>
              </div>
            </div>
            
            <div className="relative">
              <select id="inquiry" className="input-floating appearance-none text-stone-700">
                <option value="" disabled selected hidden>Select Inquiry Type</option>
                <option value="Speaking">Speaking Engagement</option>
                <option value="Nonprofit">Nonprofit Partnership</option>
                <option value="Press">Media / Press</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="relative">
              <textarea id="message" rows={5} placeholder=" " className="input-floating resize-none peer"></textarea>
              <label htmlFor="message" className="label-floating">Your Message</label>
            </div>
            
            <button type="button" className="w-full bg-[#2d2d2d] text-white py-5 rounded-xl font-bold hover:bg-[#5a6e5a] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 mt-2">
              Send Message
            </button>
          </form>
        </div>

        <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} IAmKyah.com. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#5a6e5a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5a6e5a] transition-colors">Terms of Service</a>
          </div>
          <p className="font-display italic text-stone-300 text-2xl tracking-tight">IAmKyah</p>
        </div>
      </div>
    </footer>
  );
};
