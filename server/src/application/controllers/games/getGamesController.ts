import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  httpResponse,
  httpStatusCode,
} from "../../../presentation/http/httpResponse";

export class GetGamesController {
  readonly prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async handleRequest(request: Request, response: Response) {
    try {
      const games = await this.prismaClient.game.findMany({
        include: {
          _count: {
            select: {
              ads: true,
            },
          },
        },
      });

      if (games.length == 0) {
        return response.status(httpStatusCode.NOT_FOUND).json(httpResponse({}));
      }

      return response.status(httpStatusCode.OK).json(httpResponse(games));
    } catch (error: any) {
      console.log({ error });
      return response
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json(httpResponse(error));
    }
  }
}
