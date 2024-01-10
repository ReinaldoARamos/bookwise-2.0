import { BookOpen, BookmarkSimple } from "@phosphor-icons/react/dist/ssr";
import { Comments } from "../Comments/Comments";
/* eslint-disable @next/next/no-img-element */
import Skeleton from "react-loading-skeleton";
import { CommentsSkeleton } from "../Comments/CommentsSkeleton";

export function ReviewDialogSkeleton() {
  

  



  return  (
   
  
    <>
      <div className="flex  flex-col rounded-[10px]  bg-reviewCard ">
        <div className="flex flex-col  px-8 py-6 ">
          <div className="flex lg:gap-8 gap-4 border-b  border-b-gray-800 pb-10 ">
            <Skeleton
          width={172}
          height={242}
            
            />
            <div className="flex flex-col  justify-between">
              <div className="flex flex-col space-y-2 ">
                <Skeleton width={384} className=" max-w-[120px]   w-96 lg:max-w-sm   "/ >
                
            <Skeleton width={124} />
              </div>

              <div className="flex flex-col space-y-1">
              <Skeleton width={124} />
             
               
                  <Skeleton width={124} />
              </div>
            </div>
          </div>
          <div className="flex pt-6 gap-[60px]">
            <div className="flex items-center gap-4">
              <BookmarkSimple size={24} className="text-singin" />
              <div className="flex flex-col ">
                <Skeleton width={124} count={2} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <BookOpen size={24} className="text-singin" />
              <div className="flex flex-col">
             <Skeleton width={124} count={2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[46px]">
        <div className="flex w-full justify-between pb-[22px]">
          <span className="text-sm text-gray-200">Avaliações</span>
        
                <span className="text-sm font-bold text-custompurple hover:cursor-pointer">
                  Avaliar
                </span>
             

           
        </div>

        <div className="flex flex-col space-y-3 rounded-lg">
         
            

           <div className="flex flex-col space-y-3 rounded-lg" >
        
            <CommentsSkeleton
           
            />
          
          </div>
        </div>
      </div>
    </>
  );
}