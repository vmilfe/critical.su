import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const posts = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "src/content/posts" }),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        warningText: z.string().optional(),
        createDate: z.date().optional(),
        postTitle: z.string().optional(),
        clickable: z.boolean().default(true),
        blureBackground: z.boolean().default(false)
    })
});

export const collections = {
  posts
};