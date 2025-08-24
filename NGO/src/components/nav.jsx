import React, { useState } from "react";

// Menu Icon
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

// Close Icon
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#aboutus", text: "About Us" },
    { href: "#working", text: "Our Working" },
    { href: "#joining", text: "Joining" },
    { href: "#gallery", text: "Gallery" },
    { href: "#subset", text: "Subset" },
  ];

  return (
    <div className="bg-gray-100 font-poppins sticky top-0 z-50">
      <nav className="bg-white shadow-md">
        <div>
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="pl-4 text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
                REACT_NGO
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="text-gray-600 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-all duration-300"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-white hover:bg-indigo-600 focus:outline-none transition-all duration-300"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="block text-gray-600 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
