import { Application } from "express";
import characterRoutes from "./character.routes";

class Routes {
  constructor(app: Application) {
    app.use("/character", characterRoutes);
  }
}

export default Routes;
