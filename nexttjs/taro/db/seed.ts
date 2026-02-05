import 'dotenv/config';
import { seed } from 'drizzle-seed';
import { db } from '.';
import { users } from './schemas/auth';
import { pets } from './schemas/pet';

async function main() {
    await seed(db, { users, pets }).refine((f) => ({
        pets: {
            count: 100,
            columns: {
                hp: f.int({
                    minValue: 0,
                    maxValue: 100,
                }),
            },
        },
    }));

    process.exit(0);
}

main();
