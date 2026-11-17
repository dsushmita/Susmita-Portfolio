# Susmita Dhital — Portfolio

A responsive personal portfolio built with React and Vite, backed by a small Node.js and Express API. Profile content is currently maintained as local data; no database or external account is required.

## Run locally

```sh
npm install
npm run dev
```

Open the frontend at [http://localhost:5173](http://localhost:5173). Vite proxies `/api` requests to the Express server at [http://localhost:3001](http://localhost:3001).

## Update profile content

Edit [`server/profile.js`](./server/profile.js) to update the information returned by `GET /api/profile`. The résumé linked on the site is [`public/resume.pdf`](./public/resume.pdf).

## Useful commands

```sh
npm run dev       # Start the frontend and API
npm run dev:api   # Start only the API
npm run build     # Create the production frontend bundle
npm run preview   # Preview the production frontend bundle
npm test          # Run API tests
npm run lint      # Lint the project
```

The API health check is available at `/api/health`.
