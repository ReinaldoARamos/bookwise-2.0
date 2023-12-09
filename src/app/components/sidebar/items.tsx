import { ChartLineUp } from "@phosphor-icons/react";

interface ItemsProps {
  text: string;
  icon?: React.ElementType;
}
export function Items({ text, icon: IconComponent = ChartLineUp }: ItemsProps) {
  return (
    <div className="flex gap-3 group ">
      <div className="w-1 h-6 bg-transparent transition duration-150  rounded-full group-hover:block group-hover:bg-white "></div>
      <button className=" text-md flex gap-3 transition duration-150 text-gray-400 hover:text-gray-100">
        <IconComponent size={24} />
        {text}
      </button>
    </div>
  );
}
