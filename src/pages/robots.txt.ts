import type { APIRoute } from "astro";

const site = import.meta.env.PUBLIC_SITE_URL ?? "https://example.github.io";
const base = import.meta.env.BASE_URL ?? "/";

export const GET: APIRoute = () => {
  const sitemapUrl = new URL(`${base}sitemap-index.xml`, site).toString();
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
