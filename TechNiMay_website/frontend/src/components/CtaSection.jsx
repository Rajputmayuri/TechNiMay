import React from 'react';

export const CtaSection = ({ onOpenContact }) => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary text-on-primary py-10 px-margin">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
          Ready to Build Something Great?
        </h2>
        <p className="font-body-md text-sm md:text-base text-primary-fixed-dim mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help transform your ideas into reality. Schedule a free discovery call or send us a message.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-6 py-3 bg-on-primary text-primary rounded-md font-label-md font-bold hover:bg-surface-container-lowest transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Book a Call
          </button>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-6 py-3 border border-on-primary text-on-primary rounded-md font-label-md font-bold hover:bg-on-primary/15 transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
