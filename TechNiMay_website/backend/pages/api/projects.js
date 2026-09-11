import { runMiddleware } from '../../lib/cors';

const projectsData = [
  {
    id: 'mahalaxmi-cakes',
    title: 'Mahalaxmi Cakes',
    description: 'An elegant e-commerce bakery website for custom cake ordering, online menu browsing, and seamless delivery tracking.',
    image: '/mahalaxmicakes.jpg',
    link: 'https://mahalaxmicakes.in',
  },
  {
    id: 'nand-tour-package',
    title: 'Nand Tour Package',
    description: 'An interactive travel & holiday booking portal featuring customized tour packages, destination itineraries, and online booking.',
    image: '/nandtourpackage.jpg',
    link: 'https://nandtourpackage.com/',
  },
  {
    id: 'hometown-furniture',
    title: 'HomeTown Furniture',
    description: "India's premier online furniture & home decor store offering modern furniture, interior design solutions, and nationwide delivery.",
    image: '/hometown.jpg',
    link: 'https://www.hometown.in/',
  },
  {
    id: 'berlin-elevators',
    title: 'Berlin Elevators',
    description: 'A corporate engineering portal for elevator & escalator systems, featuring custom product catalogs, technical specs, and quote estimation.',
    image: '/berlnelevators.jpg',
    link: 'https://www.berlnelevators.com/',
  },
  {
    id: 'ss-deshmukh-edu',
    title: 'SS Deshmukh Educational Group',
    description: 'An educational institute platform offering student enrollment portals, academic course catalogs, and campus administration tools.',
    image: '/ssdeshmukhedu.jpg',
    link: 'https://ssdeshmukhedu.com/',
  },
  {
    id: 'micrologics-india',
    title: 'Micrologics India',
    description: 'An industrial automation & IoT tech showcase highlighting smart PLC systems, SCADA control solutions, and custom embedded engineering.',
    image: '/micrologicsindia.jpg',
    link: 'https://www.micrologicsindia.com/',
  },
];

export default async function handler(req, res) {
  await runMiddleware(req, res);
  res.status(200).json(projectsData);
}
