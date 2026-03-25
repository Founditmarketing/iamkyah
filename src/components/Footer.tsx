import React from 'react';
import { Linkedin, Instagram, Mail, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-7xl font-display italic mb-12">Connect with Kyah Spriggs.</h2>
            <p className="text-xl text-stone-500 mb-12 max-w-md">
              Whether you're looking for support, a speaker, or a partnership, we'd love to hear from you.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/sixfeetabovela/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all" title="Six Feet Above Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kyahspriggs" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/kyahspriggs" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href="mailto:itskyah@outlook.com" className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#5a6e5a] hover:text-white hover:border-[#5a6e5a] transition-all" title="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full p-5 rounded-2xl bg-stone-100 border-none focus:ring-2 focus:ring-[#5a6e5a] outline-none" />
              <input type="email" placeholder="Email" className="w-full p-5 rounded-2xl bg-stone-100 border-none focus:ring-2 focus:ring-[#5a6e5a] outline-none" />
            </div>
            <select className="w-full p-5 rounded-2xl bg-stone-100 border-none focus:ring-2 focus:ring-[#5a6e5a] outline-none appearance-none">
              <option>Inquiry Type</option>
              <option>Speaking Engagement</option>
              <option>Nonprofit Partnership</option>
              <option>Media/Press</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Message" rows={5} className="w-full p-5 rounded-2xl bg-stone-100 border-none focus:ring-2 focus:ring-[#5a6e5a] outline-none" />
            <button className="w-full bg-[#2d2d2d] text-white py-5 rounded-2xl font-bold hover:bg-black transition-all">
              Send Message
            </button>
          </form>
        </div>

        <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-400 text-sm">
          <p>© 2025 IAmKyah.com. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Terms of Service</a>
          </div>
          <p className="font-display italic text-stone-300 text-xl">IAmKyah</p>
        </div>
      </div>
    </footer>
  );
};
