import { useRouter } from "next/navigation";
const RedirectTo = useRouter();
export function UseRedirect(url: string) {
  
  RedirectTo.push(url);
}
