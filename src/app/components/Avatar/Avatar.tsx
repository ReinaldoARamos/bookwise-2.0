import { Star } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { RatedStars } from "../RatedStars/RatedStarts";

interface AvatarProps {
  ratingNumber: number;
  name: string;
  date: string;
  image: string;
  userId: string;
}
/* eslint-disable @next/next/no-img-element */
export function Avatar({
  ratingNumber,
  date,
  image,
  name,
  userId,
}: AvatarProps) {
  const RedirectTo = useRouter();

  function Redirect(id: string) {
    RedirectTo.push(id);
  }

  return (
    <div className="flex gap-4 pb-3  lg:pb-10">
      <img
        src={image}
        alt=""
        className="h-10 w-10 rounded-full border border-teal hover:cursor-pointer"
        onClick={() => Redirect(`/${userId}`)}
      />
      <div className="flex w-full  flex-col">
        <div className="flex items-center justify-between ">
          <span className="text-gray-100">{name}</span>
          <RatedStars star={ratingNumber} />
        </div>
        <span className="text-gray-400">{date}</span>
      </div>
    </div>
  );
}

/*


                
* */
