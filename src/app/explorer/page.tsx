import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { SearchBar } from "../components/SearchBar/SearchBar";

export default function Explorer() {
  return (
    <div className="mr-24  flex    pl-[480px]">
      <div className="pt-[72px]  bg-white w-full">

          <h1 className="flex items-center gap-4 pb-10 text-2xl w-full font-bold text-gray-100">
            <Binoculars size={26} className="text-singin" />
            Início
          </h1>
  
 
      </div>
    </div>
  );
}
