import { runMiddleware } from '../../lib/cors';

const servicesData = [
  {
    id: 'web-dev',
    icon: 'code',
    title: 'Custom Web Development',
    description: 'High-performance web applications built for scale and speed.',
    tags: ['React', 'Next.js', 'REST/GraphQL APIs'],
  },
  {
    id: 'mobile-dev',
    icon: 'smartphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences crafted for performance.',
    tags: ['iOS', 'Android', 'React Native'],
  },
  {
    id: 'fullstack-eng',
    icon: 'database',
    title: 'Full-Stack Software Engineering',
    description: 'End-to-end architecture, database design, and deployment pipelines.',
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
    description: 'Connected IoT devices, real-time sensor monitoring, PLC/SCADA systems, and embedded solutions.',
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

export default async function handler(req, res) {
  await runMiddleware(req, res);
  res.status(200).json(servicesData);
}
