import { Star } from "@phosphor-icons/react/dist/ssr";

/* eslint-disable @next/next/no-img-element */
export function RatedBooks() {
  return (
    <>
      <div className="text-md pb-2 text-gray-300">Há 2 dias</div>
      <div className="p-6 flex flex-col w-[608px] bg-reviewCard rounded-lg">
        <div className="flex gap-6 pb-6">
          <img src="/images/Book.png" width={108} height={152} alt="" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col space-y-0.5">
              <span>Edude</span>
              <span>Edude Life</span>
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
        <div className="break-words text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          voluptate dolore cumque odit fugiat est illum optio nesciunt
          voluptatum molestiae, temporibus inventore exercitationem adipisci
          sequi culpa eveniet ducimus possimus blanditiis!
        </div>
      </div>
    </>
  );
}
