
import { GameRepository } from "../../../infrastructure/repositories/gameRepository";

type Input = {
  id: string;
}

type Output = {
  id: string;
  title: string;
  backgroundImage: string;
  createdAt: string;
  updatedAt: string;
}

export class GetGameUseCase {
  readonly gameRepository: GameRepository;

  constructor(gameRepository: GameRepository) {
    this.gameRepository = gameRepository;
  }

  async execute(input: Input): Promise<Output> {
    const output = await this.gameRepository.get(input.id);
    return output;
  }
}
