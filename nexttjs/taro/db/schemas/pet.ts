import { integer, pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { users } from './auth';
import { nanoid } from 'nanoid';
import { relations } from 'drizzle-orm';

export const petTypeEnum = pgEnum('pet_type', ['dog', 'cat']);

export const pets = pgTable('pets', {
    id: text('id')
        //いちばん大事な値ですよ
        .primaryKey()
        //nanoidを使ってペットごとに独自のIDを使っていきますよ
        .$defaultFn(() => nanoid(10)),
    name: text('name').notNull(),
    type: petTypeEnum('pet_type').notNull(),
    hp: integer('hp').notNull().default(100),
    ownerId: text('owner_id')
        .notNull()
        //誰かしらのUserのIDが入り、そのIDが消えたらペットも消える
        .references(() => users.id, { onDelete: 'cascade' }),
});

//relationsは関係性という意味、oneは必ず1人をしていすること
export const petRelations = relations(pets, ({ one }) => ({
    owner: one(users, {
        fields: [pets.ownerId],
        references: [users.id],
    }),
}));
