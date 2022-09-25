import { GetGamesController } from "../../../../application/controllers/games/getGamesController";
import { GetGamesUseCase } from "../../../../application/useCases/games/getGamesUseCase";
import { GameRepository } from "../../../../infrastructure/repositories/gameRepository";
import { PrismaClient } from "@prisma/client";

export const getGamesControllerFactory = () => {
  const prisma = new PrismaClient();
  const gameRepository = new GameRepository(prisma);
  const useCase = new GetGamesUseCase(gameRepository);
  const getGamesController = new GetGamesController(useCase);

  return { getGamesController };
};
