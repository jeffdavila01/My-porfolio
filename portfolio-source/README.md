# Jeffrey Davila Portfolio

Vue 3 and Vite portfolio project for Jeffrey Davila. This is a static site and has no backend or message service configured.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

Each navigation item opens a separate view: `#/home`, `#/about`, `#/skills`, `#/workflow`, `#/projects`, and `#/contact`. Project details also support direct links such as `#/projects/chamber`. Hash routes support refresh and browser history on GitHub Pages without server configuration.

## Update portfolio content

- Edit project titles, links, technology stacks, screenshots, and verified features in `src/data/projects.js`.
- Edit the GitHub profile and add an email or LinkedIn URL in `src/data/site.js`.
- The hero portrait is `public/images/jeffrey-davila-profile.png`.

Project cards only show live or repository links when a URL is provided. Add screenshot paths such as `images/chamber.png` to the `image` field and store the files in `public/images/`.

The contact section links to GitHub until an email is provided. Adding `email` in `src/data/site.js` enables the email button.
