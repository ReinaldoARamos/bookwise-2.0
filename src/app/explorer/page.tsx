'use client'
import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { ExplorerBooks } from "../components/ExplorerBooks/ExplorerBooksCard";
import { Tags } from "../components/Tags/Tags";
import { SideBarDropDownMenu } from "../components/SideBarDropDown/SideBarDropDown";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ExplorerBooksProps {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  averageRating: number;
}
export default function Explorer() {
  const { isLoading, data } = useQuery<ExplorerBooksProps[]>({
    queryKey: ["explorerbooks"],
    queryFn: async () => {
      const response = await api.get(`/books`);
      console.log(response.data);

      return response.data;
    },
  });


  return (
    <div className="flex  flex-col px-4 lg:mr-24  lg:px-0  lg:pl-[480px]">
      <div className="flex w-full  flex-col pb-14 pt-7 lg:flex-row lg:justify-between lg:pt-[72px]">
        <div className="flex justify-between pb-10 lg:hidden">
          <h1 className="flex w-full  items-center  gap-4 text-2xl font-bold text-gray-100">
            <Binoculars size={26} className="text-singin" />
            Explorar
          </h1>
          <SideBarDropDownMenu />
        </div>
        <h1 className="hidden w-full items-center gap-4 pb-10 text-2xl font-bold text-gray-100 lg:flex">
          <Binoculars size={26} className="text-singin" />
          Explorar
        </h1>
        <SearchBar />
      </div>
      <div className="flex flex-wrap gap-3   pb-12 ">
        <Tags text={"Tudo"} isSelected />
        <Tags text={"Computação"} />
        <Tags text={"Fantasia"} />
        <Tags text={"Ficção Científica"} />
        <Tags text={"Horror"} />
        <Tags text={"HQ"} />
        <Tags text={"Suspense"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
      </div>

      <div className="grid  grid-cols-2 gap-5 pb-4 lg:grid-cols-3 lg:pb-0 ">
        {data?.map((books) => (
          <ExplorerBooks
            key={books.id}
            title={books.name}
            author={books.author}
            rating={books.averageRating}
            cover={books.cover_url}
            id={books.id}
          />
        ))}
      </div>
    </div>
  );
}
