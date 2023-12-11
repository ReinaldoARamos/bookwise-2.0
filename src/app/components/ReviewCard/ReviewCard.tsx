/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";

export function ReviewCard() {
  return (
    <div className="w-[608px] rounded-lg bg-reviewCard p-6 ">
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
          <div className="break-words pt-5 text-sm text-gray-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odio
            molestias dicta dolores laboriosam vero. Facere, magni deserunt.
            Doloremque, neque. Odio ullam et, odit dicta sint natus ipsum at
            impedit!
          </div>
        </div>
      </div>
    </div>
  );
}
