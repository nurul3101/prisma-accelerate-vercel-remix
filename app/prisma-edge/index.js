import { PrismaClient as PrismaClientEdge } from "@prisma/client/edge.js";
import { withAccelerate } from "@prisma/extension-accelerate";

if (!globalThis.prismaEdge) {
  globalThis.prismaEdge = new PrismaClientEdge().$extends(withAccelerate());
}

const prismaEdgeClient = globalThis.prismaEdge;
export { prismaEdgeClient as prismaEdge };
