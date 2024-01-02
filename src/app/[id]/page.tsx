/* eslint-disable @next/next/no-img-element */
"use client";
import { ChartLineUp, User } from "@phosphor-icons/react/dist/ssr";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RatedBooks } from "../components/RatedBooks/RatedBooks";
import { SideBarDropDownMenu } from "../components/SideBarDropDown/SideBarDropDown";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
      };
    }
  ];
}

export default function Profile() {
  const pathname = usePathname();
  const { isLoading, data } = useQuery<ProfileProps | null>({
    queryKey: ["userId"],
    queryFn: async () => {
      const response = await api.get(`/profile/${pathname}`);
      console.log(response.data);

      return response.data;
    },
  });

  return (
    <>
      <div className="flex pb-4 lg:gap-16  lg:pb-0 lg:pl-[480px]    ">
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

          <SearchBar />
          <div className="block lg:hidden">
            {isLoading ? (
              <ProfileInfo
                name={"loading..."}
                created_at={"loading..."}
                avatar_url={undefined}
              />
            ) : (
              <ProfileInfo
                name={data?.name}
                created_at={data?.created_at}
                avatar_url={data?.avatar_url}
              />
            )}
          </div>
          <div className="space-y-6 ">
          {isLoading ? (
            <RatedBooks title={"..."} author={".."} rate={0} review={"..."}  />
          ) : (
            data?.ratings.map((books) => {
              return (
                <RatedBooks
                  key={books.id}
                  title={books.book.name}
                  author={books.book.author}
                  rate={books.rate}
                  review={books.description}
                  cover={books.book.cover_url}
                />
              );
            })
          )}
          </div>
        </div>

        <div className="hidden lg:block">
          {isLoading ? (
            <ProfileInfo
              name={"loading..."}
              created_at={""}
              avatar_url={undefined}
            />
          ) : (
            <ProfileInfo
              name={data?.name}
              created_at={data?.created_at}
              avatar_url={data?.avatar_url}
            />
          )}
        </div>
      </div>
    </>
  );
}
