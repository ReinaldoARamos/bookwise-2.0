"use client";
import { ButtonMd } from "@/typography/Button/ButtonMd/ButtonMd";
import BookwiseLogo from "../logo/Logo";
import { ChartLineUp } from "@phosphor-icons/react";

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
          <ButtonMd>
            <ChartLineUp size={24} /> ola
          </ButtonMd>
          <ButtonMd>Explorar</ButtonMd>
        </div>
      </div>
      <button className="pb-6">Login</button>
    </div>
  );
}
