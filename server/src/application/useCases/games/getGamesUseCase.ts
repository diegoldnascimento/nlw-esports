import { GameRepository } from "../../../infrastructure/repositories/gameRepository";

export class GetGamesUseCase {
  readonly gameRepository: GameRepository;

  constructor(gameRepository: GameRepository) {
    this.gameRepository = gameRepository;
  }

  async execute() {
    const games = await this.gameRepository.getAll({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });

    return games;
  }
}
