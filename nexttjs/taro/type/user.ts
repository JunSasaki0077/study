import { authClient } from '@/lib/auth-client';

//Inferは認証ライブラリが用意している型専用プロパティ
export type User = (typeof authClient.$Infer.Session)['user'];
