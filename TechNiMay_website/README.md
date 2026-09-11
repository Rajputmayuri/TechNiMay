# TechNiMay Solutions Website

This repository is structured into a two-tier decoupled architecture:
1. **`/frontend`**: React + Vite + TailwindCSS application implementing the Stitch Precision Engineering design system.
2. **`/backend`**: Next.js API server handling form submissions, health monitoring, and dynamic content endpoints.
3. **`/stitch_website_design`**: Single source of truth containing Stitch UI/UX design specifications, tokens, and markup reference.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** installed.

### 2. Running the Backend API
```bash
cd backend
npm install
npm run dev
```
The Next.js API server will start on `http://localhost:3001`.

Key API Endpoints:
- `GET http://localhost:3001/api/health`
- `POST http://localhost:3001/api/contact`
- `GET http://localhost:3001/api/services`
- `GET http://localhost:3001/api/projects`
- `GET http://localhost:3001/api/testimonials`

### 3. Running the Frontend Application
In a separate terminal window:
```bash
cd frontend
npm install
npm run dev
```
The React frontend application will start on `http://localhost:5173`.

---

## 📁 Project Architecture

```text
theskwid_website/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components (Navbar, Hero, Services, Projects, Process, About, Contact, Footer)
│   │   ├── pages/           # Page views (HomePage.jsx)
│   │   ├── services/        # API service layer (api.js with Axios/Fetch)
│   │   ├── styles/          # TailwindCSS & base styles
│   │   ├── App.jsx          # React Router setup
│   │   └── main.jsx
│   ├── tailwind.config.js   # Precision Engineering Design tokens
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── pages/api/           # Next.js API routes (health, contact, services, projects, testimonials)
│   ├── lib/                 # CORS middleware and helpers
│   ├── next.config.js       # CORS headers configuration
│   ├── .env.example         # Environment template
│   └── package.json
│
├── stitch_website_design/   # Stitch design system reference (DESIGN.md, code.html)
└── README.md                # Project documentation
```

---

## 🎨 Design System
The UI adheres strictly to **Technical Minimalism / Precision Engineering System**:
- **Primary Color**: Deep Indigo (`#1f108e`)
- **Secondary Accent**: Emerald (`#006c49`)
- **Background**: Soft Slate (`#f8fafc`)
- **Typography**: Inter (UI/Headlines) & JetBrains Mono (Code/Technical tags)
