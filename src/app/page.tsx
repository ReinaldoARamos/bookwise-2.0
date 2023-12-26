"use client";

import { ReviewCard } from "./components/ReviewCard/ReviewCard";
import { PopularBooks } from "./components/LatestBooks/PopularBooks";
import { LatestRead } from "./components/LatestRead/LatestRead";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import { SideBarDropDownMenu } from "./components/SideBarDropDown/SideBarDropDown";

export default function Home() {
  return (
    <div className="flex  lg:pl-[480px]  ">
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
            <div className=" pb-5">
              <div className="pb-6 text-sm text-gray-100 ">
                Sua última leitura
              </div>
              <LatestRead />
            </div>

            <div className="pb-6  text-sm text-gray-100 ">
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

/*


* */
