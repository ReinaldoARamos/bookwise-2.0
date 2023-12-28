import { prisma } from "@/lib/prisma";

export async function GET(req: Request, res: Response) {
  const ratings = await prisma.rating.findMany({
    include: {
      book: {},
      user: {},
    },
    orderBy: {
      created_at: "desc",
    },
    take: 5,
  });

  return Response.json(ratings);
}
