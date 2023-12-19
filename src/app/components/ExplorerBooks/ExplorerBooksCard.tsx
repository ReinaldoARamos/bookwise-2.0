"use client";
import { Star, X } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";

interface ExplorerBooksProps {
  isRead?: boolean;
}
/* eslint-disable @next/next/no-img-element */
export function ExplorerBooks({ isRead }: ExplorerBooksProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex flex-col rounded-lg bg-reviewCard">
          <div className="flex justify-end">
            {isRead ? (
              <div className=" h-6 rounded-bl-lg rounded-tr-md bg-customgreen300  px-3 font-bold text-customgreen100 ">
                LIDO
              </div>
            ) : (
              <div className=" h-6 rounded-bl-lg rounded-tr-md bg-reviewCard  px-3 font-bold text-reviewCard "></div>
            )}
          </div>
          <div className="flex  gap-5   px-5 pb-6 ">
            <img src="/images/Book.png" width={108} height={152} alt="" />
            <div className="flex flex-col justify-between">
              <div className="flex w-full flex-col items-start ">
                <span className="text-md font-bold text-gray-100 ">
                  {" "}
                  Edude Edude
                </span>
                <span className="text-sm text-gray-300">Edude Adventures</span>
              </div>
              <div className="flex gap-[5px]">
                <Star size={14} color="#8381D9" weight="fill" />
                <Star size={14} color="#8381D9" weight="fill" />
                <Star size={14} color="#8381D9" weight="fill" />
                <Star size={14} color="#8381D9" />
                <Star size={14} color="#8381D9" />
              </div>
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      </Dialog.Portal>

      <Dialog.Content className="fixed right-0 top-1/2 z-10 h-screen overflow-auto -translate-y-1/2  transform  rounded-md bg-background px-12 ">
        <Dialog.Close className="flex w-full justify-end pb-4 pt-7">
          <X size={24} />
        </Dialog.Close>
        <ReviewDialog />
        
      </Dialog.Content>
    </Dialog.Root>
  );
}
