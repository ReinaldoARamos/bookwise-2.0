/* eslint-disable @next/next/no-img-element */
import { Star } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { ratings } from "../../../../prisma/constants/ratings";

interface PopularBooksProps {
  title: string;
  author: string;
  rating: number;
  cover: string;
}
export function BookReview({
  author,
  cover,
  rating,
  title,
}: PopularBooksProps) {
  return (
    <Dialog.Root>
      <div className="w-full rounded-lg bg-reviewCard px-5 py-[18px] lg:w-80 ">
        <div className="flex gap-5">
          <Dialog.Trigger>
            <img src={cover} width={64} height={94} alt="" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0  bg-background lg:bg-black/50" />
          </Dialog.Portal>

          <Dialog.Content className="fixed  right-0 top-1/2 z-10 h-screen w-full -translate-y-1/2 transform overflow-auto  rounded-md  bg-background px-12 lg:w-auto ">
            <div className="flex w-full justify-end pb-4 pt-7">
              <Dialog.Close>
                <X size={24} />
              </Dialog.Close>
            </div>
            <ReviewDialog />
          </Dialog.Content>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-md font-bold text-gray-100">{title}</span>
              <span className="text-sm text-gray-400">{author}</span>
            </div>
            <div className="flex gap-[5px] ">{rating}</div>
          </div>
        </div>
      </div>
    </Dialog.Root>
  );
}

/*
    <Star size={14} color="#8381D9" weight="fill" />
              <Star size={14} color="#8381D9" weight="fill" />
              <Star size={14} color="#8381D9" weight="fill" />
              <Star size={14} color="#8381D9" weight="fill" />
              <Star size={14} color="#8381D9" />
* */
