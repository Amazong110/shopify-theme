# Shopify theme — Dawn with a Tailwind CSS pipeline

A Shopify Online Store 2.0 theme based on Dawn (15.3.0), with a Tailwind CSS v4 build pipeline added so sections and blocks can be styled quickly without hand-writing CSS for every tweak.

## What's in here

- **Dawn** base theme — 57 sections, JSON templates, sections-everywhere, cart drawer, predictive search
- **Tailwind CSS v4 + PostCSS** — source at `src/styles/tailwind.css`, compiled to `assets/tailwind.css`
- Theme files synced from the Shopify admin (see the latest commits)

## Getting started

```sh
npm install

npm run build:css   # compile Tailwind once → assets/tailwind.css
npm run watch:css   # rebuild on change
npm run dev         # watch CSS + `shopify theme dev` (needs the Shopify CLI)
npm run build       # compile CSS + `shopify theme build`
```

The `dev` and `build` scripts expect the [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli) to be installed and authenticated (`shopify auth login`). To preview against a development store:

```sh
shopify theme dev --store your-store.myshopify.com
```

## Customising

| Task | Where |
|---|---|
| Add or edit sections | `sections/*.liquid` + `templates/*.json` |
| Global styles | `assets/base.css`, plus Tailwind utilities compiled into `assets/tailwind.css` |
| Theme settings | `config/settings_schema.json` |
| Translations | `locales/*.json` |

---

Built by **Cody Wang**, front-end engineer. I build and optimise Shopify, Prismic and Next.js storefronts and sites. Website: [prismicaudit.com](https://prismicaudit.com)
