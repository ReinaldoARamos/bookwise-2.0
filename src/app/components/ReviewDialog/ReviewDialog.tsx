import {
  BookOpen,
  BookmarkSimple,
  Star,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Comments } from "../Comments/Comments";
import * as Dialog from "@radix-ui/react-dialog";
import { LoginDialog } from "../LoginDialog/LoginDialog";
import { ReviewArea } from "../ReviewArea/ReviewArea";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
/* eslint-disable @next/next/no-img-element */
interface ReviewDialogProps{ 
  id: string;
  name?: string;
  author?: string;
  cover_url?: string;
  averageRating?: number;
}
export function ReviewDialog({id}  : ReviewDialogProps) {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
  const [HideComment, setHideComment] = useState<boolean>(true);

  function ShowComment() {
    setHideComment(false);
    console.log("mostrando comentario");
  }
  function HideCommentary() {
    setHideComment(true);
    console.log("FEchando comentario");
  }

  const { isLoading, data } = useQuery<ReviewDialogProps>({
    queryKey: ["BookId"],
    queryFn: async () => {
      const response = await api.get(`/books/${id}`);
      console.log(response.data);

      return response.data;
    },
  });


  return (
    <>
      <div className="flex  flex-col rounded-[10px] bg-reviewCard ">
        <div className="flex flex-col  px-8 py-6 ">
          <div className="flex gap-8 border-b  border-b-gray-800 pb-10 ">
            <img
              src={data?.cover_url}
              alt=""
              className="h-36 w-auto lg:h-[242px] lg:w-[172px]"
            />
            <div className="flex flex-col  justify-between">
              <div className="flex flex-col space-y-2 ">
                <h2 className=" text-md  font-bold text-gray-100 lg:text-lg ">
                 {data?.name}
                </h2>
                <span className="text-sm text-gray-300 lg:text-md">
                  {data?.author}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex gap-[5px]">
                  <Star size={16} color="#8381D9" weight="fill" />
                  <Star size={16} color="#8381D9" weight="fill" />
                  <Star size={16} color="#8381D9" weight="fill" />
                  <Star size={16} color="#8381D9" weight="fill" />
                  <Star size={16} color="#8381D9" weight="fill" />
                </div>
                <span className="text-sm text-gray-400">1 avaliação</span>
              </div>
            </div>
          </div>
          <div className="flex pt-6 lg:gap-[60px]">
            <div className="flex items-center gap-4">
              <BookmarkSimple size={24} className="text-singin" />
              <div className="flex flex-col ">
                <span className="text-sm text-gray-300 lg:text-sm">
                  Caterogia
                </span>
                <span className="text-sm  font-bold text-gray-100 lg:text-md">
                  Computação, Educação
                </span>
                <div>{id}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <BookOpen size={24} className="text-singin" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-300 lg:text-sm">
                  {" "}
                  Páginas
                </span>
                <span className="text-sm  font-bold text-gray-100 lg:text-md">
                  160
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[46px]">
        <div className="flex w-full justify-between pb-[22px]">
          <span className="text-sm text-gray-200">Avaliações</span>
          {isLoggedIn ? (
            <span
              className="text-sm font-bold text-custompurple hover:cursor-pointer"
              onClick={() => ShowComment()}
            >
              Avaliar
            </span>
          ) : (
            <Dialog.Root>
              <Dialog.Trigger>
                <span className="text-sm font-bold text-custompurple hover:cursor-pointer">
                  Avaliar
                </span>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0   z-20 bg-background/50" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-xl bg-reviewCard focus:outline-none  ">
                  <div className="flex w-full justify-end py-4 pr-4 ">
                    <Dialog.Close>
                      <X size={24} />
                    </Dialog.Close>
                  </div>
                  <LoginDialog />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          )}
        </div>

        <div className="flex flex-col space-y-3 rounded-lg">
          {HideComment ? (
            <></>
          ) : (
            <ReviewArea onHideCommentary={() => HideCommentary()} />
          )}
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </div>
      </div>
    </>
  );
}
// {HideComment ? (<></>) : ( <ReviewArea />)}
