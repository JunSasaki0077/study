import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import coverImage from './login-form-cover.png';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className='overflow-hidden p-0'>
                <CardContent className='grid p-0 md:grid-cols-2'>
                    <div className='p-6 md:p-8'>
                        <div className='flex flex-col items-center gap-2 text-center'>
                            <h1 className='text-2xl font-bold'>ようこそ</h1>
                            <p className='text-muted-foreground text-balance'>
                                ゲストとしてログインしてください
                            </p>
                        </div>

                        <Button type='submit' className='w-full mt-4' size='lg'>
                            ゲストでログイン
                        </Button>
                    </div>
                    <div className='bg-muted relative hidden md:block'>
                        <Image
                            src={coverImage}
                            alt='login-form-cover'
                            //画像が重たい場合読み込んでいる間ぼやけて表示してくれる
                            placeholder='blur'
                            className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
