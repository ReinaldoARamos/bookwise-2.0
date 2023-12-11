/* eslint-disable @next/next/no-img-element */
export function ProfileInfo() {
  return (
    <div>
      <div className="flex fixed  pl-16 pt-[146px] ">
        <div className="flex flex-col justify-center items-center ">
          <img
            src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
            alt=""
            className="h-[72px] w-[72px] rounded-full border-2 border-white "
          />
          <div className="text-center pt-5 text-xl text-gray-100 font-bold">
            Reinaldo Ramos
          </div>
          <div className="text-md text-gray-400 pb-10">
            membro desde 2023
            </div>
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="pt-8">
          Items
        </div>
        </div>
      
      </div>
    </div>
  );
}
