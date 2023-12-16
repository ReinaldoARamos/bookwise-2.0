interface TagsProps {
  text: string;
}
export function Tags({ text }: TagsProps) {
  return (
    <div className="py-1 px-3  border border-starpurple text-starpurple rounded-full hover:cursor-pointer hover:bg-custompurple200 hover:border-custompurple200 hover:text-gray-100 transition duration-150">
      {text}
    </div>
  );
}
