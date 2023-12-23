import { ChartLineUp, User } from "@phosphor-icons/react/dist/ssr";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RatedBooks } from "../components/RatedBooks/RatedBooks";
import { SideBarDropDownMenu } from "../components/SideBarDropDown/SideBarDropDown";

export default function Profile() {
  return (
    <>
      <div className="flex lg:pb-0 pb-4  lg:gap-16 lg:pl-[480px]    ">
        <div className="w-full  px-4  pt-7 lg:w-auto lg:pt-[72px]   ">
        <div className="lg:hidden flex justify-between pb-10">
        <h1 className="flex items-center  gap-4  text-2xl w-full font-bold text-gray-100">
          <User size={26} className="text-singin" />
          Perfil
        </h1>
        <SideBarDropDownMenu />
        </div>

          <div className="lg:flex hidden  items-center gap-4 pb-10 text-2xl font-bold text-gray-100">
            <User size={26} className="text-singin" />
            Perfil
          </div>
          <SearchBar />
          <div className="block lg:hidden">
            <ProfileInfo />
          </div>
          <div className="space-y-6 ">
            <RatedBooks />
            <RatedBooks />
            <RatedBooks />
            <RatedBooks />
          </div>
        </div>
        <div className="hidden lg:block">
          <ProfileInfo />
        </div>
      </div>
    </>
  );
}

/*

import { ChartLineUp, User } from "@phosphor-icons/react/dist/ssr";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RatedBooks } from "../components/RatedBooks/RatedBooks";

export default function Profile() {
  return (
    <>
      <div className="flex  gap-16 lg:pl-[480px]  ">
        <div className="pt-[72px]  px-4">
          <div className="flex  gap-4 items-center pb-10 text-gray-100 text-2xl font-bold">
            <User size={26} className="text-singin" />
            Perfil
          </div>
          <SearchBar />
          <div className="space-y-6">
          <RatedBooks />
          <RatedBooks />
          <RatedBooks />
          <RatedBooks />
          </div>
        </div>
        <ProfileInfo />
      </div>
    </>
  );
}

* */
