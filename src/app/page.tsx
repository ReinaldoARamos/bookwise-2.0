"use client";


import { ReviewCard } from "./components/ReviewCard/ReviewCard";
import { PopularBooks } from "./components/LatestBooks/PopularBooks";
import { LatestRead } from "./components/LatestRead/LatestRead";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  
  return (
    <div className="flex  pl-[480px]  ">
      <div className="pt-[72px] ">
        <h1 className="flex gap-4 ditems-center pb-10 text-gray-100 text-2xl font-bold">
          <ChartLineUp size={26} className="text-singin" />
          Início
        </h1>

        <div className="flex">
          <div>
            <div className=" pb-5">
              <div className="text-gray-100 text-sm pb-6 ">
                Sua última leitura
              </div>
              <LatestRead />
            </div>
            <div className="text-gray-100  text-sm pb-6 ">
              Avaliações mais recentes
            </div>
            <div className="space-y-3">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>

          <PopularBooks />
        </div>
      </div>
    </div>
  );
}
