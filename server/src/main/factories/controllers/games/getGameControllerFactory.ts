import { GetGameController } from "../../../../application/controllers/games/getGameController";
import { GetGameUseCase } from "../../../../application/useCases/games/getGameUseCase";
import { GameRepository } from "../../../../infrastructure/repositories/gameRepository";
import { prismaClient } from "../../../../infrastructure/db/client";

export const getGameControllerFactory = () => {
  const gameRepository = new GameRepository(prismaClient);
  const useCase = new GetGameUseCase(gameRepository);
  const getGameController = new GetGameController(useCase);

  return { getGameController };
};
