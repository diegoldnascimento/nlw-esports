import { GameRepository } from "../../../infrastructure/repositories/gameRepository";

type Input = {
  title: string;
  backgroundImageUrl: string;
}

type Output = {
  id: string;
  title: string;
  backgroundImage: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateGamesUseCase {
  readonly gameRepository: GameRepository;

  constructor(gameRepository: GameRepository) {
    this.gameRepository = gameRepository;
  }

  async execute(input: Input): Promise<Output> {
    const output = await this.gameRepository.create({
      title: input.title,
      backgroundImageUrl: input.backgroundImageUrl,
    });

    return output;
  }
}
