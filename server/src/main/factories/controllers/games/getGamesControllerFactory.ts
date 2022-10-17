import { GetGamesController } from "../../../../application/controllers/games/getGamesController";
import { GetGamesUseCase } from "../../../../application/useCases/games/getGamesUseCase";
import { GameRepository } from "../../../../infrastructure/repositories/gameRepository";
import { prismaClient } from "../../../../infrastructure/db/client";

export const getGamesControllerFactory = () => {
  const gameRepository = new GameRepository(prismaClient);
  const useCase = new GetGamesUseCase(gameRepository);
  const getGamesController = new GetGamesController(useCase);

  return { getGamesController };
};
