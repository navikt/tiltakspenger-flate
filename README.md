# TPTS-tiltakspenger-flate

Frontend til saksbehandlingssystem for tiltakspenger

This project was bootstrapped with [Vite](https://vitejs.dev/guide/).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.

If you want to run with mock-data, use `npm run dev-mock` instead

Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.

#### Technologies used in the frontend
- React
- Typescript
- React-router v6
- Recoil for state management
- Tailwind CSS
- ViteJS

### Proxy server

The proxy server does these things
- Proxy all request to `/api/*` and send them to the backend, but with an new token using On-behalf-of token exchange
- serve the build directory on `/`

The server can be run locally using `ts-node` by running `npm run serve`. This currently uses native ESM. The tests can be run with `npm run test` , these currently transpile to commonjs because [jest mocking currently does not work with native ESM](https://github.com/facebook/jest/issues/10025). Tests are using Supertest to wrap the express server.

### To run using Azure AD login locally do:

First build go to the `server` dir and run `npm run build` to transpile your current version

Do `docker compose up` in addition to running dev-server then go to 127.0.0.1:3000 instead of localhost:8081.

Because we use [Wonderwall](https://github.com/nais/wonderwall) as a sidecar to handle auth (with cookies) its required that request to the backend comes from the same domain as the frontend. Therefore we use  use a small reverse-proxy in front of the frontend which (currently) redirects requests prefixed with `/api` to the backend (localhost:8080 in dev).

### `npm run build`

Builds the app for production to the `build` folder.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub


## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #tpts.
