import { Star } from "@phosphor-icons/react";

/* eslint-disable @next/next/no-img-element */
export function Avatar() {
  return (
    <div className="flex gap-4 pb-10">
      <img
        src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col  w-full">
        <div className="flex justify-between  ">
          <span className="text-gray-100">Edude Agatha</span>
          <div className="flex ">
            <Star size={24} />
            <Star size={24} />
            <Star size={24} />
            <Star size={24} />
            <Star size={24} />
          </div>
        </div>
        <span className="text-gray-400">Hoje</span>
      </div>
    </div>
  );
}
