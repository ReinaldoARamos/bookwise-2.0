import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
interface loginButtonProps {
    text: string;
    image: string;

}
export function LoginButton({ image, text} : loginButtonProps) {
    
  /*
  const RedirectTo = useRouter();

  function Redirect(url : string ) {
    RedirectTo.push(url);

    onClick={() => Redirect(redirectUrl)}
  }
  */
 return (
    <button  className="pl-6 py-5 rounded-lg bg-latestread flex lg:pr-[140px]  w-[320px] lg:w-auto gap-5 items-center transition duration-150 hover:bg-latestread hover:text-font" >
       <img width={24} height={20 } alt="" src={`/images/${image}`} />
        {text}
    </button>
 )   
}