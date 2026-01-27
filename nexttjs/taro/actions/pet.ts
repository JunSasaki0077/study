// actionは必ずuse serverをつける
'use server';

import { db } from '@/db';
import { pets } from '@/db/schemas/pet';
import { verifySession } from '@/lib/session';
import { PetFormData } from '@/type/pets';
import { petFormSchema } from '@/zod/pet';
import { and, eq } from 'drizzle-orm';

export const createPet = async (formData: PetFormData) => {
    //サーバー側でもzodの検証をする。
    const data = petFormSchema.parse(formData);
    //ここでもう一度ログインしているかの確認
    const session = await verifySession();
    //ログインしているuserのidを取得
    const ownerId = session.user.id;

    await db.insert(pets).values({ ...data, ownerId });
};

export const updatePet = async (id: string, formData: PetFormData) => {
    const data = petFormSchema.parse(formData);
    const session = await verifySession();
    const ownerId = session.user.id;

    await db
        .update(pets)
        .set({ ...data, ownerId })
        //andを用いることでpetのidとオーナーidが一致した時だけ更新を行える
        .where(and(eq(pets.id, id), eq(pets.ownerId, ownerId)));
};

export const deletePet = async (id: string) => {
    const session = await verifySession();
    const ownerId = session.user.id;

    await db.delete(pets).where(and(eq(pets.id, id), eq(pets.ownerId, ownerId)));
};
