import { User } from '@/type/user';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserCard = ({ user }: { user: User }) => {
    return (
        <div>
            <div>
                <Avatar>
                    <AvatarImage
                        src='https://github.com/shadcn.png'
                        alt='@shadcn'
                        className='grayscale'
                    />
                </Avatar>
                <Avatar>
                    <AvatarImage src='https://github.com/evilrabbit.png' alt='@evilrabbit' />
                    <AvatarFallback>ER</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
        </div>
    );
};
export default UserCard;
