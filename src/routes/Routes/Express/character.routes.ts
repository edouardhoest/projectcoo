import CreateCharacterUseCase from "../../../use_cases/CreateCharacterUseCase";
import SaveCharacterUseCase from "../../../use_cases/SaveCharacterUseCase";
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
    this.router.post("/", (_request: Request, _response: Response) => {
      const createCharacterUseCase = new CreateCharacterUseCase();
      const character = createCharacterUseCase.execute(_request.body);
      _response.json(character);
    });

    this.router.post("/save", (_request: Request) => {
      const saveCharacterUseCase = new SaveCharacterUseCase();
      saveCharacterUseCase.execute(_request.body);
    });
  }
}

export default new CharacterRoutesExpress().router;
