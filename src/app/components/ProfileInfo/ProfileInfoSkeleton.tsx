import { DateFormatterYear } from "@/utils/DateFormatter";
import { ProfileInfoItem } from "./Item";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ProfileItemSkeleton } from "./ItemSkeleton";

/* eslint-disable @next/next/no-img-element */
export function ProfileInfoSkeleton() {
  return (
    <div>
      <div className="flex pb-6  lg:fixed lg:pb-0  lg:pt-[146px]">
        <div className="flex flex-col border-reviewCard lg:items-center  lg:justify-center lg:border-l  lg:pl-16 ">
          <div className="flex items-center gap-4 lg:flex-col lg:justify-center lg:gap-0">
            <Skeleton width={72} height={72} circle />
            <div className="flex flex-col lg:pt-5 lg:mb-10">
              <Skeleton width={128}  height={12} count={2} />

            </div>
          </div>
       

          <ProfileItemSkeleton/>
        </div>
      </div>
    </div>
  );
}
