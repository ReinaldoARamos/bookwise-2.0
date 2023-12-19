import { Star } from "@phosphor-icons/react/dist/ssr";

/* eslint-disable @next/next/no-img-element */
export function Comments() {
    return (
        <div className="flex flex-col rounded-lg bg-reviewCard p-6">
            <div className="flex  items-center gap-4 pb-5 ">
                <img
                    src={"https://avatars.githubusercontent.com/u/55931337?v=4"}
                    alt=""
                    className="h-10 w-10 rounded-full"
                />
                <div className=" flex w-full justify-between">
                    <div>
                        <div className="text-md font-bold text-gray-100">Reinaldo</div>
                        <div className="text-sm text-gray-400">Há 2 dias</div>
                    </div>
                    <div className="flex gap-[5px]">
                        <Star size={14} color="#8381D9" weight="fill" />
                        <Star size={14} color="#8381D9" weight="fill" />
                        <Star size={14} color="#8381D9" weight="fill" />
                        <Star size={14} color="#8381D9" />
                        <Star size={14} color="#8381D9" />
                    </div>

                </div>

            </div>
            <div className="break-words max-w-[516px] text-sm text-gray-300" >
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget
            </div>
        </div>
    );
}
