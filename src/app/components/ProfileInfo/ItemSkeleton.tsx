import {
    BookOpen,
    Books,
    UserList,
    BookmarkSimple,
  } from "@phosphor-icons/react/dist/ssr";
  import Skeleton from "react-loading-skeleton";
 
  
  export function ProfileItemSkeleton() {
    return (
      <div className="flex flex-col space-y-10 pt-8">
        <div className="flex items-center gap-5">
          <BookOpen size={28} className="text-singin" />
          <div className="flex flex-col">
          <Skeleton width={68} count={2} />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Books size={28} className="text-singin" />
          <div className="flex flex-col">
          <Skeleton width={68} count={2} />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <UserList size={28} className="text-singin" />
          <div className="flex flex-col">
          <Skeleton width={68} count={2} />

          </div>
        </div>
        <div className="flex items-center gap-5">
          <BookmarkSimple size={28} className="text-singin" />
          <div className="flex flex-col">
          <Skeleton width={68} count={2} />
          </div>
        </div>
      </div>
    );
  }
  