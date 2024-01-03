/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Binoculars,
  ChartLineUp,
  List,
  SignIn,
  SignOut,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export function SideBarDropDownMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const RedirectTo = useRouter();

  function Redirect(url: string) {
    RedirectTo.push(url);
  }

  function Login() {
    setIsLoggedIn(true);
  }

  function LogOut() {
    setIsLoggedIn(false);
  }

  return (
    <DropdownMenu.Root defaultOpen={false}>
      <DropdownMenu.Trigger className="block lg:hidden">
        {isLoggedIn ? (
          <img
            src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
            alt=""
            className="h-8 w-8 rounded-full border border-teal"
          />
        ) : (
          <List size={24} className="text-gray-100" />
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="flex min-w-[220px] flex-col rounded-lg bg-latestread p-4 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <div className="flex flex-col space-y-1">
            <DropdownMenu.Item
              onClick={() => Redirect("/")}
              className=" tx group flex h-[25px] items-center gap-2  rounded-[3px] px-[5px]  text-sm leading-none   outline-none"
            >
              <div className="group-data-[highlighted]:text-white ">
                <ChartLineUp size={16} className="text-singin" />
              </div>
              Início
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onClick={() => Redirect("/explorer")}
              className="group flex h-[25px] items-center gap-2  rounded-[3px] px-[5px]  text-sm leading-none   outline-none"
            >
              <div className="group-data-[highlighted]:text-white ">
                <Binoculars size={16} className="text-singin" />
              </div>
              Explorar
            </DropdownMenu.Item>

            <DropdownMenu.Item className="group  flex  h-[25px] rounded-[3px]  px-[5px] leading-none   outline-none">
              {isLoggedIn ? (
                <div
                  onClick={() => Redirect("/c29cda0d-e3ed-4f9f-83c0-b2a1d97ffdcd")}
                  className="flex items-center  gap-2 text-sm group-data-[highlighted]:text-white "
                >
                  <User size={16} className="text-singin" />
                  Perfil
                </div>
              ) : (
                <div
                  onClick={() => Login()}
                  className="flex items-center  gap-2 text-sm group-data-[highlighted]:text-white "
                >
                  <SignIn size={16} className="text-singin" />
                  Fazer Login
                </div>
              )}
            </DropdownMenu.Item>
            <DropdownMenu.Item className="   ">
              {isLoggedIn ? (
                <div
                  onClick={() => LogOut()}
                  className="group     flex  h-[25px] items-center gap-2 rounded-[3px] px-[5px] text-sm  leading-none outline-none group-data-[highlighted]:text-white "
                >
                  <SignOut size={16} className="text-red-700" />
                  Sair
                </div>
              ) : (
                <></>
              )}
            </DropdownMenu.Item>
          </div>

          <DropdownMenu.Arrow className="fill-latestread" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
