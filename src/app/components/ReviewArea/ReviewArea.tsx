import { Check, Star, X } from "@phosphor-icons/react/dist/ssr";

/* eslint-disable @next/next/no-img-element */
export function ReviewArea() {
  return (
    <div className="flex  flex-col rounded-lg bg-reviewCard p-6">
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center  gap-4">
          <img
            src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <span className="text-md font-bold text-gray-100">
            Reinaldo Ramos
          </span>
        </div>
        <div className="flex gap-[5px]">
          <Star size={24} color="#8381D9" />
          <Star size={24} color="#8381D9" />
          <Star size={24} color="#8381D9" />
          <Star size={24} color="#8381D9" />
          <Star size={24} color="#8381D9" />
        </div>
      </div>
      <div className="border border-searchbar bg-background">
        <textarea
          className="h-[164px] w-full resize-none  bg-background px-5 py-3.5 text-sm text-gray-400 focus:outline-none "
          placeholder="Escreva sua avaliação"
        />
        <span className="mb-1 mr-2 flex justify-end text-xs text-gray-400 ">
          200/400
        </span>
      </div>
      <div className="flex justify-end gap-2 pt-3">
        <div className="flex justify-center bg-latestread p-3 transition duration-150 hover:cursor-pointer  hover:bg-searchbar">
          <X size={24} className="text-custompurple " />
        </div>
        <div className="flex justify-center bg-latestread p-3 transition  duration-150 hover:cursor-pointer  hover:bg-searchbar">
          <Check size={24} className="text-customgreen100" />
        </div>
      </div>
    </div>
  );
}
