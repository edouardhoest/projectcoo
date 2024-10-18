import { Application } from "express";
import Server from "../server"
import express from "express"
import morgan from "morgan";
import Routes from "../routes";

class ExpressServer implements Server {
  private port: Number;
  private app: Application;

  constructor(port: Number) {
    this.port = port;
    this.app = express()

    this.config();

    new Routes(this.app);
  }

  config() {
    this.app.use(morgan("tiny"));
  }

  public listen(callback?: () => void) {
    this.app.listen(this.port, callback);
  }
}

export default ExpressServer;
