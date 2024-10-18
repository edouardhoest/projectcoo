import { Application } from "express";
import Router from "../router";
import characterRoutes from "./character.routes";

class RouterExpress implements Router<Application> {
  constructor(app: Application) {
    this.init(app)
  }

  init(app: Application): void {
    app.use("/character", characterRoutes);
  }
}

export default RouterExpress;
