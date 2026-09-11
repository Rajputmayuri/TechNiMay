import React from 'react';

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.333 5.001L2 22l5.133-1.343c1.472.802 3.14 1.226 4.876 1.227h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.037-5.176-2.924-7.064A9.924 9.924 0 0 0 12.012 2zm.001 18.155h-.003a8.31 8.31 0 0 1-4.233-1.162l-.304-.18-3.04.796.81-2.964-.198-.315a8.293 8.293 0 0 1-1.272-4.341c0-4.582 3.727-8.309 8.31-8.309 2.22 0 4.306.865 5.875 2.437a8.26 8.26 0 0 1 2.43 5.877c0 4.584-3.728 8.311-8.305 8.311zm4.551-6.208c-.25-.125-1.476-.728-1.705-.811-.229-.083-.396-.125-.563.125-.167.25-.646.811-.792.978-.146.167-.292.188-.542.063a6.837 6.837 0 0 1-2.01-1.238 7.545 7.545 0 0 1-1.391-1.733c-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.429h-.479c-.167 0-.438.063-.667.313s-.875.854-.875 2.083c0 1.229.896 2.417 1.02 2.583.125.167 1.762 2.69 4.269 3.771.597.257 1.063.411 1.426.527.6.19 1.146.163 1.577.099.48-.071 1.476-.604 1.684-1.188.208-.583.208-1.083.146-1.188-.063-.105-.229-.167-.479-.292z" />
  </svg>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface w-full border-t border-outline-variant/30 relative z-10 font-body">
      <div className="max-w-container-max mx-auto px-margin pt-6 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-5">
          {/* Column 1: Brand Info */}
          <div className="space-y-2">
            <a href="#" className="inline-block mb-1">
              <img
                src="./logo.png"
                alt="TECHNIMAY SOLUTIONS"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-on-surface-variant leading-normal">
              Precision engineering for modern businesses. Custom software, mobile apps, and scalable web applications.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2.5">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-on-surface-variant">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2.5">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-on-surface-variant">
              <li>Custom Web Development</li>
              <li>Mobile App Development</li>
              <li>Full-Stack Engineering</li>
              <li>AI & Automation Integration</li>
              <li>IoT & Smart Automation</li>
              <li>Digital Marketing & Growth</li>
            </ul>
          </div>

          {/* Column 4: Instant Support */}
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2.5">
              Instant Support
            </h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary shrink-0">mail</span>
                <a href="mailto:technimay@gmail.com" className="hover:text-primary transition-colors font-medium">
                  technimay@gmail.com
                </a>
              </div>
              <a
                href={`https://wa.me/919545129542?text=${encodeURIComponent('Hello TechNiMay Solutions! I would like to inquire about your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-on-surface-variant hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon />
                <span>+91 95451 29542</span>
              </a>
              <a
                href={`https://wa.me/918329262125?text=${encodeURIComponent('Hello TechNiMay Solutions! I would like to inquire about your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-on-surface-variant hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon />
                <span>+91 8329262125</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-4 border-t border-outline-variant/30 relative flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-on-surface-variant text-center w-full md:absolute md:inset-x-0 md:pointer-events-none">
            © 2026 TechNiMay Solutions. All rights reserved. Precision Engineering for Modern Businesses.
          </p>

          <div className="ml-auto relative z-10">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
