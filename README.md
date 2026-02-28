# Zealworthy757 Art Portfolio

Single-page portfolio site for showcasing digital work, murals, and studio updates.

## Current Features
- Interactive gallery with keyboard/touch-enabled image carousel
- Dedicated Featured Murals section
- Blog preview section with clickable full-post modal
- Animated starfield background (respects reduced-motion preference)
- Accessibility improvements:
	- Skip link
	- Focus-visible states
	- Keyboard interactions for cards/gallery
	- Scroll-aware nav with `aria-current`
- Theme toggle (light/dark) with saved preference

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

## Cloudflare Access (Auth)
This site can be protected with Cloudflare Access without adding login code to `index.html` or `script.js`.

### Recommended Setup (Entire Site)
1. In Cloudflare Dashboard, go to **Zero Trust**.
2. Open **Access** -> **Applications** -> **Add an application**.
3. Choose:
	- **Self-hosted** if this domain is proxied through Cloudflare DNS, or
	- **Cloudflare Pages** if hosted on Pages.
4. Set **Application domain** to your site (example: `portfolio.yourdomain.com`).
5. Add a **Policy**:
	- Action: **Allow**
	- Include: your email(s), domain, or identity provider group.
6. Add an identity provider under **Settings** -> **Authentication** (Google, GitHub, One-Time PIN, etc.).
7. Save and test in an incognito window.

### Optional: Public + Protected Split
If you want most of the site public, create an Access app only for a protected path such as `/admin/*`.

### Notes
- No client-side auth code changes are required for Access login gating.
- If API routes are added later, include those paths in your Access policy design.
