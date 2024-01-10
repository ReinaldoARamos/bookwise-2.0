"use client";
import { Star, X } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { useQueryClient } from "@tanstack/react-query";
import { RatedStars } from "../RatedStars/RatedStarts";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
/* eslint-disable @next/next/no-img-element */
export function ExplorerBooksSkeleton() {
  return (
    <div className="flex flex-col rounded-lg bg-reviewCard">
      <div className="flex justify-end pb-3 lg:pb-0"></div>
      <div className="flex   flex-col items-center gap-5 px-5 pb-6  lg:flex-row  lg:items-stretch lg:justify-normal ">
        <Skeleton width={108} height={152}  className="mt-4"/>
        <div className="item-center flex flex-col  justify-center lg:justify-between ">
          <div className="flex w-full flex-col   lg:items-start  ">
            <Skeleton width={124} count={2} className="mt-4"/>
          </div>
          <div className="hidden lg:block">
            {" "}
            <Skeleton width={124} />
          </div>
        </div>
        <div className="block lg:hidden">
          {" "}
         <Skeleton width={124} />
        </div>
      </div>
    </div>
  );
}
