import { defineAction } from "astro:actions";
import { z } from "astro:content";
import { db, Reactions } from "astro:db";

export const server = {
	emojiReact: defineAction({
		input: z.object({
			postSlug: z.string(),
			emoji: z.string(),
			startingCount: z.number()
		}),
		handler: async (input) => {
			const count = input.startingCount + 1
			return await db
				.insert(Reactions)
				.values({ postSlug: input.postSlug, emoji: input.emoji, count })
				.onConflictDoUpdate({ target: Reactions.postSlug, set: { count: count } })
				.returning({ count: Reactions.count })


		}
	})
}
