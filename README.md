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

Push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys to Cloudflare Pages.

### Cloudflare Pages setup

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/), go to **Workers & Pages → Create → Pages → Connect to Git** (optional if you use the GitHub Action below) or create an empty project named `airic-site`.
2. Add GitHub repository secrets (**Settings → Secrets and variables → Actions**):
   - `CLOUDFLARE_API_TOKEN` — create a token with **Account → Cloudflare Pages → Edit** permission.
   - `CLOUDFLARE_ACCOUNT_ID` — found on the Cloudflare dashboard overview page.
3. In **Workers & Pages → airic-site → Custom domains**, add `www.airic.dev`.

Build settings (also used if you connect Git directly in Cloudflare instead of the Action):

| Setting        | Value           |
| -------------- | --------------- |
| Framework      | Astro           |
| Build command  | `npm run build` |
| Output dir     | `dist`          |
| Node version   | `22`            |

### DNS (Cloudflare)

If `airic.dev` is on Cloudflare, add the custom domain in Pages and Cloudflare will create the required DNS records automatically.

To redirect the apex `airic.dev` to `www.airic.dev`, add a **Redirect Rule** in the Cloudflare dashboard (**Rules → Redirect Rules**):

- If hostname equals `airic.dev`, redirect to `https://www.airic.dev${uri.path}` (301).

### Manual deploy

One-time login (opens browser):

```bash
npx wrangler login
```

Then deploy from your machine:

```bash
npm run deploy
```

Or step by step:

```bash
npm run build
npx wrangler pages deploy dist --project-name=airic-site
```

Alternatively, set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as environment variables instead of logging in.

## License

MIT
