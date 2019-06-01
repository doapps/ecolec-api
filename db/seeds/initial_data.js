const ciudadanos = [
  {
    id: 1,
    nombres: 'Jose Luis',
    apellidos: 'Duran Zarate',
    email: 'jooose1204@gmail.com',
    password: '1234567',
  },
  {
    id: 2,
    nombres: 'Leonardo',
    apellidos: 'Cardenas',
    email: 'leoc@gmail.com',
    password: 'abcdef',
  },
];

const recolector = [
  {
    id: 1,
    nombres: 'Nicolas',
    apellidos: 'Madrid',
    email: 'nico@gmail.com',
    password: 'nico123',
    dni: '75089125',
    latitud: -12.135173,
    longitud: -77.022147,
    foto: 'img/1.jpg',
  },
];

const categorias = [
  {
    id: 1,
    name: 'Papel/Cartón/Tetrapack',
  },
  {
    id: 2,
    name: 'Vidrio',
  },
  {
    id: 3,
    name: 'Plástico',
  },
  {
    id: 4,
    name: 'Metal',
  },
];


exports.seed = async (knex) => {
  await knex.raw('SET @@SESSION.foreign_key_checks = 0;');
  await knex('ciudadano').del();
  await knex('recolector').del();
  await knex('categoria').del();
  await knex('publicacion').del();
  await knex('publicacion_categoria').del();

  await knex.raw('SET @@SESSION.foreign_key_checks = 1;');
  await knex('ciudadano').insert(ciudadanos);
  await knex('recolector').insert(recolector);
  await knex('categoria').insert(categorias);
};
