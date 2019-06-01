const ciudadanos = [
  {
    id: 1,
    nombres: 'Jose Luis',
    apellidos: 'Duran Zarate',
    email: 'jooose1204@gmail.com',
    password: '123456',
  },
  {
    id: 2,
    nombres: 'Leonardo',
    apellidos: 'Cardenas',
    email: 'leoc@gmail.com',
    password: '123456',
  },
  {
    id: 3,
    nombres: 'Jhona',
    apellidos: 'Alca Cabanillas',
    email: 'jhona@gmail.com',
    password: '123456',
  },
  {
    id: 4,
    nombres: 'William Daniel',
    apellidos: 'Nolasco Rios',
    email: 'wdaniel@gmail.com',
    password: '123456',
  },
  {
    id: 5,
    nombres: 'Roberto Jesus',
    apellidos: 'Castillo Gomez',
    email: 'rjesus@gmail.com',
    password: '123456',
  },
  {
    id: 6,
    nombres: 'David Frank',
    apellidos: 'Rios',
    email: 'davidrios@gmail.com',
    password: '123456',
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
    foto: 'https://amyts.es/wp-content/uploads/2015/03/117-Daniel-Bernabeu-3x3-cm.jpg',
  },
  {
    id: 2,
    nombres: 'Axl William',
    apellidos: 'Rose',
    email: 'axl@gmail.com',
    password: '123456',
    dni: '75934728',
    latitud: -12.132628,
    longitud: -77.021221,
    foto: 'https://imgredirect.milanuncios.com/fg/2948/90/294890291_1.jpg',
  },
  {
    id: 3,
    nombres: 'Cesar Alonso',
    apellidos: 'Peña Torres',
    email: 'calonso@gmail.com',
    password: '123456',
    dni: '74895025',
    latitud: -12.130449,
    longitud: -77.015806,
    foto: 'https://fotos02.diarioinformacion.com/2012/10/06/318x200/2012-10-06_IMG_2012-10-06_20:20:17_jellobuena.jpg',
  },
  {
    id: 4,
    nombres: 'Hilario Hilarin',
    apellidos: 'Gomez Torres',
    email: 'hilarioh@gmail.com',
    password: '123456',
    dni: '74829450',
    latitud: -12.129263,
    longitud: -77.023792,
    foto: 'https://eduardofeinmann.com/wp-content/uploads/2019/05/FOTO-EDITORIAL-2.jpeg',
  },
  {
    id: 5,
    nombres: 'John Holberg',
    apellidos: 'Wakefield Santana',
    email: 'johnh@gmail.com',
    password: '123456',
    dni: '72038948',
    latitud: -12.142301,
    longitud: -77.009485,
    foto: 'http://laopcion.com.mx/assets/2014/october/04/tCQGywrKNx.jpg',
  },
  {
    id: 6,
    nombres: 'Michael Kate',
    apellidos: 'Dotson Quispe',
    email: 'michaelk@gmail.com',
    password: '123456',
    dni: '73913058',
    latitud: -12.139384,
    longitud: -77.023649,
    foto: 'http://nuestropartidoescolombia.info/wp-content/uploads/2017/09/Ricardo-Villa-Sanchez1.jpg',
  },
  {
    id: 7,
    nombres: 'Folco',
    apellidos: 'Santillán Barrientos',
    email: 'folcos@gmail.com',
    password: '123456',
    dni: '73093811',
    latitud: -12.117550,
    longitud: -77.014317,
    foto: 'https://pbs.twimg.com/profile_images/595541963341955072/kCfOzLZb_400x400.jpg',
  },
  {
    id: 8,
    nombres: 'Aurea',
    apellidos: 'Jasso Juárez',
    email: 'aureajasso@gmail.com',
    password: '123456',
    dni: '79823156',
    latitud: -12.135079,
    longitud: -77.028914,
    foto: 'https://0.academia-photos.com/3289/1394/358586/s200_jacques.bulchand-gidumal.jpg',
  },
  {
    id: 9,
    nombres: 'Alueche',
    apellidos: 'Abeyta Coronado',
    email: 'aluecehe@gmail.com',
    password: '123456',
    dni: '72934094',
    latitud: -12.131371,
    longitud: -77.025883,
    foto: 'http://4.bp.blogspot.com/-5EqsypnXpy0/T-9vOY75ggI/AAAAAAAAAH8/axYIuQIuyGs/s320/danilo-medina1.jpg',
  },
  {
    id: 10,
    nombres: 'Odina',
    apellidos: 'Briseño Galvez',
    email: 'odinab@gmail.com',
    password: '123456',
    dni: '75089126',
    latitud: -12.149635,
    longitud: -77.021160,
    foto: 'http://juntapantoja.weebly.com/uploads/6/5/2/2/6522439/2146691.jpg',
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

const publicaciones = [
  {
    id: 1,
    latitud_ciudadano: -12.133635,
    longitud_ciudadano: -77.015622,
    estado: 1,
    latitud_recolector: null,
    longitud_recolector: null,
    papel: 0,
    vidrio: 0,
    plastico: 1,
    metal: 0,
    foto_basura: 'https://www.ecoticias.com/userfiles/extra/HCIM_petreciclado_plasticos.jpg',
    recolector_id: null,
    ciudadano_id: 2,
  },
  {
    id: 2,
    latitud_ciudadano: -12.133974,
    longitud_ciudadano: -77.011745,
    estado: 1,
    latitud_recolector: null,
    longitud_recolector: null,
    papel: 1,
    vidrio: 0,
    plastico: 0,
    metal: 0,
    foto_basura: 'http://diarioabc.mx/noticias/wp-content/uploads/2015/06/RECICLAJE-PAPEL.jpg',
    recolector_id: null,
    ciudadano_id: 4,
  },
  {
    id: 3,
    latitud_ciudadano: -12.134470,
    longitud_ciudadano: -77.009677,
    estado: 1,
    latitud_recolector: null,
    longitud_recolector: null,
    papel: 0,
    vidrio: 1,
    plastico: 0,
    metal: 0,
    foto_basura: 'https://blog.oxfamintermon.org/wp-content/uploads/2016/09/reciclar-vidrio-1-726x484.jpg',
    recolector_id: null,
    ciudadano_id: 6,
  },
  {
    id: 4,
    latitud_ciudadano: -12.135223,
    longitud_ciudadano: -77.007349,
    estado: 1,
    latitud_recolector: null,
    longitud_recolector: null,
    papel: 0,
    vidrio: 0,
    plastico: 0,
    metal: 1,
    foto_basura: 'https://blog.seccionamarilla.com.mx/wp-content/uploads/2017/09/reciclaje-de-metales-2-770x578.jpg',
    recolector_id: null,
    ciudadano_id: 7,
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
  await knex('publicacion').insert(publicaciones);
};
