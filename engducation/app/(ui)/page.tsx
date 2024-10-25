import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image
          src={"/circle/circle-1.png"}
          alt=""
          height={400}
          width={400}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col lg:flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center  lg:mt-20">
            Learn, practice, and master new languages with Engducation
          </h1>
        </div>
        <div className="w-[200px] h-[200px] lg:w-[240px] lg:h-[130px] lg:my-5">
          <Image
            src={"/heros/heros-1.png"}
            alt=""
            height={400}
            width={400}
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button className="w-full" size={"lg"} variant={"secondary"}>
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button
                  className="w-full"
                  size={"lg"}
                  variant={"primaryOutline"}
                >
                  I already have an account !
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                size={"lg"}
                variant={"secondary"}
                className="w-full"
                asChild
              >
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
