import Image from "next/image";
import { Button } from "../ui/button";


export default function Footer() {
  return (
    <footer className="hidden lg:block h-20 w-full border border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant={"ghost"} className="w-full">
          <Image
            src={"/flags/VN.png"}
            alt="vietnam"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Vietnamese
        </Button>
        <Button size="lg" variant={"ghost"} className="w-full">
          <Image
            src={"/flags/UK.png"}
            alt="vietnam"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          United Kingdom
        </Button>
      </div>
    </footer>
  );
}
