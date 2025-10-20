import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skin2SkinLogo from '../assets/skin2skin-logo.webp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    if (windowWidth >= 768 && mobileMenuOpen) setMobileMenuOpen(false);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, mobileMenuOpen]);

  return (
    <header className="bg-mint-green rounded-3xl mx-auto px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl relative z-50">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center h-24 lg:h-32 py-4 relative z-50">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-10 sm:h-12 lg:h-20 object-contain"
              src={Skin2SkinLogo}
              alt="Skin2Skin Logo"
            />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-10 font-sans text-white text-base lg:text-xl">
          <Link to="/products" className="hover:text-pink-100 font-semibold transition-colors duration-200">
            Products
          </Link>
          <Link to="/blog" className="hover:text-pink-100 font-semibold transition-colors duration-200">
            Blog
          </Link>
          <Link to="/aboutUs" className="hover:text-pink-100 font-semibold transition-colors duration-200">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex">
          <button className="text-white text-xl font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-pink-100 hover:text-black transition-all duration-200">
            Subscribe
          </button>
        </div>

        <div className="md:hidden flex items-center relative z-[60]">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen md:hidden z-50 bg-black/30 backdrop-blur-sm">
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-12 px-6">
            <nav className="bg-green-mint px-6 py-6 space-y-2 font-sans text-lg rounded-3xl w-full max-w-[600px] shadow-lg">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-semibold text-white hover:text-mint transition-colors duration-200 shadow-sm"
              >
                Products
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-semibold text-white hover:text-mint transition-colors duration-200 shadow-sm"
              >
                Blog
              </Link>
              <Link
                to="/aboutUs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-semibold text-white hover:text-mint transition-colors duration-200 shadow-sm"
              >
                About Us
              </Link>
              <button className="w-full font-semibold text-black bg-pink-100 py-2 px-4 rounded-md mt-2 hover:bg-pink-100 hover:text-black transition-all duration-200">
                Subscribe
              </button>
            </nav>
          </div>
        </div>
      )}

    </header>
  );
}
