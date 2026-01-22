import { Pet } from '@/type/pets';
import { Card, CardContent } from './ui/card';

const PetCard = ({ pet }: { pet: Pet }) => {
    return (
        <Card>
            <CardContent>
                <h1 className='text-lg font-bold'>{pet.name}</h1>
                <p className='text-muted-foreground text-sm break-all'>{pet.type}</p>
                <p className='text-muted-foreground text-sm break-all'>{pet.hp}</p>
            </CardContent>
        </Card>
    );
};
export default PetCard;
