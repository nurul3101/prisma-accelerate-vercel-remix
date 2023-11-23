import { prisma } from "../prisma";
import { json, type LoaderFunctionArgs } from "@vercel/remix";

export const config = { runtime: "nodejs" };

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const org1 = await prisma.user.findFirst();
  return json({ org1 });
};
