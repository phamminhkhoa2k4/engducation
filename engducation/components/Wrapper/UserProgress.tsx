import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
    activeCourse : {imageSrc : string ,title : string} ;
    hearts : number ;
    points : number;
    hasActiveSubscription : boolean;
}

const UserProgress  = ({activeCourse ,hearts,points,hasActiveSubscription} : Props) => {
    return (
      <div className="flex items-center justify-between gap-x-2 w-full">
        <Link href={"/courses"}>
          <Button variant={"ghost"}>
            <Image
              src={activeCourse.imageSrc}
              alt={activeCourse.title}
              className="rounded-md border"
              height={32}
              width={32}
            />
          </Button>
        </Link>
        <Link href="/shop">
          <Button className="text-rose-500" variant={"ghost"}>
            <Image
              src={"/lightning.png"}
              alt="thunder"
              height={28}
              width={28}
              className="mr-2"
            />
            {points}
          </Button>
        </Link>
        <Link href="/shop">
          <Button className="text-rose-500" variant={"ghost"}>
            <Image
              src={"/heart.png"}
              alt="hearts"
              height={28}
              width={28}
              className="mr-2"
            />
            {hasActiveSubscription ? (
              <InfinityIcon className="h-4 w-4 stroke-[3]" />
            ) : (
              hearts
            )}
          </Button>
        </Link>
      </div>
    );
}

export default UserProgress;