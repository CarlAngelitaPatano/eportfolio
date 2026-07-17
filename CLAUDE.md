# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static ePortfolio site for Carl Angelo Patano (BSIT student, ITC-C508 / Elective 4 course). Plain HTML/CSS/JS — no build step, no package manager, no framework. Deployed by pushing to GitHub and importing the repo into Vercel (Framework Preset: "Other").

## Running locally

There is no dev server or build command. Open `index.html` directly in a browser, or serve the folder with any static file server (e.g. XAMPP, since the project lives under `htdocs`). There is no test suite, linter, or CI.

## File structure

- `index.html` — the main landing page: Hero, About, Skills, Projects, Course Expectations, Contact. Each section is a `<section id="...">` targeted by the nav and scrollspy JS at the bottom of the file.
- `404.html` — themed not-found page (Vercel serves this automatically for unmatched routes on this static site).
- `itc-c508.html` — the ITC-C508 course records page. Renders cards into `#recordsGrid` by reading the `RECORDS` array from `records.js` (loaded via `<script src="records.js">` before the inline renderer script).
- `records.js` — the single source of truth for course record entries. Each entry is `{ tag, title, date, description, link, linkText }`. Adding a record means prepending an object to the `RECORDS` array — the file has inline instructions on this pattern.
- `works/` — drop folder for uploaded work files (PDF, DOCX, images) referenced by `link` in `records.js`. The "Upload Work File" button on `itc-c508.html` deep-links to GitHub's web upload UI for this folder (`.../upload/main/works`).
- `style.css` — single shared stylesheet for both pages, dark theme, CSS custom properties defined in `:root` (`--bg`, `--card`, `--accent`, `--gradient`, etc.). Reuse these variables rather than hardcoding colors.
- `scripts.js` — shared scroll-reveal (`IntersectionObserver` adding `.visible` on `.reveal` elements) and back-to-top button logic, loaded by both HTML pages. `index.html` additionally has its own inline scrollspy script (nav-highlighting), which is page-specific since it depends on `index.html`'s own section IDs.
- `assets/` — images and SVG icons (`profile.jpg` is the real photo, used for both the hero avatar and About section; replace it to personalize).

## Conventions specific to this repo

- No JS modules/bundler: both HTML pages use plain inline `<script>` tags plus `scripts.js` and `records.js`. Keep new scripts in this same plain, dependency-free style.
- Nav links and footer links are duplicated across `index.html` and `itc-c508.html` (anchors like `#about`, `#skills`, `#expectations` only work from `index.html`; `itc-c508.html` links back to `index.html#...`). Keep both navs and footers in sync when adding/removing sections.
- The Course Expectations section (`#expectations` in `index.html`) contains graded course content (reflection answers tied to required readings). Treat this content as the user's own academic work — don't rewrite its substance unless asked.
- Icons are inline SVGs (stroke-based, using `currentColor` or the `--accent` color), not an icon font/library or emoji.
