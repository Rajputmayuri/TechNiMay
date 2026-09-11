import Cors from 'cors';

// Initialize Cors middleware allowing any origin dynamically
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin: true,
  credentials: true,
});

// Helper method to wait for a middleware to execute before continuing
export function runMiddleware(req, res, fn = cors) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
