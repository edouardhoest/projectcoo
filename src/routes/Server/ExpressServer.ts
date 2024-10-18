import { Application } from "express";
import Server from "../Server"
import express from "express"
import morgan from "morgan";
import RouterExpress from "../Router/RouterExpress";

class ExpressServer implements Server {
  private port: Number;
  private _app: Application;

  constructor(port: Number) {
    this.port = port;
    this._app = express()

    this.config();

    new RouterExpress(this);
  }

  config() {
    this._app.use(morgan("tiny"));
  }

  public listen(callback?: () => void) {
    this._app.listen(this.port, callback);
  }

  public get app() : Application {
    return this._app;
  }
}

export default ExpressServer;
