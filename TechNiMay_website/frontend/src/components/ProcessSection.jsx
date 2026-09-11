import React from 'react';

export const ProcessSection = () => {
  const steps = [
    {
      num: '1',
      title: '1. Discover',
      desc: 'We analyze your requirements and define the technical architecture.',
      icon: 'search',
    },
    {
      num: '2',
      title: '2. Design',
      desc: 'Creating intuitive user experiences and scalable system designs.',
      icon: 'design_services',
    },
    {
      num: '3',
      title: '3. Develop',
      desc: 'Agile development sprints with continuous integration and testing.',
      icon: 'code',
    },
    {
      num: '4',
      title: '4. Deploy',
      desc: 'Seamless launch, monitoring, and ongoing support.',
      icon: 'rocket_launch',
    },
  ];

  return (
    <section className="py-xl bg-surface-container-lowest border-t border-outline-variant/30" id="process">
      <div className="px-margin max-w-container-max mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-4">
            Our Process
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            A proven methodology to take your idea from concept to production.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line across steps on Desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-outline-variant/30"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-surface-container-lowest border-2 border-primary text-primary rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
