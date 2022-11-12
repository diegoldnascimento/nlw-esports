import { Request, Response } from "express";
import {
  httpResponse,
  httpStatusCode,
} from "../../../presentation/http/httpResponse";
import { CreateGamesUseCase } from "../../useCases/games/createGamesUseCase";

export class CreateGamesController {
  readonly useCase: CreateGamesUseCase;

  constructor(useCase: GetGamesUseCase) {
    this.useCase = useCase;
  }

  async handleRequest(req: Request, res: Response) {
    try {
      const { body } = req;

      if (!body) {
        return res.status(httpStatusCode.BAD_REQUEST).json(httpResponse({}));
      }

      const data = {
        title: body.title,
        backgroundImageUrl: body.backgroundImageUrl,
      };

      const game = await this.useCase.execute(data);

      if (!game) {
        return res
          .status(httpStatusCode.INTERNAL_SERVER_ERROR)
          .json(httpResponse({}));
      }

      return res.status(httpStatusCode.CREATED).json(httpResponse(game));
    } catch (error: any) {
      console.log({ error });
      return res
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json(httpResponse(error));
    }
  }
}
