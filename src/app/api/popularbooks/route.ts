import { prisma } from "@/lib/prisma";

export async function GET(req: Request, res: Response) {
  const popularbooks = await prisma.book.findMany({
    include: {
      ratings: true,
    },
  });

  const booksWithAverageRating = popularbooks.map((books) => {
    const averageRating =
      books.ratings.reduce((sum, rating) => sum + rating.rate, 0) /
      books.ratings.length;

    return {
      ...books,
      averageRating,
    };
  });

  const sortedBooks = booksWithAverageRating.sort(
    (a, b) => b.averageRating - a.averageRating
  );

  // Pegue os 5 primeiros livros
  const top5Books = sortedBooks.slice(0, 5);

  return Response.json(top5Books);
}
