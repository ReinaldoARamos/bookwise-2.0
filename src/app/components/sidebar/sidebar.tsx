/* eslint-disable @next/next/no-img-element */
"use client";
import BookwiseLogo from "../logo/Logo";
import { Binoculars, SignIn, SignOut } from "@phosphor-icons/react";
import { Items } from "./items";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { User } from "@phosphor-icons/react/dist/ssr";
import { useSession, signIn, signOut } from "next-auth/react"

export function Sidebar() {
  const [logged, SetLogged] = useState<boolean>(false);

  const [isloginPage, setIsloginPage] = useState<boolean>(false);

  const path = usePathname();
  function Login() {
    SetLogged(true);
  }

  function LogOut() {
    SetLogged(false);
  }
  return (
    <div
      className={
        path === "/login"
          ? "hidden"
          : "fixed mb-5 ml-5 mt-5 hidden w-[239px] flex-col   justify-between rounded-xl bg-[url('/images/Background.png')] lg:flex"
      }
      style={{ height: "calc(100% - 40px)" }}
    >
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="pb-16">
          <BookwiseLogo />
        </div>

        <div className="flex flex-col space-y-4">
          <Items text={"Início"} redirectUrl={"/"} />
          <Items
            text={"Explorar"}
            icon={Binoculars}
            redirectUrl={"/explorer"}
          />
          {logged ? (
            <Items text={"Perfil"} icon={User} redirectUrl={"/c29cda0d-e3ed-4f9f-83c0-b2a1d97ffdcd"} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="group flex  justify-center pb-6">
        {logged ? (
          <>
            <div className="flex  items-center justify-center gap-3">
              <img
                src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <div>Reinaldo</div>
              <SignOut
                size={24}
                className="text-md text-red-500 group-hover:text-gray-100 hover:cursor-pointer"
                onClick={() => LogOut()}
              />
            </div>
          </>
        ) : (
          <>
            <div className="item-center flex gap-3">
              <button className="text-gray-400 group-hover:text-gray-100 " onClick={() => Login()}>
                Login
              </button>
              <SignIn
                size={24}
                className="text-md text-singin group-hover:text-gray-100"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
