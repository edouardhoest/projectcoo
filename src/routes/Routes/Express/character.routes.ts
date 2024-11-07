import CreateCharacterUseCase from "../../../use_cases/CreateCharacterUseCase";
import SaveCharacterUseCase from "../../../use_cases/SaveCharacterUseCase";
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
    this.router.get("/character-creation-information", async (_request: Request, _response: Response) => {
      const createCharacterUseCase = new CreateCharacterUseCase();
      try {
        const character = await createCharacterUseCase.execute();
        _response.json(character);
      } catch (error) {
        _response.status(500).json({
          error: "Error retrieving character creation information",
          details: error instanceof Error ? error.message : String(error),
        });
      }
    });

    this.router.post("/save", async (_request: Request, _response: Response) => {
      const saveCharacterUseCase = new SaveCharacterUseCase();
      try {
        saveCharacterUseCase.execute(_request.body);
        _response.status(200).json({ message: "Character saved successfully" });
      } catch (error) {
        _response.status(500).json({
          error: "Error creating character",
          details: error instanceof Error ? error.message : String(error),
        });
      }
    });
  }
}

export default new CharacterRoutesExpress().router;
