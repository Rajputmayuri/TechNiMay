import { runMiddleware } from '../../lib/cors';

export default async function handler(req, res) {
  await runMiddleware(req, res);

  res.status(200).json({
    status: 'ok',
    service: 'TechNiMay Solutions API Server',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
}
