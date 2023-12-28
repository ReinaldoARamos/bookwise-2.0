import { Star } from "@phosphor-icons/react";
import { BookReview } from "./BookReview";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
interface PopularBooksProps {
  id: string;
  name: string;
  author: string;
  averageRating: number;
  cover_url: string
}
/* eslint-disable @next/next/no-img-element */
export function PopularBooks() {
  const { data } = useQuery<PopularBooksProps[]>({
    queryKey: ["PopularBooks"],
    queryFn: async () => {
      const response = await api.get(`/popularbooks`);
      console.log(response.data);
      return response.data;
    },
  });

  return (
    <div className=" w-full pl-0  pt-6 lg:w-auto lg:pl-16 lg:pt-0 ">
      <div className="flex items-center justify-between pb-5">
        <div className="text-sm text-gray-100">Livros mais populares</div>
        <div className="text-sm font-bold text-custompurple">Ver tudo</div>
      </div>
      <div className="space-y-3">
        {data?.map((popular) => (
          <BookReview
            title={popular.name}
            author={popular.author}
            rating={popular.averageRating}
            cover={popular.cover_url}
            key={popular.id}
          />
        ))}
      </div>
    </div>
  );
}
