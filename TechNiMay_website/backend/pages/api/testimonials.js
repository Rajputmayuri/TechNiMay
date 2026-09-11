import { runMiddleware } from '../../lib/cors';

const testimonialsData = {
  metrics: [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Client Satisfaction', value: '98%' },
  ],
  partners: ['TechStars', 'Combinator'],
};

export default async function handler(req, res) {
  await runMiddleware(req, res);
  res.status(200).json(testimonialsData);
}
