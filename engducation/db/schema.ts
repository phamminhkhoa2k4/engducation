import { relations } from "drizzle-orm";
import { serial, pgTable, text, integer } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("imageSrc").notNull(),
});


export const userProgress = pgTable("user_progress", {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_image_src").notNull().default("/Logo.png"),
  activeCourseId: integer("active_course_id").references(() => courses.id, {
    onDelete: "cascade",
  }),
  hearts: integer("hearts").notNull().default(5),
  points: integer("points").notNull().default(0),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
}));

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse : one(courses ,{ 
    fields : [userProgress.activeCourseId],
    references : [courses.id]
  } )
}))