/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";

interface ReviewCardProps {
  id: string;
  title: string;
  author: string;
  rating: number;
  review: string;
  cover: string;
  username: string;
  avatarurl: string;
  date: string;
  userId: string;
}

export function ReviewCard({
  author,
  rating,
  review,
  title,
  cover,
  date,
  username,
  avatarurl,
  userId,
  id
}: ReviewCardProps) {
  const queryClient = useQueryClient();
  const RedirectTo = useRouter();
  function Redirect(id: string) {
    RedirectTo.push(id);
  }
 

  function ClearQueryCash() {
    queryClient.removeQueries({ queryKey: ["BookId"], exact: true });
    console.log("removendo query do cache");
  }

  return (
    <Dialog.Root>
      <div className="rounded-lg bg-reviewCard p-6 lg:w-[608px] ">

          <Avatar
            ratingNumber={rating}
            name={username}
            date={date}
            image={avatarurl}
            userId={userId}
          />
   

        <div className="flex  flex-col gap-5 lg:flex-row">
          <div className="flex gap-5">
            <Dialog.Trigger>
              <img src={cover} width={108} height={152} alt="not found" />
            </Dialog.Trigger>
            <div className=" flex flex-col lg:hidden">
              <span className="text-sm text-gray-100">{title}</span>
              <span className="text-sm text-gray-400">{author}</span>
            </div>
          </div>

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
          <div className="flex flex-col ">
            <div className=" hidden lg:flex lg:flex-col">
              <span className="text-sm text-gray-100">{title}</span>
              <span className="text-sm text-gray-400">{author}</span>
            </div>
            <div className="break-words text-sm text-gray-100 lg:max-w-[432px] lg:pt-5">
              {review}
            </div>
          </div>
        </div>
      </div>
    </Dialog.Root>
  );
}
