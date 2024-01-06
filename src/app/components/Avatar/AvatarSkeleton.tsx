import { Star } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { RatedStars } from "../RatedStars/RatedStarts";


/* eslint-disable @next/next/no-img-element */
export function AvatarSkeleton() {
 
  return (
    <div className="flex gap-4 pb-3  lg:pb-10">
      <img
        src={""}
        alt=""
        className="h-10 w-10 rounded-full border border-teal hover:cursor-pointer"
     
      />
      <div className="flex w-full  flex-col">
        <div className="flex items-center justify-between ">
          <span className="text-gray-100">aa</span>
      <div>Estrelas</div>
        </div>
        <span className="text-gray-400">a</span>
      </div>
    </div>
  );
}

