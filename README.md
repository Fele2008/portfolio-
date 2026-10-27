# Babosky Portfolio

A static portfolio site (HTML, CSS, JavaScript). No build step required.

## Structure

```
babosky-portfolio/
├── index.html      # page (must stay at the project root for Vercel)
├── css/style.css   # all styles
├── js/main.js      # menu, active nav, skill bars, contact form
├── assets/logo.jpg # logo emblem, favicon, social preview
├── vercel.json     # Vercel config (clean URLs, caching, headers)
└── README.md
```

## Deploy on Vercel

**Option 1: Dashboard**
1. Push this folder to a GitHub repository (the files must be at the repo root).
2. Go to vercel.com/new and import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty.
4. Click **Deploy**.

**Option 2: Vercel CLI**
```
npm i -g vercel
cd babosky-portfolio
vercel --prod
```

## Customize
- Replace the placeholder email `hello@babosky.dev` in `index.html` and `js/main.js`.
- Update the GitHub and LinkedIn links in the Contact section.
- Edit project names, stats, and skill percentages in `index.html`.
