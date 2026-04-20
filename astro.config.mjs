import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const [repositoryOwner = "example", repositoryName = "sheBuilds"] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];

const site =
  process.env.PUBLIC_SITE_URL ?? `https://${repositoryOwner}.github.io`;
const base =
  process.env.PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === "true" ? `/${repositoryName}` : "/");

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "rose-pine-dawn",
      wrap: true
    }
  }
});
