import { Star } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { RatedStars } from "../RatedStars/RatedStarts";


interface CommentProps {
  user: string;
  date: string;
  avatar: string;
  commentary: string;
  rating: number;
  userId: string
}
/* eslint-disable @next/next/no-img-element */
export function Comments({avatar, commentary,date, rating,user, userId} : CommentProps) {
  const RedirectTo = useRouter();

  function Redirect(url: string) {
    RedirectTo.push(url);
  }

  return (
    <div className="flex flex-col rounded-lg bg-reviewCard p-6">
      <div className="flex  items-center gap-4 pb-5 ">
        <img
          src={avatar}
          alt=""
          className="h-10 w-10 rounded-full border border-teal"
          onClick={() => Redirect(`/${userId}`)}
        />
        <div className=" flex w-full justify-between">
          <div>
            <div className="text-md font-bold text-gray-100">{user}</div>
            <div className="text-sm text-gray-400">{date}</div>
          </div>
       <RatedStars star={rating}/>
        </div>
      </div>
      <div className="max-w-[516px] break-words text-sm text-gray-300">
       {commentary}
      </div>
    </div>
  );
}
