"use client";
import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { ExplorerBooks } from "../components/ExplorerBooks/ExplorerBooksCard";
import { Tags } from "../components/Tags/Tags";
import { SideBarDropDownMenu } from "../components/SideBarDropDown/SideBarDropDown";
import diacritics from 'diacritics';
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface ExplorerBooksProps {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  averageRating: number;

  categories: [
    {
      category: {
        id: string;
        name: string;
      };
    }
  ];
}
export default function Explorer() {
  const [selectedTagName, setSelectedTagName] = useState<string>();
  const [filter, setFilter] = useState<string>("");
  const { data } = useQuery<ExplorerBooksProps[]>({
    queryKey: ["explorerbooks"],
    queryFn: async () => {
      const response = await api.get(`/books`);

      return response.data;
    },
  });

  function handleSearchBar(value: string) {
    setFilter(value);

  }

  function handleTagClick(tagName: string) {
    setSelectedTagName(tagName);
  }
  const filteredBooks = data?.filter((books) =>
    books.categories.some((category) =>
      //@ts-ignore
      category?.category.name?.includes(selectedTagName)
    )
  );
  const removeDiacritics = (str : string) => diacritics.remove(str);
  const searchBooks = data?.filter((books) =>
  removeDiacritics(books.name.toLowerCase()).includes(
    removeDiacritics(filter.toLowerCase())
  )
);

console.log(searchBooks)

  

  return (
    <div className="flex  flex-col px-4 pb-60  lg:mr-24  lg:px-0 lg:pb-0 lg:pl-[480px]">
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
    <SearchBar onInputChange={handleSearchBar}/>
      </div>
      <div className="flex flex-wrap gap-3   pb-12 ">
        <Tags onClickTag={handleTagClick} />
      </div>

      {selectedTagName === "Todos" || !selectedTagName ? (
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
      ) : (
        <div className="grid  grid-cols-2 gap-5 pb-4 lg:grid-cols-3 lg:pb-0 ">
          {filteredBooks?.map((filter) => {
            return (
              <ExplorerBooks
                key={filter.id}
                title={filter.name}
                author={filter.author}
                rating={filter.averageRating}
                cover={filter.cover_url}
                id={filter.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
