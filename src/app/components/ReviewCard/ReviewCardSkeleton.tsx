/* eslint-disable @next/next/no-img-element */
import Skeleton from "react-loading-skeleton";
import { AvatarSkeleton } from "../Avatar/AvatarSkeleton";


export function ReviewCardSkeleton() {
  
  return (
   
      <div className="rounded-lg bg-reviewCard p-6 lg:w-[608px] ">

        <AvatarSkeleton />
   

        <div className="flex  flex-col gap-5 lg:flex-row">
          <div className="flex gap-5">
           
              <Skeleton width={108} height={152}/>
           
            <div className=" flex flex-col lg:hidden">
              <Skeleton count={2} width={124}/>
            </div>
          </div>

         
       
          <div className="flex flex-col ">
            <div className=" hidden lg:flex lg:flex-col">
            <Skeleton count={2} width={124}/>
            </div>
            <div className="break-words text-sm text-gray-100 lg:max-w-[432px] lg:pt-5">
           <Skeleton width={220} height={84}/>
            </div>
          </div>
        </div>
      </div>
   
  );
}
