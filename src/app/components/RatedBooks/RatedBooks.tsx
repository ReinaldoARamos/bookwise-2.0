import { Star } from "@phosphor-icons/react/dist/ssr";
import { RatedStars } from "../RatedStars/RatedStarts";


interface RatedBookProps {
  title: string;
  author: string;
  rate: number;
  review: string;
  cover?: string

}
/* eslint-disable @next/next/no-img-element */
export function RatedBooks({author, rate, review,title, cover} : RatedBookProps) {
  return (
    <>

     <div className="pb-2 text-md text-gray-300 ">Há 2 dias</div>
      <div className="flex lg:w-[608px] flex-col rounded-lg bg-reviewCard p-6">
        <div className="flex gap-6 pb-6">
          <img src={cover} width={108} height={152} alt="" className="outline-none"/>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col space-y-0.5">
              <span>{title}</span>
              <span>{author}</span>
            </div>
           <RatedStars star={rate}/>
          </div>
        </div>
        <div className="break-words text-justify">
        {review}
        </div>
      </div>
     
    </>
  );
}
