/* eslint-disable @next/next/no-img-element */
"use client";
import { ButtonMd } from "@/typography/Button/ButtonMd/ButtonMd";
import BookwiseLogo from "../logo/Logo";
import { Binoculars, ChartLineUp, SignIn } from "@phosphor-icons/react";
import { Items } from "./items";
import { useState } from "react";
import { log } from "console";

export function Sidebar() {
  const [logged, SetLogged] = useState<boolean>(false);
  return (
    <div
      className="fixed mb-5 ml-5 mt-5 flex w-[239px] flex-col justify-between rounded-xl bg-[url('/images/Background.png')]"
      style={{ height: "calc(100% - 40px)" }}
    >
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="pb-16">
          <BookwiseLogo />
        </div>

        <div className="flex flex-col space-y-4">
          <Items text={"Início"} />
          <Items text={"Explorar"} icon={Binoculars} />
        </div>
      </div>
      <div className="flex justify-center  group pb-6">
        {logged ? (
          <>
            <div className="flex  gap-3 items-center justify-center">
              <img
                src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <div>Reinaldo</div>
              <SignIn
                size={24}
                className="text-red-500 group-hover:text-gray-100 text-md"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex item-center gap-3">
              <button className="group-hover:text-gray-100 text-gray-400">
                Login
              </button>
              <SignIn
                size={24}
                className="text-singin group-hover:text-gray-100 text-md"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/*
     <button className="pb-6 group-hover:text-gray-100 text-gray-400">Login</button>
      <SignIn size={24} className="text-singin group-hover:text-gray-100 text-md"/>
* */
