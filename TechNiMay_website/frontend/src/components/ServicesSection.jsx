import React, { useEffect, useState } from 'react';
import apiService from '../services/api';

const defaultServices = [
  {
    id: 'web-dev',
    icon: 'code',
    title: 'Custom Web Development',
    description: 'High-performance web applications built for scale, security, and speed.',
    tags: ['React', 'Next.js', 'REST/GraphQL APIs'],
  },
  {
    id: 'mobile-dev',
    icon: 'smartphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences crafted for smooth performance.',
    tags: ['iOS', 'Android', 'React Native'],
  },
  {
    id: 'fullstack-eng',
    icon: 'database',
    title: 'Full-Stack Software Engineering',
    description: 'End-to-end cloud architecture, database design, and automated deployment pipelines.',
    tags: ['Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'ai-automation',
    icon: 'psychology',
    title: 'AI & Automation Integration',
    description: 'Intelligent AI workflows, LLM applications, and process automation systems.',
    tags: ['LLMs', 'Workflows', 'Chatbots'],
  },
  {
    id: 'iot-solutions',
    icon: 'sensors',
    title: 'IoT & Smart Automation',
    description: 'Connected IoT devices, real-time sensor monitoring, PLC/SCADA systems, and embedded firmware.',
    tags: ['IoT Sensors', 'PLC/SCADA', 'Embedded', 'MQTT'],
  },
  {
    id: 'digital-marketing',
    icon: 'trending_up',
    title: 'Digital Marketing & Growth',
    description: 'Strategic digital marketing, SEO optimization, performance campaigns, and brand growth strategies to expand your business reach.',
    tags: ['Digital Marketing', 'SEO', 'Performance Ads', 'Brand Growth'],
  },
];

export const ServicesSection = () => {
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    async function loadServices() {
      const data = await apiService.getServices();
      if (data && Array.isArray(data) && data.length > 0) {
        setServices(data);
      }
    }
    loadServices();
  }, []);

  return (
    <section className="py-xl px-margin max-w-container-max mx-auto" id="services">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-4">
          Services
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Precision engineering across the modern technology stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((service) => (
          <div
            key={service.id || service.title}
            className="bg-surface-container-lowest p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-[#1447FB] hover:shadow-[0_0_30px_rgba(20,71,251,0.25)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">{service.icon || 'code'}</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
                {service.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                {service.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {service.tags &&
                service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container-high rounded-full font-mono-code text-mono-code text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
