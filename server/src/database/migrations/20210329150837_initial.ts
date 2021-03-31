import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('helpRequests', (table) => {
            table.increments('id').primary();
            table.string('email', 200).notNullable();
            table.string('name', 100).notNullable();
            table.string('title', 100).notNullable();
            table.string('description', 500);
            table.string('token', 50).notNullable();
            table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
        })
        .createTable('helpOffers', (table) => {
            table.increments('id').primary();
            table.string('email', 200).notNullable();
            table.string('name', 100).notNullable();
            table.string('title', 100).notNullable();
            table.string('description', 500);
            table.string('token', 50).notNullable();
            table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('helpRequests').dropTable('helpOffers');
}
