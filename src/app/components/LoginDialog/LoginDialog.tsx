import { LoginButton } from "../LoginButton/LoginButton";

export function LoginDialog() {
  return (
    
   <div className="px-[72px]  pb-14">
     <div className="pb-10 text-md font-bold text-center text-gray-200">
          Faça Login para continuar
      </div><div className="space-y-4">
              <LoginButton image="/logos_google-icon.png" text="Entrar com o google" />{" "}
              <LoginButton image="/Vector.png" text="Entrar com o Github" />{" "}
          </div>
   </div>
    
  );
}
