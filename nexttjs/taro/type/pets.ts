import { pets } from '@/db/schemas/pet';
import { petFormSchema } from '@/zod/pet';
import z from 'zod';

//petスキーマに基づいてペットの構造を型にしてくれてる
export type Pet = typeof pets.$inferSelect;
export type PetType = Pet['type'];
export type PetFormData = z.infer<typeof petFormSchema>;
