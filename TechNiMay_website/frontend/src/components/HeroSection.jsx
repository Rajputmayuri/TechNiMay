import React from 'react';

export const HeroSection = ({ onOpenContact }) => {
  return (
    <section className="relative pt-xl pb-32 px-margin max-w-container-max mx-auto text-center">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-tint/10 via-background to-background pointer-events-none"></div>

      <h1 className="font-display text-display md:text-5xl lg:text-7xl font-bold text-on-surface tracking-tight mb-8 max-w-4xl mx-auto">
        Building Web, Mobile &amp; <span class="text-primary">AI Solutions</span> for Modern Businesses
      </h1>

      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
        High-performance software engineered by experts. We transform complex problems into elegant, scalable digital products.
      </p>

      {/* CTA Button Group */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
        <button
          onClick={onOpenContact}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-DEFAULT font-label-md text-label-md font-bold hover:bg-primary-hover hover:text-white transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        >
          Book a Call
          <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
        </button>

        <a
          href="#projects"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-surface-container-highest text-on-surface rounded-DEFAULT font-label-md text-label-md font-medium hover:bg-surface-variant transition-colors border border-outline-variant/30"
        >
          Our Projects
        </a>
      </div>

      {/* Horizontal Divider Line */}
      <div className="pt-8 border-t border-outline-variant/30"></div>
    </section>
  );
};

export default HeroSection;
