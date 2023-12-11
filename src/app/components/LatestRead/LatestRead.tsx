/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";

export function LatestRead() {
  return (
    <div className="bg-latestread rounded-lg w-[608px] ">
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
              Edude edude edude Edude edude edude Edude edude edude Edude edude
              edude Edude edude edude Edude edude edude Edude edude edude Edude
              edude edude Edude edude edude Edude edude edude Edude edude edude
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}