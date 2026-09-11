import React from 'react';

export const AboutSection = () => {
  return (
    <section className="py-xl px-margin max-w-container-max mx-auto border-t border-outline-variant/30" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-6">
            Built on Engineering Excellence
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            At TechNiMay Solutions, we believe that great software is the foundation of modern business success. Our mission is to partner with ambitious companies to build digital products that are not just functional, but exceptional.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            With a team of seasoned engineers, designers, and strategists, we bring a wealth of experience to every project. We prioritize clean code, robust architecture, and user-centric design to ensure long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-xl text-center">
            <div className="font-display text-display font-bold text-primary mb-2">50+</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Projects Delivered
            </div>
          </div>
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-xl text-center">
            <div className="font-display text-display font-bold text-primary mb-2">10+</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Years Experience
            </div>
          </div>
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-xl text-center sm:col-span-2">
            <div className="font-display text-display font-bold text-primary mb-2">98%</div>
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
