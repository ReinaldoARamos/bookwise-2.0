import { BookOpen, BookmarkSimple, Star, X } from "@phosphor-icons/react/dist/ssr";
import { Comments } from "../Comments/Comments";
import * as Dialog from "@radix-ui/react-dialog";
import { LoginDialog } from "../LoginDialog/LoginDialog";
/* eslint-disable @next/next/no-img-element */
export function ReviewDialog() {
  return (
    <>
      <div className="flex  flex-col rounded-[10px] bg-reviewCard ">
        <div className="flex flex-col  px-8 py-6 ">
          <div className="flex gap-8 border-b  border-b-gray-800 pb-10 ">
            <img src="/images/Book.png" width={171} height={242} alt="" />
            <div className="flex flex-col  justify-between">
              <div className="flex flex-col space-y-2 ">
                <h2 className="break-words text-lg font-bold text-gray-100">
                  14 hábitos de um desenvolvedor
                  <br /> altamente produtivo
                </h2>
                <span className="text-md text-gray-300">Zeno Rocha</span>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex gap-[5px]">
                  <Star size={17} color="#8381D9" weight="fill" />
                  <Star size={17} color="#8381D9" weight="fill" />
                  <Star size={17} color="#8381D9" weight="fill" />
                  <Star size={17} color="#8381D9" weight="fill" />
                  <Star size={17} color="#8381D9" weight="fill" />
                </div>
                <span className="text-sm text-gray-400">1 avaliação</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[60px] pt-6">
            <div className="flex items-center gap-4">
              <BookmarkSimple size={24} className="text-singin" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-300">Caterogia</span>
                <span className="text-md font-bold text-gray-100">
                  Computação, Educação
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <BookOpen size={24} className="text-singin" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-300"> Páginas</span>
                <span className="text-md font-bold text-gray-100">160</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[46px]">
        <div className="flex w-full justify-between pb-[22px]">
          <span className="text-sm text-gray-200">Avaliações</span>
          <Dialog.Root>
            <Dialog.Trigger>
              <span className="text-sm font-bold text-custompurple hover:cursor-pointer">
                Avaliar
              </span>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0   z-20 bg-background/50" />
              <Dialog.Content className="fixed  z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-xl focus:outline-none border- bg-reviewCard  ">
              <Dialog.Close className="flex w-full justify-end pr-4 py-4 ">
          <X size={24} />
        </Dialog.Close>
        <LoginDialog />
            </Dialog.Content>
            </Dialog.Portal>
           
          </Dialog.Root>
        </div>
        <div className="flex flex-col space-y-3 rounded-lg">
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </div>
      </div>
    </>
  );
}
