import { DateFormatterYear } from "@/utils/DateFormatter";
import { ProfileInfoItem } from "./Item";
import { useEffect, useState } from "react";

interface ProfileInfoProps {
  name: string | undefined;
  created_at: string | undefined;
  avatar_url: string | undefined;
}

/* eslint-disable @next/next/no-img-element */
export function ProfileInfo({
  avatar_url,
  created_at,
  name,
}: ProfileInfoProps) {
  return (
    <div>
      <div className="flex pb-6  lg:fixed lg:pb-0  lg:pt-[146px]">
        <div className="flex flex-col border-reviewCard lg:items-center  lg:justify-center lg:border-l  lg:pl-16 ">
          <div className="flex items-center gap-4 lg:flex-col lg:justify-center lg:gap-0">
            <img
              src={avatar_url}
              alt=""
              className="h-[72px] w-[72px] rounded-full border border-teal"
            />
            <div className="flex flex-col">
              <div className="text-center text-xl font-bold text-gray-100 lg:pt-5">
                {name}
              </div>
              <div className="text-md text-gray-400 lg:pb-10">
                membro desde {DateFormatterYear(created_at)}
              </div>
            </div>
          </div>
          <div className="to hidden h-1 w-8 rounded-full bg-purpleguy bg-gradient-to-tr from-teal lg:block" />

          <ProfileInfoItem text="A" />
        </div>
      </div>
    </div>
  );
}
