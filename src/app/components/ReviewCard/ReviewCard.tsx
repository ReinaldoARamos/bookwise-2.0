/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";

export function ReviewCard() {
  return (
    <div className="rounded-lg bg-reviewCard p-6 lg:w-[608px] ">
      <Avatar />
      <div className="flex  lg:flex-row flex-col gap-5">
        <div className="flex gap-5">
        <img src="/images/Book.png" width={108} height={152} alt="" />
        <div className=" lg:hidden flex flex-col">
          <span className="text-sm text-gray-100">O Sigma</span>
          <span className="text-sm text-gray-400">
            Edude Bon D Skibdy Toilet
          </span>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" hidden lg:flex lg:flex-col">
          <span className="text-sm text-gray-100">O Sigma</span>
          <span className="text-sm text-gray-400">
            Edude Bon D Skibdy Toilet
          </span>
          </div>
          <div className="break-words lg:pt-5  text-sm text-gray-100">
            Edude edude edude Edude edude edude Edude edude edude Edude edude
            
          </div>
        </div>
      </div>
    </div>
  );
}
