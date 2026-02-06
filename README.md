# Renewal Strategy Consulting LLC — Website

A professional, fast, and free-to-host static website for a Customer Success / Renewal Strategy consulting business.

## Quick start (local)
Just open `index.html` in your browser, or run a simple server:

```bash
python -m http.server 8080
# then visit http://localhost:8080
```

## Deploy to GitHub Pages (free)
1. Create a new GitHub repo (e.g. `renewal-strategy-consulting`).
2. Upload these files to the repo root (or push via git).
3. In GitHub: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Your site will be live at the GitHub Pages URL.

## Customize key items
- Logo: `assets/img/logo.svg` (replace if desired)
- Favicon: `assets/img/favicon.svg`
- Contact email + Calendly link: in `index.html` under `#contact`
- Form: connect Formspree by adding your endpoint URL to the form `action=""`.

## Notes
- Bootstrap 5 via CDN
- Google Font: Inter via CDN
- Custom CSS: `assets/css/styles.css`
