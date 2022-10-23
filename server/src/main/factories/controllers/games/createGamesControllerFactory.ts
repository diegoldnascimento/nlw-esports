import { CreateGamesController } from "../../../../application/controllers/games/createGamesController";
import { CreateGamesUseCase } from "../../../../application/useCases/games/createGamesUseCase";
import { GameRepository } from "../../../../infrastructure/repositories/gameRepository";
import { prismaClient } from "../../../../infrastructure/db/client";

export const createGamesControllerFactory = () => {
  const gameRepository = new GameRepository(prismaClient);
  const useCase = new CreateGamesUseCase(gameRepository);
  const createGamesController = new CreateGamesController(useCase);

  return { createGamesController };
};
