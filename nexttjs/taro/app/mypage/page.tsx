import UserCard from '@/components/user-card';
import { verifySession } from '@/lib/session';

const Mypage = async () => {
    const session = await verifySession();

    return (
        <div className='container'>
            <h1 className='text-2xl font-bold'>マイページ</h1>
            <UserCard user={session.user} />
        </div>
    );
};
export default Mypage;
