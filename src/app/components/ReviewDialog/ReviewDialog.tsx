import { Star } from "@phosphor-icons/react/dist/ssr";

/* eslint-disable @next/next/no-img-element */
export function ReviewDialog() {
  return (
    <div className="flex  flex-col bg-reviewCard rounded-[10px]">
      <div className="flex gap-8 px-8 py-6 ">
        <img src="/images/Book.png" width={108} height={152} alt="" />
        <div className="flex flex-col space-y-2">
          <h2 className="text-gray-100 ">
            14 hábitos de um desenvolvedor 
            <br />altamente produtivo
          </h2>
          <span>Zeno Rocha</span>
         
        </div>
        <div className="flex gap-[5px]">
                <Star size={17} color="#8381D9" weight="fill" />
                <Star size={17} color="#8381D9" weight="fill" />
                <Star size={17} color="#8381D9" weight="fill" />
                <Star size={17} color="#8381D9" weight="fill" />
                <Star size={17} color="#8381D9" weight="fill" />
              </div>
      </div>
      
    </div>
  );
}
