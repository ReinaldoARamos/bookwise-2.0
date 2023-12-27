import { Star } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export function Avatar() {

  const RedirectTo = useRouter();

  function Redirect(url: string) {
   
   RedirectTo.push(url);
 }
 
  return (
    <div className="flex gap-4 lg:pb-10  pb-3">
      <img
        src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
        alt=""
        className="h-10 w-10 rounded-full border border-teal "
        onClick={() => Redirect('/profile')}
        
      />
      <div className="flex flex-col  w-full">
        <div className="flex justify-between items-center ">
          <span className="text-gray-100">Edude Agatha</span>
            <div className="flex gap-[5px]">
              <Star  className="h-4 w-4 lg:h-6 lg:w-6" color="#8381D9" weight="fill" />
              <Star  className="h-4 w-4 lg:h-6 lg:w-6" color="#8381D9" weight="fill" />
              <Star  className="h-4 w-4 lg:h-6 lg:w-6" color="#8381D9" weight="fill" />
              <Star  className="h-4 w-4 lg:h-6 lg:w-6" color="#8381D9" weight="fill" />
              <Star  className="h-4 w-4 lg:h-6 lg:w-6" color="#8381D9" weight="fill" />
            </div>
        </div>
        <span className="text-gray-400">Hoje</span>
      </div>
    </div>
  );
}
