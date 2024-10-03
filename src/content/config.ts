import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		author: z.string(),
		image: z.string(),
		tags: z.array(z.string()),
		published: z.boolean(),
	})
});

export const collections = {
	'blog': blogCollection,
};
