import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./assets/styles/globals.css";
import {Nunito} from "next/font/google"
import { Toaster } from "@/components/ui/sonner";

const font = Nunito({subsets : ["latin"]})


export const metadata: Metadata = {
  title: "Eng-Ducation",
  description: "Website English Education For Children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>
          <Toaster/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
