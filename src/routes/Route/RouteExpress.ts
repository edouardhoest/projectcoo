import { Application } from "express";
import Route from '../route'
import characterRoutes from "./character.routes";

class RouteExpress implements Route<Application> {
  constructor(app: Application) {
    this.init(app)
  }

  init(app: Application): void {
    app.use("/character", characterRoutes);
  }
}

export default RouteExpress;
