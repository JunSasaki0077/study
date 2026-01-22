import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-gray-50 border-t border-gray-200 py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-0 gap-2.54'>
                    <Link
                        href='/mypage'
                        className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'
                    >
                        マイページ
                    </Link>
                    <Link
                        href='/credit'
                        className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'
                    >
                        クレジット
                    </Link>
                    <Link
                        href='/pets'
                        className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'
                    >
                        ペット一覧
                    </Link>
                </div>
                <div className='mt-4 text-center'>
                    <p className='text-sm text-gray-500'>© 2026 Taro App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
