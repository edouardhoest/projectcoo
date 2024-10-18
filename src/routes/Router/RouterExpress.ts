import characterRoutes from "routes/Routes/Express/character.routes";
import Router from "../Router";
import ExpressServer from "routes/Server/ExpressServer";

class RouterExpress implements Router<ExpressServer> {
  constructor(server: ExpressServer) {
    this.init(server)
  }

  init(server: ExpressServer): void {
    server.app.use("/character", characterRoutes);
  }
}

export default RouterExpress;
