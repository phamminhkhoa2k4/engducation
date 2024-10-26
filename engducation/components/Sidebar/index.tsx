import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex bg-white h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            alt=""
            src={"/Logo.png"}
            height={100}
            width={100}
            className="w-10 h-10 object-cover object-center"
          />
          <h1 className="text-2xl font-extrabold text-sky-500 tracking-wide">
            Engducation
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/sidebar/home.png" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/sidebar/leaderboard.png"
        />
        <SidebarItem
          label="Quests"
          href="/quests"
          iconSrc="/sidebar/target.png"
        />
        <SidebarItem label="Shop" href="/shop" iconSrc="/sidebar/shop.png" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
           <UserButton/>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
