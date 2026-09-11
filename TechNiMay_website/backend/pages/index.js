export default function ApiRoot() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>⚡ TheSkwid Tech Solutions Backend API</h1>
      <p>This Next.js application serves as the API backend for TheSkwid Tech Solutions frontend.</p>
      
      <h2>Available Endpoints:</h2>
      <ul>
        <li><code>GET /api/health</code> - API Health Status</li>
        <li><code>POST /api/contact</code> - Contact Form Submissions</li>
        <li><code>GET /api/services</code> - Core Competencies Data</li>
        <li><code>GET /api/projects</code> - Portfolio Projects Data</li>
        <li><code>GET /api/testimonials</code> - Metrics & Social Proof Data</li>
      </ul>
      
      <p style={{ color: '#666', marginTop: '2rem' }}>
        Frontend Application runs on <a href="http://localhost:5173" target="_blank" rel="noreferrer">http://localhost:5173</a>.
      </p>
    </div>
  );
}
