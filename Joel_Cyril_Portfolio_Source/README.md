# Joel Thomas Cyril — Full Portfolio Source Code

This is a **complete, editable standalone recreation** of the Joel Cyril Framer portfolio, with the site's content, image gallery, interactive background, projects, certificates, and responsive styling.

> **Not a native Framer project export:** Framer's visual canvas, internal layout metadata and published hosting project are proprietary. This package is a working standalone HTML/CSS/JavaScript implementation, not the original Framer project structure. It can run without Framer or npm.

## Start the website

**Option A — simplest:** Extract the entire ZIP and open `index.html` in a modern browser. Do not move it away from the `assets` directory.

**Option B — use a local development server:**

```bash
cd Joel_Cyril_Portfolio_Source
python -m http.server 8000
```

Open http://localhost:8000 in your browser. This is recommended for consistent behavior.

## Edit the code

| File | Purpose |
|------|---------|
| `index.html` | Main page structure: hero, experience, case study, skills, learning, contact |
| `styles.css` | Responsive dark theme, cards, layout and animations |
| `script.js` | Projects, awards, all 22 certificates, filters, interactive backdrop, lightbox |
| `assets/profile/joel-portrait.png` | Original supplied high-resolution professional portrait |
| `assets/profile/joel-portrait.webp` | Optimized copy for normal page display |
| `assets/certificates/full/` | **22 high-resolution, correctly oriented scans** shown in full-screen viewer |
| `assets/certificates/thumbs/` | 22 small quick-loading WebP gallery thumbnails |
| `assets/images.json` | Source manifest, image dimensions and original filenames |
| `framer-components/*.tsx` | Original two React code components used in the Framer project; useful if continuing in Framer |

To edit a project, update `PROJECTS` in `script.js`. For awards, update `AWARDS`. For certificate images, titles and categories, update `CERTIFICATES` in `script.js` and add/remove the matching image files.

The website uses DM Serif Display and Inter from Google Fonts, with standard browser fallback fonts when offline. No tracking scripts, hosting integrations or paid dependencies are required.

## Interactive features

- Cursor-reactive particles and gentle background glow **throughout the website**
- Responsive desktop, tablet and mobile layout
- Reveal-on-scroll animations (respecting `prefers-reduced-motion`)
- Editable five-project portfolio with outbound live/repository links
- SWAP infrastructure challenge and scrap-built NAS case study
- 13 clickable award cards connected to the appropriate photographs
- 22-photo gallery with category filters
- Full-screen viewer: keyboard Escape, arrow keys, zoom controls, next/previous and high-resolution image link
- Accessible labels, keyboard focus management and scroll locking
- Hero section with original provided portrait

## Publish it for free

- **GitHub Pages:** Create a public repository, upload the entire folder's files to the repository root, then configure Settings → Pages → Deploy from a branch (main/root). The site uses relative asset paths and works under a repository subpath.
- **Netlify:** Drag the extracted folder into Netlify Drop or connect a repository.
- **Cloudflare Pages:** Use static site hosting (no build step needed).

The two new repositories (`adis-readtrack` and `veris`) had previously returned public 404s; check their visibility before using the site for university applications.

## Image quality note

The Framer site had been populated with 150–200-pixel Canva previews. **This standalone version uses original-source images**, correctly rotated and saved at high JPEG quality (up to 4000 pixels), with separate fast-loading thumbnails. Zoomed certificates should be substantially clearer than in that Framer version. Source photographs cannot reveal details that were already blurry when captured.

## Legal and privacy note

This portfolio includes your uploaded personal photo and awards/certificates. Before publishing, verify that you want each document publicly accessible, particularly certificates containing personally identifying information or QR codes.
