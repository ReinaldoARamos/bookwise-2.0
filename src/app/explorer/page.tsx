import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { ExplorerBooks } from "../components/ExplorerBooks/ExplorerBooksCard";
import { Tags } from "../components/Tags/Tags";
import { SideBarDropDownMenu } from "../components/SideBarDropDown/SideBarDropDown";

export default function Explorer() {
  return (
    <div className="lg:mr-24  flex px-4 lg:px-0  flex-col  lg:pl-[480px]">
      <div className="lg:pt-[72px] pt-7  pb-14 flex lg:justify-between lg:flex-row flex-col w-full">
        <div className="lg:hidden flex justify-between pb-10">
        <h1 className="flex items-center  gap-4  text-2xl w-full font-bold text-gray-100">
          <Binoculars size={26} className="text-singin" />
          Explorar
        </h1>
        <SideBarDropDownMenu />
        </div>
        <h1 className="lg:flex items-center hidden gap-4 pb-10 text-2xl w-full font-bold text-gray-100">
          <Binoculars size={26} className="text-singin" />
          Explorar
        </h1>
        <SearchBar />
      </div>
      <div className="pb-12 flex gap-3   flex-wrap ">
        <Tags text={"Tudo"} isSelected/>
        <Tags text={"Computação"} />
        <Tags text={"Fantasia"} />
        <Tags text={"Ficção Científica"} />
        <Tags text={"Horror"} />
        <Tags text={"HQ"} />
        <Tags text={"Suspense"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
        <Tags text={"Horror"} />
      </div>

      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-5 lg:pb-0 pb-4 ">
        <ExplorerBooks isRead />
        <ExplorerBooks />
        <ExplorerBooks />
        <ExplorerBooks />
        <ExplorerBooks isRead />
        <ExplorerBooks />
        <ExplorerBooks />
        <ExplorerBooks />
        <ExplorerBooks isRead />
        <ExplorerBooks />
        <ExplorerBooks />
        <ExplorerBooks isRead />
      </div>
    </div>
  );
}
