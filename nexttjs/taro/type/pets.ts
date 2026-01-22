import { pets } from '@/db/schemas/pet';

//petスキーマに基づいてペットの構造を型にしてくれてる
export type Pet = typeof pets.$inferSelect;
