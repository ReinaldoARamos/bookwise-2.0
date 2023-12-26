/* eslint-disable @next/next/no-img-element */
"use client";
import BookwiseLogo from "../logo/Logo";
import { Binoculars, SignIn } from "@phosphor-icons/react";
import { Items } from "./items";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { User } from "@phosphor-icons/react/dist/ssr";

export function Sidebar() {
  const [logged, SetLogged] = useState<boolean>(false);

  const [isloginPage, setIsloginPage] = useState<boolean>(false);

  const path = usePathname();

  return (
    <div
      className={
        path === "/login"
          ? "hidden"
          : "fixed mb-5 ml-5 mt-5 lg:flex w-[239px] hidden   flex-col justify-between rounded-xl bg-[url('/images/Background.png')]"
      }
      style={{ height: "calc(100% - 40px)" }}
    >
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="pb-16">
          <BookwiseLogo />
        </div>

        <div className="flex flex-col space-y-4">
          <Items text={"Início"} redirectUrl={"/"} />
          <Items text={"Explorar"} icon={Binoculars} redirectUrl={"/explorer"} />
          <Items text={"Perfil"} icon={User} redirectUrl={"/profile"} />
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
              <SignIn
                size={24}
                className="text-md text-red-500 group-hover:text-gray-100"
              />
            </div>
          </>
        ) : (
          <>
            <div className="item-center flex gap-3">
              <button className="text-gray-400 group-hover:text-gray-100">
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
