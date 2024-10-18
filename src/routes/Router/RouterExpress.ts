import Router from "../Router";
import ExpressServer from "routes/Server/ExpressServer";
import characterRoutes from "./character.routes";

class RouterExpress implements Router<ExpressServer> {
  constructor(server: ExpressServer) {
    this.init(server)
  }

  init(server: ExpressServer): void {
    server.app.use("/character", characterRoutes);
  }
}

export default RouterExpress;
