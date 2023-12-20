import { Star } from "@phosphor-icons/react";
import { BookReview } from "./BookReview";

/* eslint-disable @next/next/no-img-element */
export function PopularBooks() {
  return (
    <div className=" w-full pl-0  pt-6 lg:w-auto lg:pl-16 lg:pt-0 ">
      <div className="flex items-center justify-between pb-5">
        <div className="text-sm text-gray-100">Livros mais populares</div>
        <div className="text-sm font-bold text-custompurple">Ver tudo</div>
      </div>
      <div className="space-y-3">
        <BookReview />
        <BookReview />
        <BookReview />
        <BookReview />
        <BookReview />
      </div>
    </div>
  );
}
