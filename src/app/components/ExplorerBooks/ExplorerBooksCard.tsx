import { Star } from "@phosphor-icons/react/dist/ssr";

interface ExplorerBooksProps {
    isRead?: boolean;
}
/* eslint-disable @next/next/no-img-element */
export function ExplorerBooks({isRead} : ExplorerBooksProps) {
  return (
    <div className="bg-reviewCard rounded-lg flex ">
        
      <div className="px-5 py-4 flex  gap-5  ">
      
        <img src="/images/Book.png" width={108} height={152} alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-md text-gray-100 font-bold "> Edude Edude</span>
            <span className="text-sm text-gray-300">Edude Adventures</span>
          </div>
          <div className="flex gap-[5px]">
            <Star size={14} color="#8381D9" weight="fill"/> 
            <Star size={14} color="#8381D9" weight="fill"/> 
            <Star size={14} color="#8381D9" weight="fill"/> 
            <Star size={14} color="#8381D9" /> 
            <Star size={14} color="#8381D9"/> 
          </div>
        </div>
       
      </div>
      <div>
        {isRead ? <div className=" text-customgreen100 py-1 px-3 bg-customgreen300  font-bold rounded-b-lg  rounded-l-lg">LIDO</div> : <div></div>}
        </div>
    </div>
  );
}
