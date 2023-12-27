/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { X } from "@phosphor-icons/react/dist/ssr";

export function ReviewCard() {
  return (
    <Dialog.Root>
      <div className="rounded-lg bg-reviewCard p-6 lg:w-[608px] ">
        <Avatar />
        <div className="flex  flex-col gap-5 lg:flex-row">
          <Dialog.Trigger>
            <div className="flex gap-5">
              <img src="/images/Book.png" width={108} height={152} alt="" />
              <div className=" flex flex-col lg:hidden">
                <span className="text-sm text-gray-100">O Sigma</span>
                <span className="text-sm text-gray-400">
                  Edude Bon D Skibdy Toilet
                </span>
              </div>
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0  lg:bg-black/50 bg-background" />
          </Dialog.Portal>

          <Dialog.Content className="fixed  right-0 top-1/2 lg:w-auto w-full z-10 h-screen -translate-y-1/2 transform  overflow-auto  rounded-md bg-background px-12 ">
            <div className="flex w-full justify-end pb-4 pt-7">
              <Dialog.Close>
                <X size={24} />
              </Dialog.Close>
            </div>
            <ReviewDialog />
          </Dialog.Content>
          <div className="flex flex-col ">
            <div className=" hidden lg:flex lg:flex-col">
              <span className="text-sm text-gray-100">O Sigma</span>
              <span className="text-sm text-gray-400">
                Edude Bon D Skibdy Toilet
              </span>
            </div>
            <div className="break-words text-sm  text-gray-100 lg:pt-5">
              Edude ed edudeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </div>
          </div>
        </div>
      </div>

    </Dialog.Root>
  );
}
