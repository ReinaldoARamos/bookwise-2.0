"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

interface SearchBarProps {
  onInputChange: (value: string) => void;
  isHidden?: boolean;
}
/*
export function SearchBar({
  onInputChange,
}: {
  onInputChange: (value: string) => void;
}) 
*/
export function SearchBar({onInputChange, isHidden} : SearchBarProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputText(newValue);
    onInputChange(newValue);
  };

  return (
    isHidden ? (
      <div
      className={`mb-8 flex w-full items-center justify-between border-background rounded-[4px] border py-3.5 pl-5 pr-3.5`}
    >
      <input
        className="bg-transparent text-background hover:cursor-default border-white placeholder-background outline-none placeholder:text-md"
        placeholder="Buscar livro avaliado"
        disabled
      />
     
      
    </div>
    ) : (
      <div
      className={`mb-8 flex w-full items-center justify-between rounded-[4px] border py-3.5 pl-5 pr-3.5 ${
        isInputFocused ? "border-customgreen200" : "border-searchbar"
      }`}
    >
      <input
        className="bg-transparent text-gray-400 placeholder-gray-400 outline-none placeholder:text-md"
        placeholder="Buscar livro avaliado"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        value={inputText}
        onChange={handleInputChange}
      />
      <MagnifyingGlass
        size={16}
        className={`${
          isInputFocused ? "text-customgreen200" : "text-searchbar"
        }`}
      />
    </div>
    )
  );
}
