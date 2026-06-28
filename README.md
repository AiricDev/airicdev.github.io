# Airic Site

Marketing site and documentation for [Airic](https://www.airic.dev) — an open-source methodology runtime for document-defined agents.

Built with [Astro 7](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Development

```bash
npm install
npm run dev
```

- `/` — marketing landing page (ported from the Lovable prototype)
- `/docs/` — Starlight documentation

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/landing/   # Marketing page sections
  content/docs/docs/  # Starlight docs (mounted at /docs/)
  layouts/            # MarketingLayout.astro
  pages/index.astro   # Landing page
  styles/             # Tailwind tokens + Starlight overrides
airic-icon-pack/      # Source logo/icon raster assets
public/               # Favicons, OG image, web manifest
```

## Deployment

Production site: **https://www.airic.dev**

Push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### GitHub Pages setup

1. Repository **Settings → Pages → Build and deployment**: set Source to **GitHub Actions**.
2. **Settings → Pages → Custom domain**: enter `www.airic.dev` and save.
3. Wait for DNS check to pass, then enable **Enforce HTTPS**.

### DNS (at your domain registrar)

Point `www.airic.dev` to GitHub Pages:

| Type  | Name | Value              |
| ----- | ---- | ------------------ |
| CNAME | www  | `airicdev.github.io` |

If you also want the apex `airic.dev` to redirect to `www`, configure that at your DNS provider (GitHub Pages does not serve apex CNAME directly; use your registrar's redirect or ALIAS/ANAME records).

The workflow ships `public/CNAME` so GitHub Pages keeps the custom domain across deploys.

## License

MIT
