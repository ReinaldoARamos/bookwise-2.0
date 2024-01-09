import { Star } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { RatedStars } from "../RatedStars/RatedStarts";
import Skeleton from "react-loading-skeleton";

/* eslint-disable @next/next/no-img-element */
export function AvatarSkeleton() {
  return (
    <div className="flex gap-4 pb-3  lg:pb-10">
      <Skeleton width={40} height={40} circle />
      <div className="flex w-full  flex-col">
        <div className="flex items-center justify-between ">
          <Skeleton width={124} />
          <Skeleton width={64} />
        </div>
        <Skeleton width={124} />
      </div>
    </div>
  );
}
