import { DateFormatterYear } from "@/utils/DateFormatter";
import { ProfileInfoItem } from "./Item";
import { useEffect, useState } from "react";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ProfileInfoProps {
  name: string | undefined;
  created_at: string | undefined;
  avatar_url: string | undefined;
  total_pages: number | undefined;
  authors_read: number  | undefined;
  books_read: number  | undefined;
  mostReadCategory: string  | null | undefined;
}

/* eslint-disable @next/next/no-img-element */
export function ProfileInfo({
  avatar_url,
  created_at,
  name,
  authors_read,
  books_read,
  total_pages,
  mostReadCategory
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

          <ProfileInfoItem totalPages={total_pages} booksRead={books_read} authorsRead={authors_read} MostReadCategory={mostReadCategory} />
        </div>
      </div>
    </div>
  );
}
