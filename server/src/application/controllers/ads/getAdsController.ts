import { Request, Response } from "express";
import {
  httpStatusCode,
  httpResponse,
} from "../../../presentation/http/httpResponse";
import { GetAdsUseCase } from "../../useCases/ads/getAdsUseCase";

export class GetAdsController {
  readonly useCase: GetAdsUseCase; GetAdsUseCase;

  constructor(useCase: GetAdsUseCase) {
    this.useCase = useCase;
  }

  async handleRequest(req: Request, res: Response) {
    try {
      const { limit, offset } = req.query;

      if (limit && isNaN(limit)) {
        return res
          .status(httpStatusCode.BAD_REQUEST)
          .json(httpResponse({
            error: "Limit must be valid number"
          }))
      }

      if (offset && isNaN(offset)) {
        return res
          .status(httpStatusCode.BAD_REQUEST)
          .json(httpResponse({
            error: "Offset must be valid number"
          }))
      }

      const ads = await this.useCase.execute({
        limit,
        offset
      });

      if (ads.length == 0) {
        return res
          .status(httpStatusCode.NOT_FOUND)
          .json(httpResponse({}));
      }

      return res
        .status(httpStatusCode.OK)
        .json(httpResponse(ads));
    } catch (error: any) {
      console.log({error})
      return res
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json(httpResponse(error));
    }
  }
}
