import { Request, Response } from "express";
import {
  httpResponse,
  httpStatusCode,
} from "../../../presentation/http/httpResponse";
import { GetGameUseCase } from "../../useCases/games/getGameUseCase";

export class GetGameController {
  readonly useCase: GetGamesUseCase;

  constructor(useCase: GetGamesUseCase) {
    this.useCase = useCase;
  }

  async handleRequest(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(httpStatusCode.BAD_REQUEST).json(httpResponse({}));
      }

      const game = await this.useCase.execute(id);

      if (!game) {
        return res.status(httpStatusCode.NOT_FOUND).json(httpResponse({}));
      }

      return res.status(httpStatusCode.OK).json(httpResponse(game));
    } catch (error: any) {
      return res
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json(error)
    }
  }
}
