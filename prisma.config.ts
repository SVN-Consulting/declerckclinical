import 'dotenv/config';
import { definePrismaConfig } from '@prisma/cli-engine';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';

export default definePrismaConfig({
  orm: ormConfig({
    contract: './prisma/contract.prisma',
    db: {
      connection: process.env['DATABASE_URL']!,
    },
  }),
});

// workflow
/**
 * 1. Update contract.prisma with new schema changes
 * 2. Run `yarn db:emit` to generate the contract
 * 3. Run `yarn db:plan --name add_new_feature` to create a new migration, will be placed under migrations/app/
 * 4. Run `yarn db:migrate` to apply the migration
 * 5. Run `yarn db:verify` to verify the database
 * 6. Run `yarn db:status` to check the status of the database
 */
