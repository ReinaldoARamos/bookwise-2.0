'use client'
import { LoginButton } from "../components/LoginButton/LoginButton";
import LoginLogo from "../components/LoginLogo/LoginLogo";
import { RatedBooksSkeleton } from "../components/RatedBooks/RatedBookSkeleton";
import BookwiseLogo from "../components/logo/Logo";
export default function Login() {
  return (
    <div className="flex items-center justify-center gap-48  px-5  py-5 lg:justify-normal lg:px-0 lg:py-0 lg:pl-3.5 ">
      {" "}
      <div
        className={
          "ml-5 mt-5 hidden h-screen items-center justify-center rounded-xl bg-[url('/images/LoginBg.png')] px-60 lg:flex"
        }
        style={{ height: "calc(100vh - 40px)" }}
      >
        <LoginLogo />
      </div>{" "}
      <div className="flex flex-col justify-center ">
        <h1 className="text-2xl font-bold text-gray-100 ">Boas vindas!</h1>
        <span className="pb-10 text-md text-gray-200">
          Faça seu login ou acesse como visitante
        </span>
        <div className="flex flex-col space-y-4">
          <LoginButton
            image="/logos_google-icon.png"
            text="Entrar com o google"
        
          />
          <LoginButton
            image="/Vector.png"
            text="Entrar com o Github"
         
          />
          <LoginButton
            image="/RocketLaunch.png"
            text="Entrar como visitante"

          />
          <RatedBooksSkeleton />
        </div>
      </div>
    </div>
  );
}
