'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import { Pet, PetFormData } from '@/type/pets';
import { petFormSchema } from '@/zod/pet';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { createPet, updatePet } from '@/actions/pet';
import { toast } from 'sonner';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

const PetForm = ({ defaultValue }: { defaultValue: Pet }) => {
    const router = useRouter();
    const form = useForm<PetFormData>({
        resolver: zodResolver(petFormSchema),
        defaultValues: defaultValue ?? {
            name: '',
            type: 'dog',
            hp: 50,
        },
    });

    const onSubmit = async (data: PetFormData) => {
        try {
            if (defaultValue) {
                await updatePet(defaultValue.id, data);
            } else {
                await createPet(data);
                form.reset();
            }
            toast(`ペットが${defaultValue ? '更新' : '作成'}されました！`, {
                description: `${data.name}を追加しました。`,
            });

            router.refresh();
        } catch (error) {
            toast('エラーが発生しました', {
                description: 'ペットの作成に失敗しました。',
            });
            console.error('Error creating pet:', error);
        }
    };
    //react-fook-formの公式ではformStateの中のis~を使用する場合は
    //必ず取り出してから使用してねと書いてある。
    const { isSubmitting } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ペットの名前</FormLabel>
                            <FormControl>
                                <Input autoComplete='off' placeholder='例: ポチ' {...field} />
                            </FormControl>
                            <FormDescription>ペットの名前を入力してください。</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='type'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ペットの種類</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='ペットの種類を選択' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value='dog'>犬</SelectItem>
                                    <SelectItem value='cat'>猫</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>ペットの種類を選択してください。</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='hp'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>HP(体力)</FormLabel>
                            <FormControl>
                                <Input
                                    type='number'
                                    min='0'
                                    max='100'
                                    placeholder='50'
                                    autoComplete='off'
                                    {...field}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            </FormControl>
                            <FormDescription>
                                ペットの体力を0から100の間で入力してください。
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full' disabled={isSubmitting}>
                    {defaultValue ? 'ペットを更新' : 'ペットを追加'}
                </Button>
            </form>
        </Form>
    );
};

export default PetForm;
