#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/f8a5c82569b5bc161f9570ec17308304bf95e090eb67b12157270d641b22b44b/contract';
import endContract from '../../snapshots/f8a5c82569b5bc161f9570ec17308304bf95e090eb67b12157270d641b22b44b/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  primaryKey,
  sql,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Service',
        columns: [
          col('content', 'text[]', {
            notNull: true,
            codecRef: { codecId: 'pg/text@1', many: true },
          }),
          col('createdAt', 'timestamptz(3)', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('header', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz(3)', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'Service_content_elem_not_null_1b2eb5ab',
            sql`array_position("content", NULL) IS NULL`,
          ),
        ],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
