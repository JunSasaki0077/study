import Link from 'next/link';
import { Button } from './ui/button';
import { User } from 'lucide-react';

const Header = () => {
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
                        <Link href='/mypage' className='flex items-center space-x-2'>
                            <User className='h-4 w-4' />
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
};
export default Header;
