import PetForm from '@/components/pet-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '新規ペット登録',
};

const NewPage = () => {
    return (
        <div className='container py-10'>
            <PetForm />
        </div>
    );
};

export default NewPage;
