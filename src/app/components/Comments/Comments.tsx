import { Star } from "@phosphor-icons/react/dist/ssr";

/* eslint-disable @next/next/no-img-element */
export function Comments() {
  return (
    <div className="flex flex-col bg-reviewCard p-6">
      <div className="flex  items-center  gap-3">
        <img
          src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <div className="bg-white w-full">
        <div className="text-md text-gray-100 font-bold">Reinaldo</div>
        <div className="flex gap-[5px]">
                <Star size={14} color="#8381D9" weight="fill" />
                <Star size={14} color="#8381D9" weight="fill" />
                <Star size={14} color="#8381D9" weight="fill" />
                <Star size={14} color="#8381D9" />
                <Star size={14} color="#8381D9" />
              </div>
        </div>
      </div>
    </div>
  );
}
