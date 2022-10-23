import express, { Request, Response } from "express";
import { getGamesControllerFactory } from "../../../main/factories/controllers/games/getGamesControllerFactory";
import { getGameControllerFactory } from "../../../main/factories/controllers/games/getGameControllerFactory";
import { createGamesControllerFactory } from "../../../main/factories/controllers/games/createGamesControllerFactory";
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

router.get("/v1/games/:id", async (req: Request, res: Response) => {
  const { getGameController } = getGameControllerFactory();
  await getGameController.handleRequest(req, res);
});

router.post("/v1/games", async (req: Request, res: Response) => {
  const { createGamesController } = createGamesControllerFactory();
  await createGamesController.handleRequest(req, res);
});

router.put("/v1/games/:id", (_req: Request, _res: Response) => {});

router.patch("/v1/games/:id", (_req: Request, _res: Response) => {});

export { router };
