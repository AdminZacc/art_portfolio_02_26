# Progress Log

## Date
- 2026-02-28

## Completed
- Removed Shader Lab and all shader-related HTML/CSS/JS.
- Added and iterated music experience: API-backed playlist, shared player apparatus, panel-button interaction, compact right-side dock, and ultra-compact pass.
- Added autoplay attempt for first loaded preview at 20% default volume with browser-safe fallback.
- Added then removed Cloudflare-specific UI/docs based on direction change.
- Added blog card image-header blocks for each post and refreshed selected media backgrounds.
- Verified particle background initialization compatibility and increased visibility.

## Notes
- Work paused by request for now.

## Date
- 2026-02-27

## Completed
- Removed Shader Lab section and related JS/CSS to better match the site theme.
- Expanded music section into a compact right-side dock with responsive mobile behavior.
- Added shared in-page music player behavior and compact playlist interactions.
- Updated background particle visibility and loader compatibility.

## Notes
- Removed Cloudflare-specific UI/docs additions.

## Date
- 2026-02-25

## Completed
- Stabilized gallery carousel behavior and fixed event-order/runtime issues.
- Added reliable animated particle background initialization.
- Added SEO/social metadata in the document head.
- Added artwork metadata-driven captions/alt labels.
- Added a Featured Murals section with carousel support.
- Added a Blog section with clickable cards and full-post modal.
- Added accessibility improvements:
  - Skip link
  - Keyboard support on interactive cards/images
  - Strong focus-visible states
  - Scroll-aware nav highlighting with `aria-current`
- Added light/dark theme toggle near nav with persisted preference.
- Improved responsive styling for new sections and modals.

## Notes
- Featured murals currently point to placeholders from existing image assets.
- Replace `featuredMuralFiles` in `script.js` when mural-specific assets are ready.
- Blog preview text and modal post bodies are starter content and can be replaced anytime.

## Next Suggested Tasks
- Add real mural images and titles.
- Replace starter blog copy with published entries.
- Add favicon + canonical URL once final domain is set.
- Optional: optimize images to WebP for faster load times.
