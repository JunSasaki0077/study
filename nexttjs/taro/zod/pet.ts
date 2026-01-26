import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';
import { pets, petType } from '@/db/schemas/pet';

export const petFormSchema = createInsertSchema(pets, {
    hp: z
        .number()
        .min(0, 'HPは0から100の間で入力してください')
        .max(100, 'HPは0から100の間で入力してください'),
    //trimは空白を削ることができる、このおかげで空白だけの名前を防ぐ
    name: z.string().trim().min(1, '名前は1文字以上で入力してください'),
    type: z.enum(petType),
}).omit({
    // omitを用いることでownerIdを除外することができる。
    //除外する理由としてpetのフォームを作る際にオーナーを指定できると、petのオーナーが盗まれる為
    ownerId: true,
});
