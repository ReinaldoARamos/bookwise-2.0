import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import StarRating from "../ReviewStar/ReviewStar";
import { api } from "@/lib/axios";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useSession } from "next-auth/react";
/* eslint-disable @next/next/no-img-element */

interface ReviewAreaProps {
  ShowCommentary?: boolean;
  onHideCommentary: () => void;
  book_id: string;
  refresh?: boolean;
  username: string;
  avatar_url: string;

}
export function ReviewArea({
  ShowCommentary,
  book_id,
  refresh,
  avatar_url,
  username,
  onHideCommentary,
}: ReviewAreaProps) {
  const [description, setReviewChangeText] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [text, setNewText] = useState<string>("");
  const [charcounter, setCharCounter] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSubmit, setcanSubmit] = useState(false);
  const [rate, setSelectedStarIndex] = useState<number | null>(0);
  const [parent, enableAnimations] = useAutoAnimate({duration:150})
  const {data:session} = useSession()

  function handleReviewText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newText = event.target.value;
    setReviewChangeText(newText);
    setNewText(newText);
    const charCount = newText.length;
    setCharCounter(charCount);

    if (charCount >= 400) {
      setNewText(description);
      setReviewChangeText(text);
      setCharCounter(400);
    }
  }
  function handleStarChange(index: number | null) {
    setSelectedStarIndex(index);
  }

  function SubmitReview() {
    setReview(description);
  }

  const user_id = session?.user.id;

  async function handleCreateReview() {
    try {
      if (rate === null || description.trim() === "") {
        setcanSubmit(false);
        return;
      }

      onHideCommentary();

      const response = await api.post(`registerreview`, {
        rate,
        description,
        created_at: new Date(),
        book_id,
        user_id,
      });
    } catch (error) {
      console.error("Validation error:", error);
    } finally {
      setIsSubmitting(false); // Desativar o estado de submissão após a conclusão da solicitação
    }
  }

  useEffect(() => {

  }, [description])

  return (
    <div className="flex  flex-col rounded-lg bg-reviewCard p-6" >
      <div className="flex items-center justify-between pb-6">
        <div className="flex w-full  items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={avatar_url}
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <span className="text-md font-bold text-gray-100  ">
             {username}
            </span>
          </div>
          <div className="flex gap-[5px]">
            <StarRating onSelectedStarChange={handleStarChange} />
          </div>
        </div>
      </div>
      <div className="border border-searchbar bg-background">
        <textarea
          className="h-[164px] w-full resize-none  bg-background px-5 py-3.5 text-sm text-gray-400 focus:outline-none "
          placeholder="Escreva sua avaliação"
          onChange={handleReviewText}
          value={description}
        />
        <span className="mb-1 mr-2 flex justify-end text-xs text-gray-400 ">
          {charcounter}/400
        </span>
      </div>
      <div className="flex justify-end gap-2 pt-3">
       
       
          <button
            onClick={() => {
              onHideCommentary();
              setcanSubmit(true);
            }}
            className="flex justify-center bg-latestread p-3 transition duration-150 hover:cursor-pointer  hover:bg-searchbar"
          >
            <X size={24} className="text-custompurple " />
          </button>
          <button
            onClick={() => {
              SubmitReview();

              handleCreateReview();
            }}
            disabled={isSubmitting}
            className="flex justify-center bg-latestread p-3 transition duration-150 hover:cursor-pointer  hover:bg-searchbar disabled:cursor-not-allowed  disabled:opacity-50"
          >
            <Check size={24} className="text-customgreen100" />
          </button>
        </div>
      
    </div>
  );
}