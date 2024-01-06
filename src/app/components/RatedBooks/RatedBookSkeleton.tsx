import { Star } from "@phosphor-icons/react/dist/ssr";
import { RatedStars } from "../RatedStars/RatedStarts";
import Skeleton from "react-loading-skeleton";



/* eslint-disable @next/next/no-img-element */
export function RatedBooksSkeleton() {
  return (
    <>

     <Skeleton width={124} height={12} className="pb-2  " />
      <div className="flex lg:w-[608px] flex-col rounded-lg bg-reviewCard p-6">
        <div className="flex gap-6 pb-6">
          <Skeleton  width={108} height={152}  className="outline-none"/>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col space-y-0.5">
            <Skeleton width={124} height={12} count={2} />
            
            </div>
            <Skeleton  width={124} height={12}  />
          </div>
        </div>
        <Skeleton  width={124} height={12} className="break-words text-justify" />
      </div>
      
     
    </>
  );
}
