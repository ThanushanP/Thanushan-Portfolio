# Thanushan's Portfolio

The portfolio content is stored locally in [`src/data/portfolioData.js`](src/data/portfolioData.js), so the page can display education, experience, skills, and projects without waiting for the portfolio database API. Project images are in `public/pics`.

## Run locally

```bash
npm install
npm start
```

Create a production build with `npm run build`.

## Contact form

The contact form still sends submissions to the backend. Set `REACT_APP_API_URL` to the backend base URL in the deployment environment; the form posts to its `/contact` endpoint.
