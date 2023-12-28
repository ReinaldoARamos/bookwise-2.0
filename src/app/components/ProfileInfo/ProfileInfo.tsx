import { DateFormatterYear } from "@/utils/DateFormatter";
import { ProfileInfoItem } from "./Item";
import { useEffect } from "react";

interface ProfileInfoProps{
  name: string | undefined;
  created_at: string | undefined;
  avatar_url: string | undefined;
  
}



/* eslint-disable @next/next/no-img-element */
export function ProfileInfo({ avatar_url, created_at, name} : ProfileInfoProps) {
 

  return (
    <div>
      <div className="lg:fixed flex  pb-6 lg:pb-0  lg:pt-[146px]">
        <div className="flex flex-col lg:items-center lg:justify-center  lg:pl-16 lg:border-l  border-reviewCard ">
         <div className="flex gap-4 lg:gap-0 items-center lg:justify-center lg:flex-col">
         <img
            src={avatar_url}
            alt=""
            className="h-[72px] w-[72px] rounded-full border border-teal"
          />
         <div className="flex flex-col">
         <div className="lg:pt-5 text-center text-xl font-bold text-gray-100">
            {name}
          </div>
          <div className="lg:pb-10 text-md text-gray-400">membro desde {DateFormatterYear(created_at)}</div>
         </div>
         </div>
          <div className="h-1 w-8 rounded-full bg-gradient-to-tr from-teal to bg-purpleguy hidden lg:block" /> 

          <ProfileInfoItem text="A" />
        </div>
      </div>
    </div>
  );
}
