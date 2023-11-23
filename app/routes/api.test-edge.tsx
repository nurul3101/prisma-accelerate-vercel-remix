import { prismaEdge } from "../prisma-edge";
import { json, type LoaderFunctionArgs } from "@vercel/remix";

export const config = { runtime: "edge" };

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const org1 = await prismaEdge.user.findFirst();
  return json({ org1 });
};
