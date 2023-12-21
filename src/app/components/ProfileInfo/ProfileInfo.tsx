import { ProfileInfoItem } from "./Item";

/* eslint-disable @next/next/no-img-element */
export function ProfileInfo() {
  return (
    <div>
      <div className="lg:fixed flex  pb-6 lg:pb-0  lg:pt-[146px]">
        <div className="flex flex-col lg:items-center lg:justify-center  lg:pl-16 lg:border-l  border-reviewCard ">
         <div className="flex gap-4 lg:gap-0 items-center lg:justify-center lg:flex-col">
         <img
            src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
            alt=""
            className="h-[72px] w-[72px] rounded-full border-2 border-white "
          />
         <div className="flex flex-col">
         <div className="lg:pt-5 text-center text-xl font-bold text-gray-100">
            Reinaldo Ramos
          </div>
          <div className="lg:pb-10 text-md text-gray-400">membro desde 2023</div>
         </div>
         </div>
          <div className="h-1 w-8 rounded-full bg-white hidden lg:block" /> 

          <ProfileInfoItem text="A" />
        </div>
      </div>
    </div>
  );
}
