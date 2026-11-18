# Thanushan's Portfolio

The portfolio content is stored locally in [`src/data/portfolioData.js`](src/data/portfolioData.js), so the page can display education, experience, skills, and projects without waiting for the portfolio database API. Project images are in `public/pics`.

## Run locally

```bash
npm install
npm start
```

Create a production build with `npm run build`.

## Contact form

The contact form uses Netlify Forms. After deploying to Netlify, submissions appear in the site's **Forms** tab. The static form in `public/index.html` allows Netlify to detect the form during the build; submissions from a local development server are not received by Netlify.
