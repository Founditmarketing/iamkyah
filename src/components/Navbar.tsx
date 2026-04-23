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
    { name: 'Updates', path: '/updates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-5 flex justify-between items-center transition-all duration-500 ${scrolled || isOpen ? 'glass-card border-b-0 shadow-sm' : 'bg-transparent border-transparent'}`}>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl md:text-2xl font-display italic font-semibold tracking-tight hover:text-[#5a6e5a] transition-colors">IAmKyah.com</Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`hover:text-[#5a6e5a] relative group py-2 ${location.pathname === link.path ? 'text-[#5a6e5a]' : 'text-stone-600'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#5a6e5a] transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/speaking" 
            className="hidden sm:block bg-[#5a6e5a] text-white px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-[#4a5a4a] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Kyah
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2d2d2d] hover:text-[#5a6e5a] transition-colors"
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path} 
                    className={`text-4xl font-display italic block hover:translate-x-4 transition-transform ${location.pathname === link.path ? 'text-[#5a6e5a] font-semibold' : 'text-stone-800'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  to="/speaking" 
                  className="mt-8 bg-[#5a6e5a] text-white px-8 py-4 rounded-2xl block text-center font-bold text-lg hover:bg-[#4a5a4a] transition-all"
                >
                  Book Kyah
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
