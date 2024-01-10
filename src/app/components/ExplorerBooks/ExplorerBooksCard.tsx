"use client";
import { Star, X } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { useQueryClient } from "@tanstack/react-query";
import { RatedStars } from "../RatedStars/RatedStarts";
import { ReviewDialogSkeleton } from "../ReviewDialog/ReviewDialogSkeleton";

interface ExplorerBooksProps {
  isRead?: boolean;
  id: string;
  title: string;
  author: string;
  rating: number;
  cover: string;
}
/* eslint-disable @next/next/no-img-element */
export function ExplorerBooks({
  isRead,
  author,
  rating,
  title,
  cover,
  id,
}: ExplorerBooksProps) {
  function returnId() {
    console.log(id);
  }

  const queryClient = useQueryClient();

  function ClearQueryCash() {
    queryClient.removeQueries({ queryKey: ["BookId"], exact: true });
    console.log("removendo query do cache");
  }

  function teste() {
    console.log("fechando");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div
          className="flex flex-col rounded-lg bg-reviewCard"
          onClick={returnId}
        >
          <div className="flex justify-end pb-3 lg:pb-0">
            {isRead ? (
              <div className=" h-6 rounded-bl-lg rounded-tr-md bg-customgreen300  px-3 font-bold text-customgreen100 ">
                LIDO
              </div>
            ) : (
              <div className=" h-6 rounded-bl-lg rounded-tr-md bg-reviewCard  px-3 font-bold text-reviewCard "></div>
            )}
          </div>
          <div className="flex   flex-col items-center gap-5 px-5 pb-6  lg:flex-row  lg:items-stretch lg:justify-normal ">
            <img src={cover} width={108} height={152} alt="" />
            <div className="flex flex-col lg:justify-between  item-center justify-center ">
              <div className="flex w-full flex-col  lg:items-start  ">
                <p className="max-w-[124px] truncate break-words  text-md font-bold text-gray-100 ">
                  {" "}
                  {title}
                </p>
                <span className="text-sm text-gray-300">{author}</span>
              </div>
            <div className="lg:block hidden">  <RatedStars star={rating} /></div>
            </div>
            <div className="lg:hidden block">  <RatedStars star={rating} /></div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="bg-/50 fixed  inset-0"
          onClick={ClearQueryCash}
        />

        <Dialog.Content className="fixed right-0 top-1/2 z-10 h-screen w-full -translate-y-1/2 transform overflow-auto  rounded-md  bg-background px-6 lg:px-12 lg:w-auto ">
          <div className="flex w-full justify-end pb-4 pt-7">
            <Dialog.Close>
              <X size={24} onClick={ClearQueryCash} />
            </Dialog.Close>
          </div>
        <  ReviewDialog id={id} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
//   <ReviewDialog id={id} />