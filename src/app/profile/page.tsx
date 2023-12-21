import { ChartLineUp, User } from "@phosphor-icons/react/dist/ssr";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RatedBooks } from "../components/RatedBooks/RatedBooks";

export default function Profile() {
  return (
    <>
      <div className="flex  lg:gap-16 lg:pl-[480px]    ">
        <div className="lg:pt-[72px]  w-full  pt-7 px-4 lg:w-auto   ">
          <div className="flex  gap-4 items-center pb-10 text-gray-100 text-2xl font-bold">
            <User size={26} className="text-singin" />
            Perfil
          </div>
          <SearchBar />
          <div className="space-y-6 ">
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
