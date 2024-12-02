import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#100324]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[#ffc329] text-2xl font-bold">[CORSO]</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-[#ffc329] transition-colors"
            >
              INICIO
            </Link>
            <Link
              to="/cursos"
              className="text-white hover:text-[#ffc329] transition-colors"
            >
              CURSOS
            </Link>
            <Link
              to="/planes"
              className="text-white hover:text-[#ffc329] transition-colors"
            >
              PLANES
            </Link>
            <Link
              to="/faq"
              className="text-white hover:text-[#ffc329] transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-[#ffc329] transition-colors"
            >
              BLOG
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-[#100324] transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-[#ffc329] transition-colors"
            >
              INICIO
            </Link>
            <Link
              to="/cursos"
              className="block text-white hover:text-[#ffc329] transition-colors"
            >
              CURSOS
            </Link>
            <Link
              to="/planes"
              className="block text-white hover:text-[#ffc329] transition-colors"
            >
              PLANES
            </Link>
            <Link
              to="/faq"
              className="block text-white hover:text-[#ffc329] transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/blog"
              className="block text-white hover:text-[#ffc329] transition-colors"
            >
              BLOG
            </Link>
            <Link
              to="/login"
              className="w-full border-2 border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-[#100324] transition-colors"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
