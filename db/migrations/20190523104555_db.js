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
  table.double('latitud');
  table.double('longitud');
}

function publicacion(table) {
  table.increments('id').primary();
  table.double('latitud_ciudadano');
  table.double('longitud_ciudadano');
  table.boolean('estado');
  table.double('latitud_recolector');
  table.double('longitud_recolector');
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
