import React, { useState } from 'react';

export const Navbar = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline/20">
      <div className="flex justify-between items-center h-20 px-margin max-w-container-max mx-auto">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center py-2 pr-4 group focus:outline-none"
        >
          <img
            src="./logo.png"
            alt="TECHNIMAY SOLUTIONS"
            className="h-14 md:h-16 lg:h-[68px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-gutter">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Call Action */}
        <div className="hidden md:block">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary rounded-DEFAULT font-label-md text-label-md font-bold hover:bg-primary-hover hover:text-white transition-colors cursor-pointer"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-on-surface-variant focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-on-surface hover:text-primary font-label-md text-label-md py-2 border-b border-outline-variant/10"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-4 inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary rounded-DEFAULT font-label-md text-label-md font-bold hover:bg-primary-hover hover:text-white"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
