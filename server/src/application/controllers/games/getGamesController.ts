import { Request, Response } from "express";
import {
  httpResponse,
  httpStatusCode,
} from "../../../presentation/http/httpResponse";
import { GetGamesUseCase } from "../../useCases/games/getGamesUseCase";

export class GetGamesController {
  readonly useCase: GetGamesUseCase;

  constructor(useCase: GetGamesUseCase) {
    this.useCase = useCase;
  }

  async handleRequest(_request: Request, response: Response) {
    try {
      const games = await this.useCase.execute();

      if (games.length == 0) {
        return response.status(httpStatusCode.NOT_FOUND).json(httpResponse({}));
      }

      return response.status(httpStatusCode.OK).json(httpResponse(games));
    } catch (error: any) {
      return response
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json(httpResponse(error));
    }
  }
}
