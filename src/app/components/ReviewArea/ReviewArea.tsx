import { Check, Star, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */

interface ReviewAreaProps {
  ShowCommentary?: boolean;
  onHideCommentary: () => void;
}
export function ReviewArea({ ShowCommentary , onHideCommentary}: ReviewAreaProps) {


  
  return (
   
     
        <div className="flex  flex-col rounded-lg bg-reviewCard p-6">
          <div className="flex items-center justify-between pb-6">
            <div className="flex w-full  items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-md font-bold text-gray-100  ">
                  Reinaldo Ramos
                </span>
              </div>
              <div className="flex gap-[5px]">
                <Star color="#8381D9" className="h-3 w-3 lg:h-6 lg:w-6 " />
                <Star color="#8381D9" className="h-3 w-3 lg:h-6 lg:w-6 " />
                <Star color="#8381D9" className="h-3 w-3 lg:h-6 lg:w-6 " />
                <Star color="#8381D9" className="h-3 w-3 lg:h-6 lg:w-6 " />
                <Star color="#8381D9" className="h-3 w-3 lg:h-6 lg:w-6 " />
              </div>
            </div>
          </div>
          <div className="border border-searchbar bg-background">
            <textarea
              className="h-[164px] w-full resize-none  bg-background px-5 py-3.5 text-sm text-gray-400 focus:outline-none "
              placeholder="Escreva sua avaliação"
            />
            <span className="mb-1 mr-2 flex justify-end text-xs text-gray-400 ">
              200/400
            </span>
          </div>
          <div className="flex justify-end gap-2 pt-3">
            <div  onClick={() => onHideCommentary()} className="flex justify-center bg-latestread p-3 transition duration-150 hover:cursor-pointer  hover:bg-searchbar">
              <X size={24} className="text-custompurple "  />
            </div>
            <div className="flex justify-center bg-latestread p-3 transition  duration-150 hover:cursor-pointer  hover:bg-searchbar">
              <Check size={24} className="text-customgreen100" />
            </div>
          </div>
        </div>
      ) 
  
  
}
