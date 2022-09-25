import { PrismaClient } from "@prisma/client";

export class GameRepository {
  readonly prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  getAll(args: {}) {
    return this.prismaClient.game.findMany(args);
  }
}
