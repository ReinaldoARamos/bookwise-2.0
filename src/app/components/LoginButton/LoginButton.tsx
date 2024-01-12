'use client'
import {signIn, signOut, useSession}  from 'next-auth/react'
/* eslint-disable @next/next/no-img-element */
interface loginButtonProps {
    text: string;
    image: string;
    provider?: string;

}
export function LoginButton({ image, text, provider} : loginButtonProps) {
    
  const Sign = (provider: string | undefined) => {
    signIn(provider)
  }

 return (
    <button onClick={() => Sign(provider)}  className="pl-6 py-5 rounded-lg bg-latestread flex lg:pr-[140px]  w-[320px] lg:w-auto gap-5 items-center transition duration-150 hover:bg-latestread hover:text-font" >
       <img width={24} height={20 } alt="" src={`/images/${image}`} />
        {text}
    </button>
 )   
}