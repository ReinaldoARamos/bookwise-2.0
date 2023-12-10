/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";

export function ReviewCard() {
  return (
    <div className="bg-reviewCard w-[608px] rounded-lg ">
      <div className="p-6">
        <Avatar />
        <div className="flex gap-5">
          <img src="/images/Book.png" width={108} height={152} alt="" />
          <div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-100">O Sigma</span>
              <span className="text-sm text-gray-400">
                Edude Bon D Skibdy Toilet
              </span>
            </div>
            <div className="text-sm text-gray-100 pt-5 break-words">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              totam, modi aliquam deleniti voluptates, sapiente possimus nostrum
              temporibus iste itaque accusamus aut libero magnam repellat
              molestiae cum perferendis laborum obcaecati.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
