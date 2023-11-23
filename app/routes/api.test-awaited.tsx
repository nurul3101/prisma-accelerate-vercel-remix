import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { json, type LoaderFunctionArgs } from "@vercel/remix";

export const config = { runtime: "nodejs" };

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const prisma = new PrismaClient().$extends(withAccelerate());
  const org1 = await prisma.user.findFirst();
  return json({ org1 });
};
