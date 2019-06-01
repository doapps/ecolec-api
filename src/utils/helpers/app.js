/* eslint-disable no-console */

function onListening(server) {
  return () => {
    const addr = server.address();
    const bind = `${addr.address}:${addr.port}`;
    console.log(`Listening on ${bind}`);
  };
}

function onError(server) {
  return (e) => {
    if (e.code === 'EADDRINUSE') {
      const bind = `${e.address}:${e.port}`;
      console.error(`${bind} is already in use`);

      setTimeout(() => {
        server.close();
        server.listen(e.port + 1, e.address);
      }, 1000);
    }
  };
}

module.exports = {
  onListening,
  onError,
};
