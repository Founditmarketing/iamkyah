import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Nonprofit', path: '/nonprofit' },
    { name: 'Speaking', path: '/speaking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-5 flex justify-between items-center transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100' : 'bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-stone-100 md:border-none'}`}>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl md:text-2xl font-display italic font-semibold tracking-tight">IAmKyah.com</Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`hover:text-[#5a6e5a] transition-colors ${location.pathname === link.path ? 'text-[#5a6e5a]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/speaking" 
            className="hidden sm:block bg-[#5a6e5a] text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#4a5a4a] transition-all"
          >
            Book Kyah
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2d2d2d]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-3xl font-display italic ${location.pathname === link.path ? 'text-[#5a6e5a]' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/speaking" 
                className="mt-4 bg-[#5a6e5a] text-white px-8 py-4 rounded-full text-center font-bold text-lg"
              >
                Book Kyah
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
