import { ChartLineUp, User } from "@phosphor-icons/react/dist/ssr";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { RatedBooks } from "../components/RatedBooks/RatedBooks";

export default function Profile() {
  return (
    <>
      <div className="flex  gap-16 pl-[480px]  ">
        <div className="pt-[72px] ">
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

/*


  <div className="pt-[72px] ">
            <div className="flex gap-4 ditems-center pb-10 text-gray-100 text-2xl font-bold">
              <ChartLineUp size={26} className="text-singin" />
              Início
            </div>
    
            <div className="flex gap-16">
              <div>
                <div className="hidden pb-5">
                  <div className="text-gray-100 text-sm pb-6 ">
                    Sua última leitura
                  </div>
             
                </div>
                <div className="text-gray-100  text-sm pb-6 ">
                  Avaliações mais recentes
                </div>
              
              </div>
    
            
            </div>
          </div>
* */
