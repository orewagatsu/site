import { pgTable, serial, text, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const blogPostsTable = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  enTitle: varchar("en_title", { length: 500 }).notNull(),
  enExcerpt: text("en_excerpt").notNull().default(""),
  enContent: text("en_content").notNull().default(""),
  enCategory: varchar("en_category", { length: 100 }).notNull().default("General"),
  jaTitle: varchar("ja_title", { length: 500 }),
  jaExcerpt: text("ja_excerpt"),
  jaContent: text("ja_content"),
  imageUrl: varchar("image_url", { length: 500 }).default(""),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertBlogPostSchema = createInsertSchema(blogPostsTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPostsTable.$inferSelect;
