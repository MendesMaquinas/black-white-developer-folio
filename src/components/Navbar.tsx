
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-medium tracking-tighter">
          PORTFOLIO
        </Link>
        <ul className="flex space-x-6 md:space-x-10">
          <li><a href="#about" className="text-sm font-medium hover:text-gray-500 transition">Sobre</a></li>
          <li><a href="#experience" className="text-sm font-medium hover:text-gray-500 transition">Experiência</a></li>
          <li><a href="#projects" className="text-sm font-medium hover:text-gray-500 transition">Projetos</a></li>
          <li><a href="#contact" className="text-sm font-medium hover:text-gray-500 transition">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
