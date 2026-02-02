import { Pet } from '@/type/pets';
import { Card, CardContent, CardFooter } from './ui/card';
import { PetType } from '@/type/pets';
import { Button } from './ui/button';
import Link from 'next/link';

const PetCard = ({ pet }: { pet: Pet }) => {
    const maxHp = 100;
    const hpPercentage = (pet.hp / maxHp) * 100;

    const getHpColor = (percentage: number) => {
        if (percentage >= 70) return 'bg-green-500';
        if (percentage >= 40) return 'bg-yellow-500';
        if (percentage >= 20) return 'bg-orange-500';
        return 'bg-red-500';
    };

    const getPetTypeLabel = (type: PetType) => {
        const typeMap: Record<PetType, string> = {
            dog: '犬',
            cat: '猫',
        };
        return typeMap[type] || type;
    };

    return (
        <Card>
            <CardContent className='p-4'>
                <h1 className='text-lg font-bold mb-2'>{pet.name}</h1>
                <p className='text-muted-foreground text-sm mb-3 break-all'>
                    {getPetTypeLabel(pet.type)}
                </p>
                <div className='space-y-1'>
                    <div className='flex justify-between text-sm'>
                        <span className='text-muted-foreground'>HP</span>
                        <span className='font-medium'>
                            {pet.hp} / {maxHp}
                        </span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div
                            role='progressbar'
                            className={`h-2 rounded-full transition-all duration-300 ${getHpColor(
                                hpPercentage,
                            )} `}
                            style={{ width: `${Math.max(0, Math.min(100, hpPercentage))}%` }}
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href={`/pets/${pet.id}`}>編集</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};
export default PetCard;
