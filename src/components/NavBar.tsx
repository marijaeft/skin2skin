import { useState } from 'react';
import Skin2SkinLogo from '../assets/skin2skin-logo.webp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-mint-green rounded-3xl mx-auto px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center h-24 lg:h-32 py-4">
        <div className="flex-shrink-0">
          <a href="/">
            <img
              className="h-10 sm:h-12 lg:h-20 object-contain"
              src={Skin2SkinLogo}
              alt="Skin2Skin Logo"
            />
          </a>
        </div>

        <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-10 font-sans text-white text-base lg:text-xl">
          <a
            href="/"
            className="hover:text-pink-100 font-medium transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="/"
            className="hover:text-pink-100 font-medium transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="/"
            className="hover:text-pink-100 font-medium transition-colors duration-200"
          >
            About Us
          </a>
        </nav>

        <div className="hidden md:flex">
          <button className="text-white text-xl font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-pink-100 hover:text-black transition-all duration-200">
            Subscribe
          </button>
        </div>

        <div className="md:hidden flex items-center">
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
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="flex justify-center mt-2">
          <nav className="bg-pink-100 px-6 py-4 space-y-2 font-sans text-lg rounded-3xl w-full max-w-[600px] shadow-lg">
            <a
              href="/"
              className="block px-3 py-2 rounded-md font-medium text-white hover:text-mint transition-colors duration-200 shadow-sm"
            >
              Products
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md font-medium text-white hover:text-mint transition-colors duration-200 shadow-sm"
            >
              Blog
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md font-medium text-white hover:text-mint transition-colors duration-200 shadow-sm"
            >
              About Us
            </a>
            <button className="w-full font-medium text-white bg-mint-green py-2 px-4 rounded-md mt-2 hover:bg-pink-100 hover:text-black transition-all duration-200">
              Subscribe
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
