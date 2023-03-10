require('dotenv').config();
const Hapi = require('@hapi/hapi');

const albums = require('./api/album');
const AlbumsService = require('./services/postgres/AlbumsService');
const AlbumsValidator = require('./validator/albums')

const songs = require('./api/songs');
const SongsService = require('./services/postgres/SongsService');  
const SongsValidator = require('./validator/songs');



const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  }, );

  await server.register([{
    plugin: songs,
    options: {
      service: new SongsService(),
      validator: SongsValidator,
    },
  },
  {
    plugin: albums,
    options: {
      service: new AlbumsService(),
      validator: AlbumsValidator, 
    },
  },
], );

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
