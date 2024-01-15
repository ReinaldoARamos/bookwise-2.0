/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { title } from "process";
import { relativeDateFormatter } from "@/utils/DateFormatter";
/*
interface ReviewCardProps {
  title: string;
  author: string;
  rating: number;
  review: string;
  cover: string;

}
*/

interface LastBookReadProps {
 id: string;
 name: string;
 avatar_url: string;

 ratings :[
 {
   id: string;
  rate: number;
  description: string;
  created_at: string;

  book : {
    id: string;
    name: string;
    author: string;
    cover_url: string;

  }
}
 ]

}


export function LatestRead() {

  const { data: session } = useSession()
  const { data, isLoading } = useQuery<LastBookReadProps>({
    queryKey: ["LastBook"],
    queryFn: async () => {
      const response = await api.get(`/lastbookread/${session?.user.id}`);
      console.log(response.data)
      return response.data;
    },
  });


  return (

    isLoading ? (
      <div>Loading</div>
    ) : (
      <div>
      {data?.ratings.map((book) => (
        <Dialog.Root>
        <div className="rounded-lg bg-latestread p-6 lg:w-[608px] ">
          <Avatar ratingNumber={book.rate} name={session?.user.name ?? "" } date={relativeDateFormatter(book.created_at)} image={session?.user.avatar_url ?? "" } userId={session?.user.id ?? "" }/>
          <div className="flex  flex-col gap-5 lg:flex-row">
            <div className="flex gap-5">
            <Dialog.Trigger>
            <img src={book.book.cover_url} width={108} height={152} alt="" />
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
                <ReviewDialog id={""} />
              </Dialog.Content>
              <div className=" flex flex-col lg:hidden">
                <span className="text-sm text-gray-100">{book.book.name}</span>
                <span className="text-sm text-gray-400">
                 {book.book.author}
                </span>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className=" hidden lg:flex lg:flex-col">
                <span className="text-sm text-gray-100">{book.book.name}</span>
                <span className="text-sm text-gray-400">
               {book.book.author}
                </span>
              </div>
              <div className="break-words text-sm lg:max-w-[432px]  text-gray-100 lg:pt-5">
              {book.description}
                </div>
            </div>
          </div>
        </div>
        </Dialog.Root>
      ))}

    </div>
    ) 
  )
}
