"use client";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface TagsProps {
  id?: string;
  name?: string;
  isSelected?: boolean;
  onClickTag: (tagName: string) => void;
}
export function Tags({ onClickTag }: TagsProps) {
  const [selectedTag, setSelectedTag] = useState<string>("Todos");
  const { isLoading, data } = useQuery<TagsProps[]>({
    queryKey: ["Tags"],
    queryFn: async () => {
      const response = await api.get(`/tags`);

      return response.data;
    },
  });

  function handleTagClick(tag: TagsProps) {
    onClickTag(tag.name || "");
    //@ts-ignore
    setSelectedTag(tag.name || null);
  }

  return (
    <div className="flex flex-wrap gap-3 pb-12">
      {data?.map((tag) => (
        <div
          key={tag.id}
          className={`cursor-pointer rounded-full border ${
            selectedTag === tag.name
              ? "border-custompurple200 bg-custompurple200 hover:text-gray-100"
              : "border-starpurple text-starpurple"
          } px-3 py-1 transition duration-150 hover:cursor-pointer hover:border-custompurple200 hover:bg-custompurple200 hover:text-gray-100`}
          onClick={() => handleTagClick(tag)}
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
}
