import morgan from "morgan";
import Server from "../Server";
import express, { Application } from "express";
import RouterExpress from "../Router/RouterExpress";

class ServerExpress implements Server {
  private readonly port: number;
  private readonly _app: Application;

  constructor(port: number) {
    this.port = port;
    this._app = express();

    this.config();

    new RouterExpress(this);
  }

  public get app(): Application {
    return this._app;
  }

  public listen(callback?: () => void) {
    this._app.listen(this.port, callback);
  }

  config() {
    this._app.use(morgan("tiny"));
    this._app.use(express.json());
  }
}

export default ServerExpress;
