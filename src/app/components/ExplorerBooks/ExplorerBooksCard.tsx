'use client'
import { Star } from "@phosphor-icons/react/dist/ssr";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";


interface ExplorerBooksProps {
    isRead?: boolean;
}
/* eslint-disable @next/next/no-img-element */
export function ExplorerBooks({isRead} : ExplorerBooksProps) {
  return (
    <Dialog.Root >
   <Dialog.Trigger>
    <div className="bg-reviewCard rounded-lg flex ">
        
      <div className="px-5 py-4 flex  gap-5  ">
      
        <img src="/images/Book.png" width={108} height={152} alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-md text-gray-100 font-bold "> Edude Edude</span>
            <span className="text-sm text-gray-300">Edude Adventures</span>
          </div>
          <div className="flex gap-[5px]">
            <Star size={14} color="#8381D9" weight="fill"/> 
            <Star size={14} color="#8381D9" weight="fill"/> 
            <Star size={14} color="#8381D9" weight="fill"/> 
            <Star size={14} color="#8381D9" /> 
            <Star size={14} color="#8381D9"/> 
          </div>
        </div>
       
      </div>
      <div>
        {isRead ? <div className=" text-customgreen100 py-1 px-3 bg-customgreen300  font-bold rounded-bl-lg rounded-tr-md ">LIDO</div> : <div></div>}
        </div>
    </div>
    </Dialog.Trigger>

    <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      </Dialog.Portal>
      <Dialog.Content className="fixed h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md">
        <div>oi</div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
