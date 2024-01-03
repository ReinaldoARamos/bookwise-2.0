import { prisma } from "@/lib/prisma";

export async function GET(req: Request, res: Response) {
  const tags = await prisma.category.findMany();

  return Response.json(tags);
}
