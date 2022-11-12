
import { PrismaClient } from "@prisma/client";

export class AdsRepository {
  readonly prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  getAll(args: {}) {
    return this.prismaClient.ad.findMany(args);
  }

  get(id: null | string) {
    if (id === null) {
      return this.prismaClient.ad.findFirst();
    }

    return this.prismaClient.ad.findFirst({
      where: { id },
    });
  }

  create(data: {}) {
    return this.prismaClient.ad.create({ data })
  }
}
