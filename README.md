# Etch-a-Sketch

A browser-based Etch-a-Sketch drawing app built with HTML, CSS, and vanilla JavaScript. Hover over the grid to draw, and press Reset to wipe the board clean.

**Live demo:** https://shivambangade.github.io/etch-a-sketch/

## Features

- Custom grid size — enter any value from 1 to 60 when the page loads
- Draw by hovering over the cells
- Reset button to clear the board and start fresh
- No dependencies or build tools — just plain HTML, CSS, and JS

## How to Run

Play it online at https://shivambangade.github.io/etch-a-sketch/, or open `index.html` locally in any modern browser. You'll be prompted for a grid size, and the board will be ready to draw on.

## How It Works

- `index.html` — page structure: heading, instructions, Reset button, and the grid container
- `script.js` — validates the grid size input, builds an n×n grid of divs, colors cells black on hover, and clears them on Reset
- `styles.css` — flexbox-based grid layout (480×480px) with a centered page
