"use client";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Binoculars,
  ChartLineUp,
  List,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export function SideBarDropDownMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const RedirectTo = useRouter();

     function Redirect(url: string) {
      
      RedirectTo.push(url);
    }
    
  

  return (
    <DropdownMenu.Root defaultOpen={false}>
      <DropdownMenu.Trigger className="lg:hidden block">
        <List size={24} className="text-gray-100" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] flex flex-col rounded-lg bg-reviewCard p-4 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
           <DropdownMenu.Item   onClick={() => Redirect('/')} className=" tx group gap-2 items-center text-sm leading-none  rounded-[3px] flex  h-[25px] px-[5px]   outline-none">
          <div className="group-data-[highlighted]:text-white ">
              <ChartLineUp size={16} className="text-singin" />
            </div>
            Início
           
          </DropdownMenu.Item>
          <DropdownMenu.Item   onClick={() => Redirect('/explorer')} className="group gap-2 items-center text-sm leading-none  rounded-[3px] flex  h-[25px] px-[5px]   outline-none">
          <div className="group-data-[highlighted]:text-white ">
              <Binoculars size={16} className="text-singin" />
            </div>
            Explorar
           
          </DropdownMenu.Item>
         {isLoggedIn ? (
           <DropdownMenu.Item   onClick={() => Redirect('/profile')} className="group gap-2 items-center text-sm leading-none  rounded-[3px] flex  h-[25px] px-[5px]   outline-none">
           <div className="group-data-[highlighted]:text-white ">
               <User size={16} className="text-singin" />
             </div>
             Perfil
            
           </DropdownMenu.Item>
         ) : (
          <></>
         )}

          <DropdownMenu.Arrow className="fill-reviewCard" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
