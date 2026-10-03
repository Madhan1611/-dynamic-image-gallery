# Dynamic Image Gallery Using React

A responsive React/Vite image gallery built for the project requirements.

## Requirements covered

- Reusable `ImageCard` component
- Image data stored in an array of objects
- Dynamic rendering with JavaScript `map()`
- Props passed from `Gallery` to `ImageCard`
- Separate components for readability and reuse
- Responsive CSS Grid layout
- React Fragment shorthand in the main app layout (`<>...</>`)
- Adding a new object to `src/data/images.js` automatically adds a card

## Run locally

Make sure Node.js is installed.

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, normally `http://localhost:5173/`.

## Production build

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Project structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   └── ImageCard.jsx
├── data/
│   └── images.js
├── App.jsx
├── index.css
└── main.jsx
index.html
vite.config.js
package.json
README.md
```
