'use client'
import { useState } from "react";

interface TagsProps {
  text: string;
  isSelected?: boolean;
}
export function Tags({ text, isSelected }: TagsProps) {
    const [select, SetSelected] = useState<boolean>(false)

    function Select() {
        SetSelected(true)
    }
  return (
    <div className={`${select ? 'py-1 px-3  border rounded-full cursor-pointer bg-custompurple200 border-custompurple200 hover:text-gray-100 transition duration-150' : "py-1 px-3  border border-starpurple text-starpurple rounded-full hover:cursor-pointer hover:bg-custompurple200 hover:border-custompurple200 hover:text-gray-100 transition duration-150"}  `} onClick={Select}>
      {text}
    </div>
  );
}
