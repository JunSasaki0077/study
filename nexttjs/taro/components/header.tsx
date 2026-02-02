'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { LogOut, PawPrint, User } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const handleLogout = async () => {
        try {
            await authClient.signOut();
            router.push('/login');
        } catch (error) {
            console.error('ログアウトエラー:', error);
        }
    };
    return (
        <header className='stickey top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
            <div className='container flex h-16 items-center justify-between'>
                <Link href='/' className='flex items-center space-x-2'>
                    <div className='h-8 w-8 rounded bg-primary flex items-center justify-center'>
                        <span className='text-primary-foreground font bold text-lg'>T</span>
                    </div>
                    <span className='font-bold text-xl'></span>
                </Link>

                <nav className='flex items-center space-x-4'>
                    <Button className='flex items-center space-x-4' asChild>
                        <Link href='/pets' className='flex items-center space-x-2'>
                            <PawPrint className='h-4 w-4' />
                            <span>ペット一覧</span>
                        </Link>
                    </Button>
                    {session?.user && (
                        <>
                            <Button className='flex items-center space-x-4' asChild>
                                <Link href='/mypage' className='flex items-center space-x-2'>
                                    <User className='h-4 w-4' />
                                    <p>マイページ</p>
                                </Link>
                            </Button>
                            <Button
                                variant='ghost'
                                onClick={handleLogout}
                                className='flex items-center space-x-2'
                            >
                                <LogOut className='h-4 w-4' />
                                <span>ログアウト</span>
                            </Button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};
export default Header;
