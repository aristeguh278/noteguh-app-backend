const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const notes = require("./notes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
        credentials: true,
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(notes);
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
