import Skeleton from "react-loading-skeleton";

/* eslint-disable @next/next/no-img-element */
export function CommentsSkeleton() {

  return (
    <div className="flex flex-col rounded-lg bg-reviewCard p-6">
      <div className="flex  items-center gap-4 pb-5 ">
        <Skeleton
          
       
          width={40}
          height={40}
        />
        <div className=" flex w-full justify-between">
          <div>
            <Skeleton width={124  } count={2} />
          </div>
          <Skeleton width={124  } />
        </div>
      </div>
      <Skeleton width={180  }  />
    </div>
  );
}
