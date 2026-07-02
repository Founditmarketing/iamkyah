import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Nonprofit } from './pages/Nonprofit';
import { Speaking } from './pages/Speaking';
import { Classes } from './pages/Classes';
import { Bio } from './pages/Bio';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { Updates } from './pages/Updates';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const { pathname } = useLocation();
  // The Contact page already acts as its own contact/footer block (socials + form),
  // so the global footer beneath it reads as a duplicate footer — hide it there.
  const hideFooter = pathname === '/contact';

  return (
    <div className="font-sans antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nonprofit" element={<Nonprofit />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}
