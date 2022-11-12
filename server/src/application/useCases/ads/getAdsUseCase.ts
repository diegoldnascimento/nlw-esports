import { AdsRepository } from "../../../infrastructure/repositories/adsRepository"

type Input = {
  offset?: number;
  limit?: number;
}

type Output = {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: string;
  discord: string;
  weekDays: string;
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export class GetAdsUseCase {
  readonly adsRepository: AdsRepository;

  constructor(adsRepository: AdsRepository) {
    this.adsRepository = adsRepository;
  }

  async execute(input: Input): Promise<Output> {
    const offset = Number(input?.offset) >= 0 ? Number(input.offset) : 0;
    const limit = Number(input?.limit) >= 0 ? Number(input.limit) : 5;

    const output = this.adsRepository.getAll({
      skip: offset,
      take: limit,
    });

    return output;
  }
}
