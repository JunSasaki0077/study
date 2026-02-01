import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PetCard from './pet-card';
import { expect, within } from 'storybook/test';

const meta = {
    component: PetCard,
} satisfies Meta<typeof PetCard>;

export default meta;

type Story = StoryObj<typeof PetCard>;

export const Default: Story = {
    args: {
        pet: {
            id: '1',
            name: 'ポチ',
            type: 'dog',
            hp: 60,
            ownerId: '1',
        },
    },
};

export const 長い名前: Story = {
    args: {
        pet: {
            id: '1',
            name: 'ペット１ペット１ペット１ペット１ペット１ペット１ペット１ペット１ペット１ペット１ペット１ペット１ペット１',
            type: 'dog',
            hp: 60,
            ownerId: '1',
        },
    },
};

export const EmptyHP: Story = {
    args: {
        pet: {
            id: '1',
            name: 'ポチ',
            type: 'dog',
            hp: 0,
            ownerId: '1',
        },
    },
};

export const FullHP: Story = {
    args: {
        pet: {
            id: '1',
            name: 'ポチ',
            type: 'dog',
            hp: 100,
            ownerId: '1',
        },
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);
        await step('ラベルが100/100になっていること', async () => {
            const hp = canvas.getByText('100 / 100');
            expect(hp).toBeVisible();
        });
        await step('HPゲージが緑になっていること', async () => {
            const hpBar = canvas.getByRole('progressbar');
            expect(hpBar).toHaveClass('bg-green-500');
        });
    },
};
