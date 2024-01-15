/* eslint-disable @next/next/no-img-element */
"use client";
import BookwiseLogo from "../logo/Logo";
import { Binoculars, SignIn, SignOut } from "@phosphor-icons/react";
import { Items } from "./items";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@phosphor-icons/react/dist/ssr";
import { useSession,  signOut } from "next-auth/react"

export function Sidebar() {
 const {data:session} = useSession()

  const [isloginPage, setIsloginPage] = useState<boolean>(false);

  const path = usePathname();
  const RedirectTo = useRouter();

  function Redirect(url: string) {
   
   RedirectTo.push(url);
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
          {session ? (
            <Items text={"Perfil"} icon={User} redirectUrl={session.user.id} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="group flex  justify-center pb-6">
        {session ? (
          <>
            <div className="flex  items-center justify-center gap-3">
              <img
                 src={session.user?.avatar_url }
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <div>{session.user?.name}</div>
              <SignOut
                size={24}
                className="text-md text-red-500 hover:text-gray-100 hover:cursor-pointer"
                onClick={() => signOut()}
              />
            </div>
          </>
        ) : (
          <>
            <div className="item-center flex gap-3">
              <button className="text-gray-400 group-hover:text-gray-100  hover:cursor-pointer " onClick={() => Redirect('/login')} >
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
