import { GetGameController } from "./getGameController";
import { getGamesUseCase } from "../../useCases/games/getGameUseCase";
import { Request, Response } from "express";
import {
  httpStatusCode,
  httpResponse,
} from "../../../presentation/http/httpResponse";

describe("GetGameController", () => {
  let useCase: getGamesUseCase;
  let getGameController: GetGameController;

  beforeEach(() => {
    useCase = new getGamesUseCase();
    getGameController = new GetGameController(useCase);
  });

  describe("handleRequest", () => {
    let req: Request;
    let res: Response;

    beforeEach(() => {
      req = {
        params: {
          id: "123",
        },
      } as Request;
      res = {} as Response;
      res.status = jest.fn().mockReturnThis();
      res.json = jest.fn().mockReturnThis();
    });

    it("should return 400 when no ID is provided", async () => {
      req.params.id = "";
      await getGameController.handleRequest(req, res);
      expect(res.status).toHaveBeenCalledWith(httpStatusCode.BAD_REQUEST);
    });

    it("should return 404 when no game is found", async () => {
      useCase.execute = jest.fn().mockReturnValue(null);
      await getGameController.handleRequest(req, res);
      expect(res.status).toHaveBeenCalledWith(httpStatusCode.NOT_FOUND);
    });

    it("should return 200 with the corresponding game", async () => {
      const game = {
        name: "Super Mario",
      };
      useCase.execute = jest.fn().mockReturnValue(game);
      await getGameController.handleRequest(req, res);
      expect(res.status).toHaveBeenCalledWith(httpStatusCode.OK);
      expect(res.json).toHaveBeenCalledWith(httpResponse(game));
    });

    it("should return 500 when an error occurs", async () => {
      useCase.execute = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      await getGameController.handleRequest(req, res);
      expect(res.status).toHaveBeenCalledWith(
        httpStatusCode.INTERNAL_SERVER_ERROR
      );
    });
  });
});
