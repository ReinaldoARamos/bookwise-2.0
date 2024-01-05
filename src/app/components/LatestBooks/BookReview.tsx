/* eslint-disable @next/next/no-img-element */
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { RatedStars } from "../RatedStars/RatedStarts";
import { useQueryClient } from "@tanstack/react-query";

interface PopularBooksProps {
  title: string;
  id: string;
  author: string;
  rating: number;
  cover: string;
}

export function BookReview({
  author,
  cover,
  rating,
  title,
  id,
}: PopularBooksProps) {
  const queryClient = useQueryClient();

  function ClearQueryCash() {
    queryClient.removeQueries({ queryKey: ["BookId"], exact: true });
    console.log("removendo query do cache");
  }
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
                <X size={24} onClick={ClearQueryCash} />
              </Dialog.Close>
            </div>
            <ReviewDialog id={id} />
          </Dialog.Content>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="max-w-[144px] truncate text-md   font-bold text-gray-100">
                {title}
              </span>
              <span className="text-sm text-gray-400">{author}</span>
            </div>
            <RatedStars star={rating} />
          </div>
        </div>
      </div>
    </Dialog.Root>
  );
}
