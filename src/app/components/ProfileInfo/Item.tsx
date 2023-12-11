import {
  BookOpen,
  Books,
  UserList,
  BookmarkSimple,
} from "@phosphor-icons/react/dist/ssr";

interface ItemsProps {
  text: string;
  icon?: React.ElementType;
}

export function ProfileInfoItem({ text }: ItemsProps) {
  return (
    <div className="flex flex-col space-y-10 pt-8">
      <div className="flex items-center gap-5">
        <BookOpen size={28} className="text-singin" />
        <div className="flex flex-col">
          <span className="text-md font-bold text-gray-100">1234</span>
          <span className="text-sm text-gray-300">Páginas Lidas</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Books size={28} className="text-singin" />
        <div className="flex flex-col">
          <span className="text-md font-bold text-gray-100">10</span>
          <span className="text-sm text-gray-300">Livros Avaliados</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <UserList size={28} className="text-singin" />
        <div className="flex flex-col">
          <span className="text-md font-bold text-gray-100">8</span>
          <span className="text-sm text-gray-300">Autores Lidos</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <BookmarkSimple size={28} className="text-singin" />
        <div className="flex flex-col">
          <span className="text-md font-bold text-gray-100">
            Ciência da computação
          </span>
          <span className="text-sm text-gray-300">Categoria mais lida</span>
        </div>
      </div>
    </div>
  );
}
