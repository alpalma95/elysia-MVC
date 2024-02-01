import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const UserSchema = sqliteTable('users', {
    id: integer('id', {mode: 'number'}).primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    surname: text('surname'),
    role: text('role', {enum: ['admin', 'friend', 'family', 'pet']})
})

export type User = typeof UserSchema.$inferSelect