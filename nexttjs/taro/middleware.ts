import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

//見せて良いページを許可
const publicRoutes = ['/login', '/register', '/', '/pets'];

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);
    //request.nextUrl.pathnameにどこにアクセスしようとしているのかが入る
    const isPrivateRoute = !publicRoutes.includes(request.nextUrl.pathname);

    //クッキーも無くてログインしていなければ
    if (!sessionCookie && isPrivateRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}
export const config = {
    // githubのイシューで拾ってきたマッチャー
    //API,static,拡張子つきファイル、_nextを除外してすべてのルートにミドルウェアを使用
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
