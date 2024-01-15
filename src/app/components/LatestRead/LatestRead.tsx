/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";
import * as Dialog from "@radix-ui/react-dialog";
import { ReviewDialog } from "../ReviewDialog/ReviewDialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
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
  rating: [{
    id: string;
    rate: number;
    description: string;
    created_at: string;


    book: {
      id: string;
      name: string;
      author: string;
      cover_url: string;

    }
  }]
}


export function LatestRead() {

  const {data: session} = useSession()
  const {data, isLoading} = useQuery<LastBookReadProps[]>({
    queryKey: ["LastBook"],
    queryFn: async () => {
      const response = await api.get(`/lastbookread/${session?.user.id}`);
     
      return response.data;
    },
  });

const Teste = data?.map

console.log(Teste)
  return (
  
  <div>Ola senhor</div>
    )
}
