import Router from "../Router";
import ServerExpress from "routes/Server/ServerExpress";
import characterRoutes from "../Routes/Express/character.routes";

class RouterExpress implements Router<ServerExpress> {
  constructor(server: ServerExpress) {
    this.init(server);
  }

  init(server: ServerExpress): void {
    server.app.use("/character", characterRoutes);
  }
}

export default RouterExpress;
