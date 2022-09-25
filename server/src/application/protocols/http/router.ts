import express, { Request, Response } from "express";
import { getGamesControllerFactory } from "../../../main/factories/controllers/games/getGamesControllerFactory";
import { healthcheckControllerFactory } from "../../../main/factories/controllers/healthcheck/healthcheckControllerFactory";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const { healthcheckController } = healthcheckControllerFactory();
  healthcheckController.handleRequest(req, res);
});

router.get("/v1/games", async (req: Request, res: Response) => {
  const { getGamesController } = getGamesControllerFactory();
  await getGamesController.handleRequest(req, res);
});

export { router };
