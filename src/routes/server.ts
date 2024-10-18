import { Application } from "express";
import morgan from "morgan";
import Routes from "./routes";

class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application) {
    app.use(morgan("tiny"));
  }
}

export default Server;
