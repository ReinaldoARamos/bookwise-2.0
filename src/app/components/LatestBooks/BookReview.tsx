/* eslint-disable @next/next/no-img-element */
import { Star } from "@phosphor-icons/react";

export function BookReview() {
  return (
    <div className="px-5 py-[18px] bg-reviewCard rounded-lg ">
      <div className="flex gap-5">
        <img src="/images/Book.png" width={64} height={94} alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-md text-gray-100 font-bold">Edudes life</span>
            <span className="text-sm text-gray-400">Edude</span>
          </div>
          <div className="flex ">
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
