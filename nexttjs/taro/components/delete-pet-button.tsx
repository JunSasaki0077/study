'use client';

import { deletePet } from '@/actions/pet';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const DeletePetButton = ({ petId }: { petId: string }) => {
    const router = useRouter();

    return (
        <Button
            variant='destructive'
            onClick={() => {
                deletePet(petId);
                router.refresh();
            }}
        >
            ペットを削除
        </Button>
    );
};

export default DeletePetButton;
