"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export function SearchBar() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div
      className={`flex justify-between py-3.5 pl-5 pr-3.5 border rounded-[4px] items-center w-full mb-8 ${
        isInputFocused ? "border-customgreen200" : "border-searchbar"
      }`}
    >
      <input
        className="outline-none bg-transparent placeholder:text-md text-gray-400 placeholder-gray-400"
        placeholder="Buscar livro avaliado"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      <MagnifyingGlass
        size={16}
        className={`${
          isInputFocused ? "text-customgreen200" : "text-searchbar"
        }`}
      />
    </div>
  );
}
