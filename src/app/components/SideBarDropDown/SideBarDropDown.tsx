import { ChartLineUp, List, User } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Binoculars } from "@phosphor-icons/react";
export function SideBarDropDownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="lg:hidden block">
        <List size={24} className="text-gray-100" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] flex flex-col  bg-reviewCard rounded-md p-4 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
           <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Início
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                  <ChartLineUp size={12} className="text-singin" />
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Explorar
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                  <Binoculars size={12} className="text-singin" />
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                 Perfil
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                  <User size={12} className="text-singin" />
                  </div>
                </DropdownMenu.Item>

       

          <DropdownMenu.Arrow className="fill-reviewCard" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
