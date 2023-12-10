import { Star } from "@phosphor-icons/react";
import { BookReview } from "./BookReview";

/* eslint-disable @next/next/no-img-element */
export function PopularBooks() {
  return (
    <div className=" w-full pr-24">
      <div className="flex justify-between items-center pb-5">
        <div className="text-sm text-gray-100">Livros mais populares</div>
        <div className="text-sm text-custompurple font-bold">Ver tudo</div>
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
