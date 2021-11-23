# Getting Started with Create React App

This project was bootstrapped with [Vite](https://vitejs.dev/guide/).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

The page will reload if you make edits.

### To run using Azure AD login locally do:

Do `docker compose up` in addition to running dev-server then go to 127.0.0.1:3000 instead of localhost:8081.

Because we use [Wonderwall](https://github.com/nais/wonderwall) as a sidecar to handle auth (with cookies) its required that request to the backend comes from the same domain as the frontend. Therefore we use  use a small reverse-proxy in front of the frontend which (currently) redirects requests prefixed with `/api` to the backend (localhost:8080 in dev).

### `npm run build`

Builds the app for production to the `build` folder.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub


## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #tpts.
