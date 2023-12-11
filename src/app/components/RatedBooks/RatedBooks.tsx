import { Star } from "@phosphor-icons/react/dist/ssr";

/* eslint-disable @next/next/no-img-element */
export function RatedBooks() {
  return (
    <>
      <div className="pb-2 text-md text-gray-300">Há 2 dias</div>
      <div className="flex w-[608px] flex-col rounded-lg bg-reviewCard p-6">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore
          non, veniam asperiores distinctio omnis amet necessitatibus saepe!
          Quam veniam minima quia odio nemo, aliquam harum tempora amet officiis
          non?
        </div>
      </div>
    </>
  );
}
