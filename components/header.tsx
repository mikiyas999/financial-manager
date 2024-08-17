import React from "react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import HeaderLogo from "./headern-logo";
import Navigation from "./navigation-logo";
import WelcomeMessage from "./welcome-msg";
import { Filters } from "./filters";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-emerald-700 to-emerald-500 px-4 py-8 lg:px-14 lg:pb-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between w-full mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <div className="flex items-center gap-x-2">
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader className="size-8 animate-spin text-slate-400" />
            </ClerkLoading>
          </div>
        </div>
        <WelcomeMessage />
        <Filters />
      </div>
    </header>
  );
};

export default Header;
