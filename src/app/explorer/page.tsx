import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { ExplorerBooks } from "../components/ExplorerBooks/ExplorerBooksCard";

export default function Explorer() {
  return (
    <div className="mr-24  flex  flex-col  pl-[480px]">
      <div className="pt-[72px]  pb-14 flex justify-between w-full">
        <h1 className="flex items-center gap-4 pb-10 text-2xl w-full font-bold text-gray-100">
          <Binoculars size={26} className="text-singin" />
          Início
        </h1>
        <SearchBar />
      </div>
      <div className="pb-12">oi...</div>
      
      <div className="grid grid-cols-3 gap-5">
      <ExplorerBooks isRead/>
      <ExplorerBooks />
      <ExplorerBooks />
      <ExplorerBooks />
      <ExplorerBooks isRead/>
      <ExplorerBooks />
      <ExplorerBooks />
      <ExplorerBooks />
      <ExplorerBooks  isRead/>
      <ExplorerBooks />
      <ExplorerBooks />
      <ExplorerBooks  isRead/>
      </div>
    </div>
  );
}
