import { ChartLineUp } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface ItemsProps {
  text: string;
  icon?: React.ElementType;
  redirectUrl: string
}


export function Items({ text, icon: IconComponent = ChartLineUp, redirectUrl }: ItemsProps) {

    const RedirectTo = useRouter();

     function Redirect(url: string) {
      
      RedirectTo.push(url);
    }
    
  return (
    <div className="flex gap-3 group ">
      <div className="w-1 h-6 bg-transparent transition duration-150  rounded-full group-hover:block  group-hover:bg-gradient-to-b from-teal to-purpleguy" />
      <button className=" text-md flex gap-3 transition duration-150 text-gray-400 hover:text-gray-100" onClick={() => Redirect(redirectUrl)}>
        <IconComponent size={24} />
        {text}
      </button>
    </div>
  );
}
