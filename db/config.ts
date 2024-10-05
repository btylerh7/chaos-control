import { column, defineDb, defineTable } from 'astro:db';

const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text()
  }
});

const Reactions = defineTable({
  columns: {
    postSlug: column.text({ unique: true }),
    emoji: column.text(),
    count: column.number(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Comment,
    Reactions
  }
});
