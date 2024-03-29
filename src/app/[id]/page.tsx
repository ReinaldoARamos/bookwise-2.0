/* eslint-disable @next/next/no-img-element */
"use client";
import { User } from "@phosphor-icons/react/dist/ssr";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RatedBooks } from "../components/RatedBooks/RatedBooks";
import { SideBarDropDownMenu } from "../components/SideBarDropDown/SideBarDropDown";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { relativeDateFormatter } from "@/utils/DateFormatter";
import diacritics from "diacritics";
import { ProfileInfoSkeleton } from "../components/ProfileInfo/ProfileInfoSkeleton";
import { RatedBooksSkeleton } from "../components/RatedBooks/RatedBookSkeleton";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface ProfileProps {
  id: string;
  name: string;
  avatar_url: string;
  created_at: string;

  ratings: [
    {
      id: string;
      rate: number;
      description: string;
      created_at: string;
      book_id: string;
      user_id: string;

      book: {
        id: string;
        name: string;
        author: string;
        total_pages: number;
        cover_url: string;

        categories: [
          {
            category: {
              id: string;
              name: string;
            };
          }
        ];
      };
    }
  ];
}

export default function Profile() {
  const pathname = usePathname();
  const [parent, enableAnimations] = useAutoAnimate({ duration: 300 });
  const [filter, setfilter] = useState<string>("");
  const { isLoading, data } = useQuery<ProfileProps | null>({
    queryKey: ["userId"],
    queryFn: async () => {
      const response = await api.get(`/profile/${pathname}`);

      return response.data;
    },
  });

  const TotalPages = data?.ratings.reduce((sum, rating) => {
    return sum + rating.book.total_pages;
  }, 0);

  const RatedBooksNumber: number | undefined = data?.ratings.length;

  const uniqueAuthorsCount = data?.ratings.reduce((acc, rating) => {
    const authorId: string = rating.book.author;
    //@ts-ignore
    if (!acc.includes(authorId)) {
      //@ts-ignore
      acc.push(authorId);
    }
    return acc;
  }, []).length;

  // Usando reduce para contar a ocorrência de cada categoria
  const categoryCounts = data?.ratings.reduce((acc, rating) => {
    rating.book.categories.forEach((category) => {
      const categoryName = category.category.name;
      //@ts-ignore
      acc[categoryName] = (acc[categoryName] || 0) + 1;
    });
    return acc;
  }, {});

  // Encontrando a categoria que mais se repete
  let mostCommonCategory = null;
  let maxCount = 0;

  for (const categoryName in categoryCounts) {
    //@ts-ignore
    if (categoryCounts[categoryName] > maxCount) {
      mostCommonCategory = categoryName;
      //@ts-ignore
      maxCount = categoryCounts[categoryName];
    }
  }

  const handleSearchInputChange = (value: string) => {
    setfilter(value);
  };

  const removeDiacritics = (str: string) => diacritics.remove(str);
  const filteredBooks = data?.ratings.filter((rating) =>
    removeDiacritics(rating.book.name.toLowerCase()).includes(
      removeDiacritics(filter.toLowerCase())
    )
  );
  
  return (
    <>
      <div className="flex pb-6 lg:gap-16  lg:pb-0 lg:pl-[480px]    ">
        <div className="w-full  px-4  pt-7 lg:w-auto lg:pt-[72px]   ">
          <div className="flex justify-between pb-10 lg:hidden">
            <h1 className="flex w-full  items-center  gap-4 text-2xl font-bold text-gray-100">
              <User size={26} className="text-singin" />
              Perfil
            </h1>

            <SideBarDropDownMenu />
          </div>

          <div className="hidden items-center  gap-4 pb-10 text-2xl font-bold text-gray-100 lg:flex">
            <User size={26} className="text-singin" />
            Perfil
          </div>
          <SearchBar onInputChange={handleSearchInputChange} />

          <div className="block lg:hidden" ref={parent}>
            {isLoading ? (
              <ProfileInfoSkeleton />
            ) : (
              <ProfileInfo
                name={data?.name}
                created_at={data?.created_at}
                avatar_url={data?.avatar_url}
                total_pages={TotalPages}
                authors_read={uniqueAuthorsCount}
                books_read={RatedBooksNumber}
                mostReadCategory={mostCommonCategory}
              />
            )}
          </div>
          <div className="space-y-6 " ref={parent}>
            {isLoading ? (
              <RatedBooksSkeleton />
            ) : !filter ? (
              !data?.ratings.length ? (
                <div
                className="flex flex-col rounded-lg bg-background p-6 lg:w-[608px]"
                ref={parent}
              />
              ) : (
                data?.ratings.map((books) => {
                  return (
                    <>
                      <RatedBooks
                        key={books.id}
                        title={books.book.name}
                        author={books.book.author}
                        rate={books.rate}
                        review={books.description}
                        cover={books.book.cover_url}
                        createdAt={relativeDateFormatter(books.created_at)}
                      />
                    </>
                  );
                })
              )
            ) : //@ts-ignore
            filteredBooks?.length <= 0 ? (
              <div
                className="flex flex-col rounded-lg bg-background p-6 lg:w-[608px]"
                ref={parent}
              />
            ) : (
              filteredBooks?.map((books) => {
                return (
                  <RatedBooks
                    key={books.id}
                    title={books.book.name}
                    author={books.book.author}
                    rate={books.rate}
                    review={books.description}
                    cover={books.book.cover_url}
                    createdAt={relativeDateFormatter(books.created_at)}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className="hidden lg:block ">
          {isLoading ? (
            <ProfileInfoSkeleton />
          ) : (
            <ProfileInfo
              name={data?.name}
              created_at={data?.created_at}
              avatar_url={data?.avatar_url}
              total_pages={TotalPages}
              authors_read={uniqueAuthorsCount}
              books_read={RatedBooksNumber}
              mostReadCategory={mostCommonCategory}
            />
          )}
        </div>
      </div>
    </>
  );
}
