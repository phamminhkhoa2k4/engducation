import { Loader } from "lucide-react";
import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
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
        <div className="flex items-center justify-center">
          <ClerkLoading >
            <Loader className="h-5 text-muted-foreground w-full mx-auto animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton  />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" variant={"ghost"}>
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
