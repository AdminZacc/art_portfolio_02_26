# Zealworthy757 Art Portfolio

Single-page portfolio site for showcasing digital work, murals, and studio updates.

## Current Features
- Interactive gallery with keyboard/touch-enabled image carousel
- Dedicated Featured Murals section
- Blog preview section with clickable full-post modal and in-card image headers
- Studio Playlist panel powered by iTunes Search API
- Shared in-page audio player with compact right-side playlist dock
- Animated starfield background (respects reduced-motion preference)
- Accessibility improvements:
	- Skip link
	- Focus-visible states
	- Keyboard interactions for cards/gallery
	- Scroll-aware nav with `aria-current`
- Theme toggle (light/dark) with saved preference

## Status
- Assignment paused on 2026-02-28.

## Project Structure
- `index.html` — page layout, sections, modal containers
- `styles.css` — global styles, responsive rules, theme styles
- `script.js` — gallery/blog interactivity, theme state, nav section tracking
- `images/` — artwork and mural image assets

## Run Locally
Open `index.html` directly, or run a local static server:

```powershell
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Customize
### Main Gallery
Update `imageFiles` in `script.js`.

### Featured Murals
Update `featuredMuralFiles` in `script.js`.

### Image Titles/Captions
Update `artworkMeta` in `script.js`.

### Blog Posts
Update blog cards in `index.html` and full post content in `blogPosts` inside `script.js`.

### Contact Info
Update footer links in `index.html`.
