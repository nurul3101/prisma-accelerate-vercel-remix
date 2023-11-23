import { PrismaClient } from "@prisma/client";

if (!globalThis.prisma) {
  globalThis.prismaNoAccelerate = new PrismaClient();
}

const prismaClient = globalThis.prismaNoAccelerate;
export { prismaClient as prismaNoAccelerate };
