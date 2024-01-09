/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReviewCard } from "./components/ReviewCard/ReviewCard";
import { PopularBooks } from "./components/LatestBooks/PopularBooks";
import { LatestRead } from "./components/LatestRead/LatestRead";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import { SideBarDropDownMenu } from "./components/SideBarDropDown/SideBarDropDown";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { relativeDateFormatter } from "@/utils/DateFormatter";
import { useEffect } from "react";
import { ReviewCardSkeleton } from "./components/ReviewCard/ReviewCardSkeleton";

interface RecentReviewsProps {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book: {
    id: string;
    name: string;
    author: string;
    summary: string;
    cover_url: string;
  };
  user: {
    id: string;
    name: string;
    avatar_url: string;
  };
}

export default function Home() {
  const { isLoading, data } = useQuery<RecentReviewsProps[]>({
    queryKey: ["Tasks"],
    queryFn: async () => {
      const response = await api.get(`/recentreviews`);
      console.log(response.data);
      return response.data;
    },
  });
  //const [parent, enableAnimations] = useAutoAnimate({ duration: 300 });
  const queryClient = useQueryClient();

  function teste() {
    queryClient.removeQueries({ queryKey: ["userId"], exact: true });
    console.log("removendo query do cache");
  }

  useEffect(() => {
    teste();
  }, []);

  return (
    <div className="flex  pb-60 lg:pb-0 lg:pl-[480px]">
      <div className="w-full px-4  pt-7   lg:pt-[72px]">
        <div className="flex justify-between   lg:justify-normal lg:pb-10">
          <h1 className="ditems-center flex gap-4 text-2xl font-bold text-gray-100">
            <ChartLineUp size={26} className="text-singin" />
            Início
          </h1>
          <SideBarDropDownMenu />
        </div>

        <div className="flex flex-col pt-10 lg:flex-row lg:pt-0">
          <div>
            <div className=" hidden pb-5">
              <div className="pb-6 text-sm text-gray-100 ">
                Sua última leitura
              </div>
              <LatestRead
                title={"a"}
                author={"a"}
                rating={0}
                review={"a"}
                cover={"public/images/o-hobbit.png"}
              />
            </div>  
         

            <div className="pb-6  text-sm text-gray-100 ">
              Avaliações mais recentes
            </div>
            <div className="space-y-3">
              {isLoading ? (
                <ReviewCardSkeleton />
              ) : (
                data?.map((reviews) => (
                  <ReviewCard
                    id={reviews.book.id}
                    title={reviews.book.name}
                    author={reviews.book.author}
                    rating={reviews.rate}
                    review={reviews.description}
                    key={reviews.id}
                    cover={reviews.book.cover_url}
                    username={reviews.user.name}
                    avatarurl={reviews.user.avatar_url}
                    date={relativeDateFormatter(reviews.created_at)}
                    userId={reviews.user.id}
                  />
                ))
              )}
            </div>
          </div>

          <PopularBooks />
        </div>

        
      </div>
    </div>
  );
}

/*


* */
