import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // shadow when scrolling
  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      headerRef.current.style.boxShadow =
        window.scrollY > 50 ? 'var(--shadow-md)' : 'var(--shadow-sm)';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 bg-[rgba(10,25,47,0.95)] backdrop-blur-[10px] shadow-sm py-4 transition-all duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-[#64ffda] tracking-wider no-underline"
        >
          OPRIX LAB
        </Link>
        <button
          className="md:hidden text-[#64ffda] text-2xl cursor-pointer bg-transparent border-none"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav
          className={`${isMenuOpen ? 'flex flex-col space-y-4 absolute top-full left-0 w-full bg-[rgba(10,25,47,0.95)] p-4' : 'hidden'} md:flex md:flex-row md:space-y-0 md:gap-8`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="text-[#ccd6f6] text-sm font-medium no-underline hover:text-[#64ffda] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-[#ccd6f6] text-sm font-medium no-underline hover:text-[#64ffda] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="text-[#ccd6f6] text-sm font-medium no-underline hover:text-[#64ffda] transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/process"
            onClick={closeMenu}
            className="text-[#ccd6f6] text-sm font-medium no-underline hover:text-[#64ffda] transition-colors duration-200"
          >
            Process
          </Link>
          <Link
            to="/portfolio"
            onClick={closeMenu}
            className="text-[#ccd6f6] text-sm font-medium no-underline hover:text-[#64ffda] transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className="text-[#ccd6f6] text-sm font-medium no-underline hover:text-[#64ffda] transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-[#64ffda] inline-block px-6 py-3 border-2 border-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
