"use client";
import { ButtonMd } from "@/typography/Button/ButtonMd/ButtonMd";
import BookwiseLogo from "../logo/Logo";
import { Binoculars, ChartLineUp, SignIn,  } from "@phosphor-icons/react";
import { Items } from "./items";

export function Sidebar() {
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
        <Items text={"Explorar"} icon={Binoculars}/>
        </div>
      </div>
      <div className="flex justify-center gap-4 group">
      <button className="pb-6 group-hover:text-gray-100 text-gray-400">Login</button>
      <SignIn size={24} className="text-singin group-hover:text-gray-100 text-md"/>
      </div>
    </div>
  );
}
