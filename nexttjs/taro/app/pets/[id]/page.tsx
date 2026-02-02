import DeletePetButton from '@/components/delete-pet-button';
import PetCard from '@/components/pet-card';
import PetForm from '@/components/pet-form';
import { getPet } from '@/data/pet';
import { redirect } from 'next/navigation';

const PetPage = async ({ params }: PageProps<'/pets/[id]'>) => {
    const petId = (await params).id;
    const pet = await getPet(petId);

    if (!pet) {
        redirect('/pets');
    }
    return (
        <div className='container py-10 '>
            <PetCard pet={pet} />
            <PetForm defaultValue={pet} />

            <DeletePetButton petId={pet.id} />
        </div>
    );
};

export default PetPage;
