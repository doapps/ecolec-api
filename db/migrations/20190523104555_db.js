function ciudadano(table) {
  table.increments('id').primary();
  table.string('nombres', 150).notNullable();
  table.string('apellidos', 150).notNullable();
  table.string('email', 150).unique();
  table.string('password', 200).notNullable();
}

function recolector(table) {
  table.increments('id').primary();
  table.string('nombres', 150).notNullable();
  table.string('apellidos', 150).notNullable();
  table.string('email', 150).unique();
  table.string('password', 200).notNullable();
  table.string('dni', 10).notNullable();
  table.string('foto', 250);
  table.float('latitud');
  table.float('longitud');
}

function publicacion(table) {
  table.increments('id').primary();
  table.float('latitud_ciudadano');
  table.float('longitud_ciudadano');
  table.boolean('estado');
  table.float('latitud_recolector');
  table.float('longitud_recolector');
  table.boolean('papel').defaultTo(false);
  table.boolean('vidrio').defaultTo(false);
  table.boolean('plastico').defaultTo(false);
  table.boolean('metal').defaultTo(false);
  table.string('foto_basura');
  table.integer('recolector_id');
  table.integer('ciudadano_id').unsigned().notNullable();
  table.foreign('ciudadano_id').references('id').inTable('ciudadano');
  table.timestamps(true, true);
}

function categoria(table) {
  table.increments('id').primary();
  table.string('name', 50).notNullable();
}

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable('ciudadano', ciudadano),
    knex.schema.createTable('recolector', recolector),
    knex.schema.createTable('categoria', categoria),
    knex.schema.createTable('publicacion', publicacion),
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.raw('SET foreign_key_checks = 0;'),
    knex.schema.dropTableIfExists('ciudadano'),
    knex.schema.dropTableIfExists('recolector'),
    knex.schema.dropTableIfExists('categoria'),
    knex.schema.dropTableIfExists('publicacion'),
    knex.raw('SET foreign_key_checks = 1;'),
  ]);
};
