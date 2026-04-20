# She Builds

She Builds is a polished Astro website for a women-in-tech university community at TUM University. It is designed as a mix of community movement site, event showcase, story hub, and partner-friendly initiative page.

## Stack

- Astro static site
- Markdown content collection for stories
- TypeScript configuration
- CSS custom properties and reusable components
- GitHub Pages deployment workflow

## Local development

Prerequisites:
- Node.js 20+
- npm 10+

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run Astro checks:

```bash
npm run check
```

## Project structure

```text
src/
  components/        Reusable UI pieces
  content/stories/   Markdown stories and blog posts
  data/              Editable event, partner, spotlight, and site data
  layouts/           Shared page layout
  pages/             Route files
  styles/            Global design tokens and base styles
public/
  logos/             Placeholder partner logo assets
  favicon.svg        Site favicon
  og-default.svg     Default social image
.github/workflows/
  deploy.yml         GitHub Pages deployment workflow
```

## Editing content later

### Update events

Edit [`src/data/events.ts`](/Users/abrahamcharles/sheBuilds/src/data/events.ts).

Each event entry includes:
- `title`
- `summary`
- `date`
- `time`
- `location`
- `category`
- `lumaUrl`
- `featured`

Set one event to `featured: true` to highlight it on the homepage and events page.

### Update stories

Add or edit markdown files in [`src/content/stories`](/Users/abrahamcharles/sheBuilds/src/content/stories).

Each story supports:
- `title`
- `excerpt`
- `pubDate`
- `readTime`
- `tags`
- `author`
- `featured`

### Update community spotlights

Edit [`src/data/spotlights.ts`](/Users/abrahamcharles/sheBuilds/src/data/spotlights.ts).

### Update partner and sponsor content

Edit [`src/data/partners.ts`](/Users/abrahamcharles/sheBuilds/src/data/partners.ts).

### Update site-wide navigation, social links, and metadata

Edit [`src/data/site.ts`](/Users/abrahamcharles/sheBuilds/src/data/site.ts).

## GitHub Pages deployment

This repo includes a Pages workflow at [deploy.yml](/Users/abrahamcharles/sheBuilds/.github/workflows/deploy.yml).

### One-time setup

1. Push the repo to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Ensure your default branch is `main`, or update the workflow trigger if you use another branch.

### How base path handling works

The Astro config automatically supports repository deployments by reading:
- `PUBLIC_SITE_URL`
- `PUBLIC_BASE_PATH`

The included GitHub Actions workflow sets these automatically to the repository owner domain and repository name.

Examples:
- Repo site: `https://your-username.github.io/sheBuilds/`
- Custom domain: set `PUBLIC_SITE_URL` to your domain and adjust or clear `PUBLIC_BASE_PATH`

## Notes for maintainers

- Internal links use Astro's base URL helper so repository deployments work correctly.
- The site is fully static and GitHub Pages friendly.
- The contact form is intentionally placeholder-only for static hosting. Replace it with a form provider later if needed.
- Sample content is included across every page and can be replaced incrementally.

## Suggested next steps

1. Replace placeholder emails and social handles.
2. Swap partner logo SVGs with real brand assets if available.
3. Add real TUM event dates and registration links.
4. Optionally add a custom domain and update metadata values.
