import { Star } from "@phosphor-icons/react/dist/ssr";

interface RatingNumber{
    star: number
}
export function RatedStars({star} : RatingNumber) {

    const starsArray = Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className="h-4 w-4"
          color="#8381D9"
          weight={index < star ? "fill" : "regular"}
        />
      ));

      
      return <div className="flex gap-[5px]">{starsArray}</div>;
}