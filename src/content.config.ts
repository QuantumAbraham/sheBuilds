import { defineCollection, z } from "astro:content";

const stories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    author: z.string().default("She Builds Editorial Team"),
    featured: z.boolean().default(false)
  })
});

export const collections = { stories };
