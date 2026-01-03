# Personal Website (Vite + React)

This repository is a minimal starter for a personal website (portfolio, blog, photo gallery) built with Vite + React. The design is modern and minimal; replace content and images with your own.

Get started locally

1. Install dependencies

```bash
cd ~/Downloads/personal-website
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

Deploy to GitHub Pages (two common options)

Option A — Repository pages (recommended for project sites)

- Create a GitHub repo (for example `personal-website`) and push this code to it.
- In `package.json` the `deploy` script uses `gh-pages` (already included). Install it locally: `npm install --save-dev gh-pages`.
- Update `vite.config.js` `base` if your site will be served from a subpath. Example: `base: '/personal-website/'`.
- Run:

```bash
npm run predeploy
npm run deploy
```

This will push the `dist` folder to the `gh-pages` branch and publish the site at `https://<yourusername>.github.io/personal-website/`.

Option B — User/Organization site (`<username>.github.io`)

- Create a GitHub repository named exactly `<yourusername>.github.io`.
- Build the site (`npm run build`).
- Push the contents of the `dist` folder to the `main` branch root of the repository (or configure a GitHub Action to do it).
- The site will be available at `https://<yourusername>.github.io/`.

Notes and next steps

- Replace `Your Name`, contact info, and project details in `src/components`.
- Add real images in `public/photos` (replace placeholders).
- If you want to render markdown into styled HTML inside React, consider adding a small static site generator (e.g., mdx or building at compile-time).
