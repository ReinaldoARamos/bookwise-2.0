/* eslint-disable @next/next/no-img-element */
import { useQueryClient } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

export function BookReviewSkeleton() {
  return (
    <div className="w-full rounded-lg bg-reviewCard px-5 py-[18px] lg:w-80 ">
      <div className="flex gap-5">
        <Skeleton width={64} height={94} />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <Skeleton width={124} count={2} />
          </div>
          <Skeleton width={124} />
        </div>
      </div>
    </div>
  );
}
