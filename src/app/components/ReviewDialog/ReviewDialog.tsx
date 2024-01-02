import { BookOpen, BookmarkSimple, X } from "@phosphor-icons/react/dist/ssr";
import { Comments } from "../Comments/Comments";
import * as Dialog from "@radix-ui/react-dialog";
import { LoginDialog } from "../LoginDialog/LoginDialog";
import { ReviewArea } from "../ReviewArea/ReviewArea";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { RatedStars } from "../RatedStars/RatedStarts";
import { User } from "lucide-react";
import { relativeDateFormatter } from "@/utils/DateFormatter";

/* eslint-disable @next/next/no-img-element */
interface ReviewDialogProps {
  id: string;
  name?: string;
  author?: string;
  cover_url?: string;
  averageRating?: number;
  total_pages?: number;
  ratings?: [
    {
      id: string;
      rate: number;
      description: string;
      created_at: string;

      user: {
        id: string;
        name: string;
        avatar_url: string;
      };
    }
  ];
  categories?: [
    {
      category: {
        id: string;
        name: string;
      };
    }
  ];
}
export function ReviewDialog({ id }: ReviewDialogProps) {
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

  const RatingArray = data?.ratings;

  const RatingQuantity = data?.ratings?.length;

  //@ts-ignore
  const booksWithAverageRating =
    RatingArray?.reduce((sum, ratings) => sum + ratings.rate, 0) /
    data?.ratings?.length;

  console.log("teste" + booksWithAverageRating);
  return (
    <>
      <div className="flex  flex-col rounded-[10px]  bg-reviewCard ">
        <div className="flex flex-col  px-8 py-6 ">
          <div className="flex gap-8 border-b  border-b-gray-800 pb-10 ">
            <img
              src={data?.cover_url}
              alt=""
              className="h-36 w-auto lg:h-[242px] lg:w-[172px]"
            />
            <div className="flex flex-col  justify-between">
              <div className="flex flex-col space-y-2 ">
                <h2 className=" max-w-[120px]  text-md font-bold text-gray-100  lg:max-w-sm   lg:text-lg">
                  {data?.name}
                </h2>
                <span className="text-sm text-gray-300 lg:text-md">
                  {data?.author}
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <RatedStars star={Math.floor(booksWithAverageRating)} />
                {/* @ts-ignore */}
                {RatingQuantity >= 0 ? (
                  <span className="text-sm text-gray-400">
                    {RatingQuantity} Avaliação{" "}
                  </span>
                ) : (
                  <span className="text-sm text-gray-400">
                    {RatingQuantity} Avaliações
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex pt-6 lg:gap-[60px]">
            <div className="flex items-center gap-4">
              <BookmarkSimple size={24} className="text-singin" />
              <div className="flex flex-col ">
                <span className="text-sm text-gray-300 lg:text-sm">
                  Categoria
                </span>
                <span
                  className="text-sm  font-bold text-gray-100 lg:text-md"
                  key={""}
                >
                  {data?.categories
                    ?.map((category) => category.category.name)
                    .join(", ")}
                </span>
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
                  {data?.total_pages}
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
          {data?.ratings?.map((rates) => (
            <Comments
              key={rates.id}
              user={rates.user.name}
              date={relativeDateFormatter(rates.created_at)}
              avatar={rates.user.avatar_url}
              commentary={rates.description}
              rating={rates.rate}
            />
          ))}
        </div>
      </div>
    </>
  );
}
