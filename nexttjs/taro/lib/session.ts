//サーバー専用の関数は下記のコードを入れる
import 'server-only';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from './auth';

export const verifySession = async () => {
    //Next.jsでgetSessionを使用する際はこの書き方でやる
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/login');
    }

    return session;
};
