import { Router, Request, Response } from "express"

class CharacterRoutes {
  private _router:Router = Router();

  constructor(){
    this.initRoutes();
  }

  public initRoutes(){
    this.router.get("/:id", (_request: Request, response: Response) => {
      response.json({message: "ok"});
    });

    this.router.post("/", (_request: Request, response: Response) => {
      response.json({message: "ok"});
    });

    this.router.get("/extract", (_request: Request, response: Response) => {
      response.json({message: "ok"});
    });
  }

  public get router() : Router {
    return this._router;
  }
}

export default new CharacterRoutes().router;
