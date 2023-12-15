/* eslint-disable @next/next/no-img-element */
interface loginButtonProps {
    text: string;
    image: string;
}
export function LoginButton({ image, text} : loginButtonProps) {
 return (
    <button className="pl-6 py-5 bg-reviewCard flex pr-[140px] gap-5 items-center" >
       <img width={24} height={20 } alt="" src={`/images/${image}`} />
        {text}
    </button>
 )   
}