import { Request, Response, Router } from "express";
import Routes from "routes/Routes";

class CharacterRoutesExpress implements Routes {

  constructor() {
    this.initRoutes();
  }

  private _router: Router = Router();

  public get router(): Router {
    return this._router;
  }

  public initRoutes() {
    this.router.post("/", (_request: Request, response: Response) => {
      response.json({ message: "ok" });
    });

    this.router.post("/save", (_request: Request, response: Response) => {
      response.json({ message: "ok" });
    });
  }
}

export default new CharacterRoutesExpress().router;
