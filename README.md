# Anuvrat Singh Rajpurohit: Portfolio

React + Vite + Tailwind CSS v4 + Motion. Not yet built or tested; run these steps yourself.

## Run
    npm install
    npm run build      # confirm it succeeds
    npx vercel dev     # runs the site and /api/contact locally (npm run dev has no API)

## Contact form (required for delivery)
1. Create a free account at resend.com using anuvratrajpurohit@gmail.com (the free onboarding sender only delivers to the account's own email unless you verify a domain). Create an API key.
2. In Vercel > Project > Settings > Environment Variables add:
   - RESEND_API_KEY = your key
   - CONTACT_TO_EMAIL = anuvratrajpurohit@gmail.com
   - CONTACT_FROM_EMAIL = (optional) a verified sender
3. Redeploy, send a test message, and check your inbox.

## Deploy
Push to GitHub, import the repo at vercel.com (Framework: Vite, build `npm run build`, output `dist`).

## Structure
    src/
      App.jsx                 page composition
      main.jsx, index.css     entry and design tokens
      data/content.js         links, skills, projects (edit content here)
      components/
        fx/                   animation pieces (Split, Mag, Spot, Cursor, Glow, Orbit, Marquee, Tech icons...)
        ui/                   Section, Card, Tag, button styles
        layout/               Header, Footer, ThemeToggle
        sections/             Hero, About, Skills, Education, Projects, Contact
    api/contact.js            Vercel serverless email endpoint
