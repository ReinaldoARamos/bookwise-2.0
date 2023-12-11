import { ProfileInfoItem } from "./Item";

/* eslint-disable @next/next/no-img-element */
export function ProfileInfo() {
  return (
    <div>
      <div className="fixed flex    pt-[146px]">
        <div className="flex flex-col items-center justify-center  pl-16 border-l  border-reviewCard ">
          <img
            src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
            alt=""
            className="h-[72px] w-[72px] rounded-full border-2 border-white "
          />
          <div className="pt-5 text-center text-xl font-bold text-gray-100">
            Reinaldo Ramos
          </div>
          <div className="pb-10 text-md text-gray-400">membro desde 2023</div>
          <div className="h-1 w-8 rounded-full bg-white"></div>

          <ProfileInfoItem text="A" />
        </div>
      </div>
    </div>
  );
}
