import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient().$extends(withAccelerate());
}

const prismaClient = globalThis.prisma;
export { prismaClient as prisma };
