/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { AvatarSkeleton } from "../Avatar/AvatarSkeleton";


export function ReviewCardSkeleton() {
  
  return (
   
      <div className="rounded-lg bg-reviewCard p-6 lg:w-[608px] ">

        <AvatarSkeleton />
   

        <div className="flex  flex-col gap-5 lg:flex-row">
          <div className="flex gap-5">
           
              <img src="" width={108} height={152} alt="not found" />
           
            <div className=" flex flex-col lg:hidden">
              <span className="text-sm text-gray-100">Yupi</span>
              <span className="text-sm text-gray-400">Agatha</span>
            </div>
          </div>

         
       
          <div className="flex flex-col ">
            <div className=" hidden lg:flex lg:flex-col">
              <span className="text-sm text-gray-100">ReviewCardSkeleton</span>
              <span className="text-sm text-gray-400">ReviewCardSkeleton</span>
            </div>
            <div className="break-words text-sm text-gray-100 lg:max-w-[432px] lg:pt-5">
            ReviewCardSkeleton
            </div>
          </div>
        </div>
      </div>
   
  );
}
