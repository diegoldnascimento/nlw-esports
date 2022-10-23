import { PrismaClient } from "@prisma/client";

export class GameRepository {
  readonly prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  getAll(args: {}) {
    return this.prismaClient.game.findMany(args);
  }

  get(id: null | string) {
    if (id === null) {
      return this.prismaClient.game.findFirst();
    }

    return this.prismaClient.game.findFirst({
      where: { id },
    });
  }

  create(data: {}) {
    return this.prismaClient.game.create({ data })
  }
}
