import React, { useEffect, useState } from 'react';
import apiService from '../services/api';

const defaultProjects = [
  {
    id: 'mahalaxmi-cakes',
    title: 'Mahalaxmi Cakes',
    description: 'An elegant e-commerce bakery website for custom cake ordering, online menu browsing, and seamless delivery tracking.',
    image: './mahalaxmicakes.jpg',
    link: 'https://mahalaxmicakes.in',
  },
  {
    id: 'nand-tour-package',
    title: 'Nand Tour Package',
    description: 'An interactive travel & holiday booking portal featuring customized tour packages, destination itineraries, and online booking.',
    image: './nandtourpackage.jpg',
    link: 'https://nandtourpackage.com/',
  },
  {
    id: 'hometown-furniture',
    title: 'HomeTown Furniture',
    description: "India's premier online furniture & home decor store offering modern furniture, interior design solutions, and nationwide delivery.",
    image: './hometown.jpg',
    link: 'https://www.hometown.in/',
  },
  {
    id: 'berlin-elevators',
    title: 'Berlin Elevators',
    description: 'A corporate engineering portal for elevator & escalator systems, featuring custom product catalogs, technical specs, and quote estimation.',
    image: './berlnelevators.jpg',
    link: 'https://www.berlnelevators.com/',
  },
  {
    id: 'ss-deshmukh-edu',
    title: 'SS Deshmukh Educational Group',
    description: 'An educational institute platform offering student enrollment portals, academic course catalogs, and campus administration tools.',
    image: './ssdeshmukhedu.jpg',
    link: 'https://ssdeshmukhedu.com/',
  },
  {
    id: 'micrologics-india',
    title: 'Micrologics India',
    description: 'An industrial automation & IoT tech showcase highlighting smart PLC systems, SCADA control solutions, and custom embedded engineering.',
    image: './micrologicsindia.jpg',
    link: 'https://www.micrologicsindia.com/',
  },
];

export const ProjectsSection = () => {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    async function loadProjects() {
      const data = await apiService.getProjects();
      if (data && Array.isArray(data) && data.length > 0) {
        setProjects(data);
      }
    }
    loadProjects();
  }, []);

  return (
    <section className="py-xl px-margin max-w-container-max mx-auto border-t border-outline-variant/30" id="projects">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-4">
          Featured Projects
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          A selection of our recent work delivering value through technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projects.map((project) => (
          <div
            key={project.id || project.title}
            className="bg-surface-container-lowest rounded-xl border border-slate-200/90 shadow-sm overflow-hidden hover:border-[#1447FB] hover:shadow-[0_0_30px_rgba(20,71,251,0.25)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="h-48 bg-surface-container-high relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mb-2">
                  {project.title.replace(/\s*\(mahalaxmicakes\.in\)/gi, '')}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBF0FF] border border-[#1447FB]/30 text-[#1447FB] font-label-md font-semibold text-xs transition-all duration-200 hover:bg-[#1447FB] hover:text-white hover:border-[#1447FB] hover:shadow-md group/link"
                >
                  <span>{project.link.replace(/^https?:\/\//, '')}</span>
                  <span className="material-symbols-outlined text-[15px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                    open_in_new
                  </span>
                </a>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.tags &&
                    project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container-high rounded-full font-mono-code text-mono-code text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
