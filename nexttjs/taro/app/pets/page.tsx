import PetCard from '@/components/pet-card';
import { Pet } from '@/type/pets';

const PetsPage = () => {
    const mockPets: Pet[] = [
        {
            id: '1',
            name: 'ポチ',
            type: 'dog',
            hp: 50,
            ownerId: '1',
        },
        {
            id: '2',
            name: 'みみ',
            type: 'cat',
            hp: 75,
            ownerId: '1',
        },
        {
            id: '3',
            name: 'しろ',
            type: 'dog',
            hp: 100,
            ownerId: '1',
        },
    ];
    return (
        <div className='container py-10'>
            <h1 className='text-2xl font-bold mb-6'>ペット一覧</h1>
            <div className='grid grid-cols-3 gap-4'>
                {mockPets.map((pet) => (
                    <div key={pet.id}>
                        <PetCard pet={pet} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PetsPage;
