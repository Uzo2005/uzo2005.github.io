import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  subTitle: z.string(),
  pubDate: z.coerce.date(),
  lastModified: z.coerce.date().optional(),
  categories: z.array(z.string()).optional(),
});

const articleSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  lastModified: z.coerce.date().optional(),
});
const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});
const article = defineCollection({
  type: "content",
  schema: articleSchema,
});

export const collections = {
  blog: blog,
  article: article,
};
