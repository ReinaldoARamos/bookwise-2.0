import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export function SearchBar() {
  return (
    <div className="flex justify-between py-3.5 pl-5 outline-none pr-3.5 border rounded-[4px] border-searchbar items-center w-full mb-8">
      <input
        className="outline-none bg-transparent placeholder:text-md text-gray-400 placeholder-gray-400"
        placeholder="Buscar livro avaliado"
      />
      <MagnifyingGlass size={16} className="text-searchbar" />
    </div>
  );
}
