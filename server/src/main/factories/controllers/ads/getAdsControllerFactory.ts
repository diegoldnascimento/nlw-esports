
import { GetAdsController } from "../../../../application/controllers/ads/getAdsController";
import { GetAdsUseCase } from "../../../../application/useCases/ads/getAdsUseCase";
import { AdsRepository } from "../../../../infrastructure/repositories/adsRepository";
import { prismaClient } from "../../../../infrastructure/db/client";

export const getAdsControllerFactory = () => {
  const adsRepository = new AdsRepository(prismaClient);
  const useCase = new GetAdsUseCase(adsRepository);
  const getAdsController = new GetAdsController(useCase);

  return { getAdsController };
};
