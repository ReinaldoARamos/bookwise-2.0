import { BarChartIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonMdProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export function ButtonMd({ ...props }: ButtonMdProps) {
  return <button {...props} className="text-md flex gap-4"></button>;
}
