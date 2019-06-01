function client(table) {
  table.increments('id').primary();
  table.string('name', 150).notNullable();
  table.timestamps(true, true);
}

function country(table) {
  table.increments('id').primary();
  table.string('name', 150).notNullable();
  table.integer('region_id').unsigned().notNullable();
  table.foreign('region_id').references('id').inTable('region');
  table.timestamps(true, true);
}

function equipment(table) {
  table.increments('id').primary();
  table.string('name', 150).notNullable();
  table.timestamps(true, true);
}

function industry(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.timestamps(true, true);
}

function media(table) {
  table.increments('id').primary();
  table.string('name', 150).notNullable();
  table.string('type', 10).notNullable();
  table.string('url', 250);
  table.integer('model_id').unsigned().notNullable();
  table.foreign('model_id').references('id').inTable('model');
  table.timestamps(true, true);
}

function model(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.integer('equipment_id').unsigned().notNullable();
  table.foreign('equipment_id').references('id').inTable('equipment');
  table.timestamps(true, true);
}

function project(table) {
  table.increments('id').primary();
  table.string('name', 150).notNullable();
  table.float('latitude').notNullable();
  table.float('longitude').notNullable();
  table.string('description', 500);
  table.string('object_name', 250);
  table.string('object_url', 250);
  table.string('pdf_name', 250);
  table.string('pdf_url', 250);
  table.integer('client_id').unsigned().notNullable();
  table.foreign('client_id').references('id').inTable('client');
  table.integer('country_id').unsigned().notNullable();
  table.foreign('country_id').references('id').inTable('country');
  table.integer('industry_id').unsigned().notNullable();
  table.foreign('industry_id').references('id').inTable('industry');
  table.timestamps(true, true);
}

function texture(table) {
  table.increments('id').primary();
  table.string('url', 250);
  table.integer('project_id').unsigned().notNullable();
  table.foreign('project_id').references('id').inTable('project');
}

function project_model(table) {
  table.increments('id').primary();
  table.integer('project_id').unsigned().notNullable();
  table.foreign('project_id').references('id').inTable('project');
  table.integer('model_id').unsigned().notNullable();
  table.foreign('model_id').references('id').inTable('model');
  table.timestamps(true, true);
}

function region(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
  table.timestamps(true, true);
}

function setting(table) {
  table.increments('id').primary();
  table.integer('version').notNullable();
}

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable('client', client),
    knex.schema.createTable('country', country),
    knex.schema.createTable('equipment', equipment),
    knex.schema.createTable('industry', industry),
    knex.schema.createTable('media', media),
    knex.schema.createTable('model', model),
    knex.schema.createTable('project', project),
    knex.schema.createTable('project_model', project_model),
    knex.schema.createTable('region', region),
    knex.schema.createTable('setting', setting),
    knex.schema.createTable('texture', texture),
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.raw('SET foreign_key_checks = 0;'),
    knex.schema.dropTableIfExists('client'),
    knex.schema.dropTableIfExists('country'),
    knex.schema.dropTableIfExists('equipment'),
    knex.schema.dropTableIfExists('industry'),
    knex.schema.dropTableIfExists('media'),
    knex.schema.dropTableIfExists('model'),
    knex.schema.dropTableIfExists('project'),
    knex.schema.dropTableIfExists('project_model'),
    knex.schema.dropTableIfExists('region'),
    knex.schema.dropTableIfExists('setting'),
    knex.schema.dropTableIfExists('texture'),
    knex.raw('SET foreign_key_checks = 1;'),
  ]);
};
